const audioHighNoon = new Audio('src/assets/itshighnoon.mp3');
// Boolean for toggling the animation playing state.
let isAnimationPlaying = false;

// Camera location data, it gets populated further down
let cameraLocation = {
  longitude: 0,
  latitude: 0,
};

// How many gps updates have occurred
let gpsUpdates = 0;

// on window load listen for the gps-camera update
window.onload = () => {
  window.addEventListener('gps-camera-update-position', (e) => {
    cameraLocation = e.detail.position;
    onGeolocationMove(cameraLocation);
  });
};

// hydrate the gui with current gps data from the above listener
// Tick up the gps update
function onGeolocationMove({ latitude, longitude, accuracy }) {
  gpsUpdates++;
  document.getElementById('gps-latitude-data').innerHTML = latitude;
  document.getElementById('gps-longitude-data').innerHTML = longitude;
  document.getElementById('gps-accuracy-data').innerHTML =
    Math.round(accuracy * 1000) / 1000 + 'm';
  document.getElementById('gps-update-data').innerHTML = gpsUpdates.toString();
}

// Interval so we can reset the gps request counter,
// it lets us see how many there are per second
const interval = setInterval(() => {
  gpsUpdates = 0;
}, 1000);

// called on a button press, staticlly add the model and animation entities.
// This is done so the stage and camera can fully load before we add entities to it
// or they can get stuck under the camera.
function setupScene() {
  // disable the button so we only get one McCree
  document.getElementById('btn--load-scene').setAttribute('disabled', 'true');

  let scene = document.querySelector('a-scene');
  // set a lat/long offset so the model doesn't appear in the camera space
  // This works out to about 2m away. It will be populated north east of the camera space.
  // Unless we can get compass coordinates, its an arbitrary placement.
  let latitude = cameraLocation.latitude + 0.000005;
  let longitude = cameraLocation.longitude + 0.000005;

  // Attach Base Plane
  let plane = document.createElement('a-plane');
  // setup a Object with all the attributes in them
  const planeAttributes = {
    id: 'mccree-base-spinner',
    position: '0 -1.601 0',
    rotation: '-90 0 0',
    scale: '0.25 0.25 0.25',
    material: 'src: #mccree-spinner; transparent: true; alpha-test:0.9',
    'gps-projected-entity-place': `latitude: ${latitude}; longitude: ${longitude};`,
    animation__rotation: `
        property: rotation; 
        startEvents: startAnimation; 
        from: -90 0 0; 
        to:-90 0 270; 
        dur: 2500; 
        easing: easeOutQuad;`,
    animation__scale: `
        property: scale; 
        startEvents: startAnimation; 
        from: 0.45 0.45 0.45; 
        to: 5 5 5; 
        dur: 1000; 
        easing: easeOutQuad;`,
    animation__opacity: `
        property: opacity; 
        startEvents: startAnimation; 
        delay: 3000; 
        from: 1; 
        to: 1; 
        dur: 1000;`,
    animation__scalereset: `
        property: scale; 
        startEvents: startAnimation;
        delay: 4000; 
        to: 0.45 0.45 0.45; 
        dur: 1;`,
    animation__opacityreset: `
        property: opacity; 
        startEvents: startAnimation; 
        delay: 4010; 
        from: 0; 
        to: 1; 
        dur: 1`,
  };
  // add attributes automatically so we don't have to do it manually
  setAttributes(plane, planeAttributes);
  scene.appendChild(plane);

  // Attach Particle System
  let particleSystem = document.createElement('a-entity');
  // setup a Object with all the attributes in them
  const particleSystemAttributes = {
    id: 'particle-system',
    position: '0 -1.35 -0.25',
    scale: '2 2 2',
    'gps-projected-entity-place': `latitude: ${latitude}; longitude: ${longitude};`,
    'particle-system': `
                texture: src/assets/overwatch-logo.png;
                type:3;
                color: #ffffff, #ffffff; 
                size: 1;
                positionSpread: 0 0 0;
                rotationAxis:y;
                velocityValue: 0 2.5 0;
                velocitySpread: 0 .75 0;
                accelerationValue: 0 -1 0;
                accelerationSpread: 1 0 1; 
                rotationAngle: 0; 
                blending: 1; 
                particleCount: 10; 
                maxAge: 1.5; 
                enabled: false;`,
  };
  // add attributes automatically so we don't have to do it manually
  setAttributes(particleSystem, particleSystemAttributes);
  scene.appendChild(particleSystem);

  // Attach Mccree Model
  let model = document.createElement('a-entity');
  // setup a Object with all the attributes in them
  const modelAttributes = {
    id: 'mccree--model',
    position: '0 -1.6 0',
    scale: '1.5 1.5 1.5',
    'gltf-model': '#mccree--asset',
    'gps-projected-entity-place': `latitude: ${latitude}; longitude: ${longitude};`,
    mccreehandler: 'true',
    //sound: 'src: #audio-high-noon; on: click',
  };
  // add attributes automatically so we don't have to do it manually
  setAttributes(model, modelAttributes);
  scene.appendChild(model);

  AFRAME.registerComponent('mccreehandler', {
    init: function () {
      this.el.addEventListener('click', () => {
        // When the model is clicked, run the function onMccreeHit
        onMccreeHit();
      });
    },
  });
}

function onMccreeHit() {
  console.log('mccree hit', isAnimationPlaying);
  // if the animation is not playing already, start the animation
  if (!isAnimationPlaying) {
    // Toggle the animation playing boolean so it can't be restarted
    // while it's already playing
    isAnimationPlaying = true;

    // Play the audio
    audioHighNoon.play();

    // Start the animation for the spinning base
    const mccreeSpinner = document.getElementById('mccree-base-spinner');
    mccreeSpinner.emit('startAnimation');

    // Start the particle system throwing out the Overwatch Logos
    const particleSystem = document.getElementById('particle-system');
    particleSystem.components['particle-system'].startParticles();

    // Wait for 2.5 seconds
    setTimeout(function () {
      // Stop the particle system throwing out the Overwatch Logos
      particleSystem.components['particle-system'].stopParticles();
    }, 2500);

    // Wait for 5 seconds
    setTimeout(function () {
      // Now that the animation is finished, toggle the animation playing
      // boolean so it can be restarted
      isAnimationPlaying = false;
    }, 4000);
  }
}

// sets all the attributes in the passed in object so we don't have to do them manually
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (attribute) {
    element.setAttribute(attribute, attributes[attribute]);
  });
}
