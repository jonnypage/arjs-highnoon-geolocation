# arjs-highnoon-geolocation

This is a quick example of webAR using [ar.js](https://ar-js-org.github.io/AR.js/) with geolocation. It loads a gltf file, and has interaction built in when the user clicks on the model. The model will stay in perspective to the user as long as they keep the camera pointed at the marker. The model can be interacted with by clicking or tapping on it.

It is a fork of [arjs-highnoon](https://github.com/jonnypage/arjs-highnoon) which uses a marker. This one uses ar.js geolocation to display the 3d entity in AR.

## Requirements

- [Node.js](http://nodejs.org/)

## Getting Started

The Asset can be viewed at https://jonnypage.github.io/arjs-highnoon-geolocation/
or
you can run the ar example by uploading it to a SSL encrypted server and opening `index.html`

After the page loads,
Accept whatever location and camera prompts your browser shows

Then click the `Load McCree` button. The 3D entity will load to the north east arround you. it works out to about 2m away. It will be populated north east of the camera space. Unless we can get compass coordinates, its an arbitrary placement.

## Installation Steps

1. Clone repo

2. Run `npm install`

3. Open `index.html` in your browser

4. If you make changes to the javascript files, run `npm run build` to get a new js bundle

---

The interaction and animations are built using [A-Frame animations](https://github.com/aframevr/aframe) and the [A-Frame particle system](https://github.com/IdeaSpaceVR/aframe-particle-system-component)

## Documentation

### File Structure

    index.html
    src
     ┣ assets
     ┃ ┣ itshighnoon.mp3
     ┃ ┣ mccree-base-spinner.png
     ┃ ┣ mccree.gltf
     ┃ ┣ overwatch-logo.png
     ┃ ┗ scene.bin
     ┣ css
     ┃ ┗ arjs-mccree.css
     ┗ js
     ┃ ┣ app.js
     ┃ ┗ arjs-highnoon-loc.js

### index.html

`<a-scene>` is where arjs starts. It creates a A-Frame scene in which the camera is displayed, and all the assets live.

`<a-assets>` A-Frame has an [asset management system](https://aframe.io/docs/0.9.0/core/asset-management-system.html) that allows housing of assets in one place to preload and cache assets for better performance.

Each item has a unique `id` tag that we reference later in our entities

`<a-entity gps-projected-camera>` The gps projected camera determines what the user sees, and locates it's self using gps coordinates.

### arjs-highnoon-loc.js

This is the main script used for the addition of the a-frame entities, interaction and animation.

### arjs-highnoon-loc.css

This is the css used to style the loading button, as well as the gps data.
