/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/arjs-mccree.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/arjs-mccree.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\r\\n  box-sizing: border-box;\\r\\n  font-size: 62.5%;\\r\\n}\\r\\n*,\\r\\n*:before,\\r\\n*:after {\\r\\n  box-sizing: inherit;\\r\\n}\\r\\nbody {\\r\\n  font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\\r\\n    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\\r\\n}\\r\\n.header {\\r\\n  position: fixed;\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: space-evenly;\\r\\n  align-items: center;\\r\\n  bottom: 0px;\\r\\n  left: 0;\\r\\n  width: 100vw;\\r\\n  z-index: 1;\\r\\n  padding: 10px 0;\\r\\n  background-color: #0a1a1f;\\r\\n  color: #fff;\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\nbutton {\\r\\n  padding: 15px;\\r\\n  border: none;\\r\\n  background-color: #18b28e;\\r\\n  color: #0b1a1f;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://arjs-highnoon/./src/css/arjs-mccree.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://arjs-highnoon/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/css/arjs-mccree.css":
/*!*********************************!*\
  !*** ./src/css/arjs-mccree.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_arjs_mccree_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./arjs-mccree.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/arjs-mccree.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_arjs_mccree_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_arjs_mccree_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://arjs-highnoon/./src/css/arjs-mccree.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://arjs-highnoon/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// JavaScript\n__webpack_require__(/*! ./arjs-highnoon-loc */ \"./src/js/arjs-highnoon-loc.js\");\n__webpack_require__(/*! ../css/arjs-mccree.css */ \"./src/css/arjs-mccree.css\");\n\n\n//# sourceURL=webpack://arjs-highnoon/./src/js/app.js?");

/***/ }),

/***/ "./src/js/arjs-highnoon-loc.js":
/*!*************************************!*\
  !*** ./src/js/arjs-highnoon-loc.js ***!
  \*************************************/
/***/ (() => {

eval("// Boolean for toggling the animation playing state.\r\nlet isAnimationPlaying = false;\r\n\r\n// Camera location data, it gets populated further down\r\nlet cameraLocation = {\r\n  longitude: 0,\r\n  latitude: 0,\r\n};\r\n\r\n// How many gps updates have occurred\r\nlet gpsUpdates = 0;\r\n\r\n// on window load listen for the gps-camera update\r\nwindow.onload = () => {\r\n  window.addEventListener('gps-camera-update-position', (e) => {\r\n    cameraLocation = e.detail.position;\r\n    onGeolocationMove(cameraLocation);\r\n  });\r\n};\r\n\r\n// hydrate the gui with current gps data from the above listener\r\n// Tick up the gps update\r\nfunction onGeolocationMove({ latitude, longitude, accuracy }) {\r\n  gpsUpdates++;\r\n  document.getElementById('gps-latitude-data').innerHTML = latitude;\r\n  document.getElementById('gps-longitude-data').innerHTML = longitude;\r\n  document.getElementById('gps-accuracy-data').innerHTML =\r\n    Math.round(accuracy * 1000) / 1000 + 'm';\r\n  document.getElementById('gps-update-data').innerHTML = gpsUpdates.toString();\r\n}\r\n\r\n// Interval so we can reset the gps request counter,\r\n// it lets us see how many there are per second\r\nconst interval = setInterval(() => {\r\n  gpsUpdates = 0;\r\n}, 1000);\r\n\r\n// called on a button press, staticlly add the model and animation entities.\r\n// This is done so the stage and camera can fully load before we add entities to it\r\n// or they can get stuck under the camera.\r\nfunction setupScene() {\r\n  // disable the button so we only get one McCree\r\n  document.getElementById('btn--load-scene').setAttribute('disabled', 'true');\r\n\r\n  let scene = document.querySelector('a-scene');\r\n  // set a lat/long offset so the model doesn't appear in the camera space\r\n  // This works out to about 2m away. It will be populated north east of the camera space.\r\n  // Unless we can get compass coordinates, its an arbitrary placement.\r\n  let latitude = cameraLocation.latitude + 0.000005;\r\n  let longitude = cameraLocation.longitude + 0.000005;\r\n\r\n  // Attach Base Plane\r\n  let plane = document.createElement('a-plane');\r\n  // setup a Object with all the attributes in them\r\n  const planeAttributes = {\r\n    id: 'mccree-base-spinner',\r\n    position: '0 -1.601 0',\r\n    rotation: '-90 0 0',\r\n    scale: '0.25 0.25 0.25',\r\n    material: 'src: #mccree-spinner; transparent: true; alpha-test:0.9',\r\n    'gps-projected-entity-place': `latitude: ${latitude}; longitude: ${longitude};`,\r\n    animation__rotation: `\r\n        property: rotation; \r\n        startEvents: startAnimation; \r\n        from: -90 0 0; \r\n        to:-90 0 270; \r\n        dur: 2500; \r\n        easing: easeOutQuad;`,\r\n    animation__scale: `\r\n        property: scale; \r\n        startEvents: startAnimation; \r\n        from: 0.45 0.45 0.45; \r\n        to: 5 5 5; \r\n        dur: 1000; \r\n        easing: easeOutQuad;`,\r\n    animation__opacity: `\r\n        property: opacity; \r\n        startEvents: startAnimation; \r\n        delay: 3000; \r\n        from: 1; \r\n        to: 1; \r\n        dur: 1000;`,\r\n    animation__scalereset: `\r\n        property: scale; \r\n        startEvents: startAnimation;\r\n        delay: 4000; \r\n        to: 0.45 0.45 0.45; \r\n        dur: 1;`,\r\n    animation__opacityreset: `\r\n        property: opacity; \r\n        startEvents: startAnimation; \r\n        delay: 4010; \r\n        from: 0; \r\n        to: 1; \r\n        dur: 1`,\r\n  };\r\n  // add attributes automatically so we don't have to do it manually\r\n  setAttributes(plane, planeAttributes);\r\n  scene.appendChild(plane);\r\n\r\n  // Attach Particle System\r\n  let particleSystem = document.createElement('a-entity');\r\n  // setup a Object with all the attributes in them\r\n  const particleSystemAttributes = {\r\n    id: 'particle-system',\r\n    position: '0 -1.35 -0.25',\r\n    scale: '2 2 2',\r\n    'gps-projected-entity-place': `latitude: ${latitude}; longitude: ${longitude};`,\r\n    'particle-system': `\r\n                texture: src/assets/overwatch-logo.png;\r\n                type:3;\r\n                color: #ffffff, #ffffff; \r\n                size: 1;\r\n                positionSpread: 0 0 0;\r\n                rotationAxis:y;\r\n                velocityValue: 0 2.5 0;\r\n                velocitySpread: 0 .75 0;\r\n                accelerationValue: 0 -1 0;\r\n                accelerationSpread: 1 0 1; \r\n                rotationAngle: 0; \r\n                blending: 1; \r\n                particleCount: 10; \r\n                maxAge: 1.5; \r\n                enabled: false;`,\r\n  };\r\n  // add attributes automatically so we don't have to do it manually\r\n  setAttributes(particleSystem, particleSystemAttributes);\r\n  scene.appendChild(particleSystem);\r\n\r\n  // Attach Mccree Model\r\n  let model = document.createElement('a-entity');\r\n  // setup a Object with all the attributes in them\r\n  const modelAttributes = {\r\n    id: 'mccree--model',\r\n    position: '0 -1.6 0',\r\n    scale: '1.5 1.5 1.5',\r\n    'gltf-model': '#mccree--asset',\r\n    'gps-projected-entity-place': `latitude: ${latitude}; longitude: ${longitude};`,\r\n    'look-at': `[gps-projected-camera]`,\r\n    mccreehandler: 'true',\r\n    sound: 'src: #audio-high-noon; on: click',\r\n  };\r\n  // add attributes automatically so we don't have to do it manually\r\n  setAttributes(model, modelAttributes);\r\n  scene.appendChild(model);\r\n\r\n  AFRAME.registerComponent('mccreehandler', {\r\n    init: function () {\r\n      this.el.addEventListener('click', () => {\r\n        // When the model is clicked, run the function onMccreeHit\r\n        onMccreeHit();\r\n      });\r\n    },\r\n  });\r\n}\r\n\r\nfunction onMccreeHit() {\r\n  console.log('mccree hit', isAnimationPlaying);\r\n  // if the animation is not playing already, start the animation\r\n  if (!isAnimationPlaying) {\r\n    // Toggle the animation playing boolean so it can't be restarted\r\n    // while it's already playing\r\n    isAnimationPlaying = true;\r\n\r\n    // Start the animation for the spinning base\r\n    const mccreeSpinner = document.getElementById('mccree-base-spinner');\r\n    mccreeSpinner.emit('startAnimation');\r\n\r\n    // Start the particle system throwing out the Overwatch Logos\r\n    const particleSystem = document.getElementById('particle-system');\r\n    particleSystem.components['particle-system'].startParticles();\r\n\r\n    // Wait for 2.5 seconds\r\n    setTimeout(function () {\r\n      // Stop the particle system throwing out the Overwatch Logos\r\n      particleSystem.components['particle-system'].stopParticles();\r\n    }, 2500);\r\n\r\n    // Wait for 5 seconds\r\n    setTimeout(function () {\r\n      // Now that the animation is finished, toggle the animation playing\r\n      // boolean so it can be restarted\r\n      isAnimationPlaying = false;\r\n    }, 4000);\r\n  }\r\n}\r\n\r\n// sets all the attributes in the passed in object so we don't have to do them manually\r\nfunction setAttributes(element, attributes) {\r\n  Object.keys(attributes).forEach(function (attribute) {\r\n    element.setAttribute(attribute, attributes[attribute]);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://arjs-highnoon/./src/js/arjs-highnoon-loc.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;