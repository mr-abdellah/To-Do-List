"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n  background-color: #fff;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  font-size: 17px;\\r\\n  font-weight: 500;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  margin: 0;\\r\\n  height: 13vh;\\r\\n  margin-left: 4%;\\r\\n}\\r\\n\\r\\n#btnRefresh {\\r\\n  background: transparent;\\r\\n  border: none;\\r\\n  padding: 0;\\r\\n  margin-right: 3%;\\r\\n}\\r\\n\\r\\nh2 {\\r\\n  margin: 0;\\r\\n  font-size: 16px;\\r\\n  font-weight: 500;\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\n.applyBtn {\\r\\n  background-color: transparent;\\r\\n  border: none;\\r\\n  padding: 0;\\r\\n  width: 65%;\\r\\n  margin-left: 60%;\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.input-container {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  width: 100%;\\r\\n  border-top: 1px solid #dcdbdb;\\r\\n  border-bottom: 1px solid #dcdbdb;\\r\\n}\\r\\n\\r\\n#task {\\r\\n  border: none;\\r\\n  height: 10vh;\\r\\n}\\r\\n\\r\\n#task::placeholder {\\r\\n  opacity: 0.8;\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n#task:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n#refresh,\\r\\n#return {\\r\\n  width: 6vh;\\r\\n  height: 6vh;\\r\\n  margin-right: 3%;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 40%;\\r\\n  border: 1px solid #dcdbdb;\\r\\n}\\r\\n\\r\\nul {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.oneTask {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 4fr 1fr;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n  height: 11vh;\\r\\n  border-bottom: 1px solid #dcdbdb;\\r\\n}\\r\\n\\r\\n.editInput {\\r\\n  border: none;\\r\\n  background: transparent;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.dots,\\r\\n.trashBtn {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  border: none;\\r\\n  background-color: transparent;\\r\\n  transform: rotate(90deg);\\r\\n  padding: 0;\\r\\n  width: 24%;\\r\\n  font-size: 12px;\\r\\n  margin-left: 55%;\\r\\n  cursor: pointer;\\r\\n  -webkit-transform: rotate(90deg);\\r\\n  -moz-transform: rotate(90deg);\\r\\n  -ms-transform: rotate(90deg);\\r\\n  -o-transform: rotate(90deg);\\r\\n}\\r\\n\\r\\n.trashBtn {\\r\\n  transform: rotate(0deg);\\r\\n  -webkit-transform: rotate(0deg);\\r\\n  -moz-transform: rotate(0deg);\\r\\n  -ms-transform: rotate(0deg);\\r\\n  -o-transform: rotate(0deg);\\r\\n}\\r\\n\\r\\n#clear {\\r\\n  border: none;\\r\\n  background-color: #fff;\\r\\n  height: 10vh;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n#clear:hover {\\r\\n  background: #e9e9e9;\\r\\n}\\r\\n\\r\\n.toggle {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_tasksClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tasksClass.js */ \"./src/modules/tasksClass.js\");\n/* harmony import */ var _modules_create_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/create.js */ \"./src/modules/create.js\");\n/* harmony import */ var _modules_saveTasks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/saveTasks.js */ \"./src/modules/saveTasks.js\");\n// import Css ,images sources =>\n\n\n\n\n\n\nconst todoStore = new _modules_saveTasks_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nconst todoList = new _modules_tasksClass_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](todoStore.items);\nconst todoDOM = new _modules_create_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\ntodoDOM.onCheckBoxChange = (event) => {\n  const index = parseInt(event.target.dataset.index, 10);\n  const { checked } = event.currentTarget;\n\n  todoList.completed(index, checked);\n  todoStore.completed(index, checked);\n};\n\ntodoDOM.onInputChange = (event) => {\n  const index = parseInt(event.target.dataset.index, 10);\n  const newTodo = event.target.value;\n\n  todoList.edit(index, newTodo);\n  todoStore.edit(index, newTodo);\n};\n\ntodoDOM.onRemoveItemClick = (event) => {\n  const index = parseInt(event.currentTarget.dataset.index, 10);\n\n  todoList.delete(index);\n  todoStore.delete(index);\n  todoDOM.remove(index);\n};\n\ntodoDOM.render(todoList.items);\n\ntodoDOM.on('enter', (todo) => {\n  const newTodo = todoList.add(todo);\n  todoStore.add(newTodo);\n  todoDOM.add(newTodo);\n});\n\ntodoDOM.on('clear-all', (indexes) => {\n  todoList.clearAll(indexes);\n  todoStore.store(todoList.items);\n  todoDOM.render(todoList.items);\n});\n\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/modules/create.js":
/*!*******************************!*\
  !*** ./src/modules/create.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createTasks = ({ index, description, completed }) => {\n  const listItemClasses = [\n    'oneTask',\n    ...(completed ? ['todo__list-item--completed'] : []),\n  ].join(' ');\n  const listChild = document.createElement('li');\n  // const li = document.createElement('li');\n\n  listChild.id = `todo__list-item-${index}`;\n  listChild.classList = listItemClasses;\n  listChild.innerHTML = `\n      <input\n        id=\"todo-check-input-${index}\"\n        class=\"check\"\n        type=\"checkbox\"\n        name=\"todo-checkbox\"\n        data-index=\"${index}\"\n        ${completed ? 'checked' : ''}\n      >\n      <input\n        id=\"todo-edit-input-${index}\"\n        class=\"todo__label todo__edit-input\"\n        type=\"text\"\n        name=\"todo-edit-input-${index}\"\n        value=\"${description}\"\n        data-index=\"${index}\"\n      >\n      <button class=\"button todo__drag-btn\" type=\"button\">\n        <i class=\"fa-solid fa-ellipsis-vertical\"></i>\n      </button>\n      <button id=\"todo-remove-btn-${index}\" class=\"button todo__remove-btn\" type=\"button\" data-index=\"${index}\">\n        <i class=\"fa-solid fa-trash\"></i>\n      </button>\n    `;\n\n  return listChild;\n};\n\nclass TodoDOM {\n    static onCheckBoxChange\n\n    static onInputChange\n\n    static onRemoveItemClick\n\n    constructor() {\n      this.containerEl = document.querySelector('.lists-parents');\n      this.inputEl = document.querySelector('#task');\n      this.clearButtonEl = document.querySelector('.clear');\n    }\n\n    render(items) {\n      this.containerEl.innerHTML = '';\n\n      const todoList = items.sort((a, b) => a.index - b.index);\n\n      todoList.forEach((todo) => {\n        this.add(todo);\n      });\n    }\n\n    add(item) {\n      const todoListEl = createTasks(item);\n\n      this.containerEl.appendChild(todoListEl);\n\n      const { index } = item;\n      const checkBoxEl = document.querySelector(`#todo-check-input-${index}`);\n      const editInputEl = document.querySelector(`input#todo-edit-input-${index}`);\n      const removeBtnEl = document.querySelector(`#todo-remove-btn-${index}`);\n\n      checkBoxEl.addEventListener('change', this.onCheckBoxChange);\n      editInputEl.addEventListener('change', this.onInputChange);\n      removeBtnEl.addEventListener('click', this.onRemoveItemClick);\n    }\n\n    remove(index) {\n      const todoListEl = this.containerEl.querySelector(`#oneTask-${index}`);\n\n      todoListEl.remove();\n    }\n\n    on(event, callback) {\n      if (event === 'enter') {\n        this.inputEl.addEventListener('keyup', (event) => {\n          if (event.keyCode === 13) {\n            const newTodo = event.target.value;\n\n            this.inputEl.value = '';\n\n            callback(newTodo);\n          }\n        });\n      } else if (event === 'clear-all') {\n        this.clearButtonEl.addEventListener('click', () => {\n          const checkboxEls = document.querySelectorAll('.check');\n          const indexes = [...checkboxEls]\n            .filter(({ checked }) => checked)\n            .map(({ dataset }) => parseInt(dataset.index, 10));\n\n          callback(indexes);\n        });\n      }\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoDOM);\n\n//# sourceURL=webpack://webpack/./src/modules/create.js?");

/***/ }),

/***/ "./src/modules/saveTasks.js":
/*!**********************************!*\
  !*** ./src/modules/saveTasks.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass SaveTasks {\n    STORE_KEY = 'todo-list';\n\n    items = [];\n\n    constructor() {\n      this.items = this.getItems();\n    }\n\n    add(item) {\n      this.items.push(item);\n      this.store(this.items);\n    }\n\n    edit(idx, newTodo) {\n      const index = this.items.findIndex(({ index }) => index === idx);\n\n      this.items[index].description = newTodo;\n      this.store(this.items);\n    }\n\n    delete(idx) {\n      const deleteIndex = this.items.findIndex(({ index }) => index === idx);\n\n      if (deleteIndex > -1) this.items.splice(deleteIndex, 1);\n      this.store(this.items);\n    }\n\n    completed(idx, checked) {\n      const index = this.items.findIndex(({ index }) => index === idx);\n\n      this.items[index].completed = checked;\n      this.store(this.items);\n    }\n\n    store(items) {\n      const data = JSON.stringify(items);\n\n      localStorage.setItem(this.STORE_KEY, data);\n    }\n\n    getItems() {\n      const items = localStorage.getItem(this.STORE_KEY);\n\n      return items ? JSON.parse(items) : [];\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SaveTasks);\n\n//# sourceURL=webpack://webpack/./src/modules/saveTasks.js?");

/***/ }),

/***/ "./src/modules/tasksClass.js":
/*!***********************************!*\
  !*** ./src/modules/tasksClass.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Tasks {\n  items = [];\n\n  constructor(items) {\n    this.items = [...items];\n  }\n\n  add(description) {\n    const newIndex = this.getNewIndex();\n    const newTodo = {\n      index: newIndex,\n      completed: false,\n      description,\n    };\n\n    this.items.push(newTodo);\n\n    return newTodo;\n  }\n\n  delete(idx) {\n    const deleteIndex = this.items.findIndex(({ index }) => index === idx);\n\n    if (deleteIndex > -1) this.items.splice(deleteIndex, 1);\n  }\n\n  clearAll(indexes) {\n    indexes.forEach((idx) => {\n      this.delete(idx);\n    });\n  }\n\n  edit(idx, newTodo) {\n    const index = this.items.findIndex(({ index }) => index === idx);\n\n    this.items[index].description = newTodo;\n  }\n\n  completed(idx, checked) {\n    const index = this.items.findIndex(({ index }) => index === idx);\n\n    this.items[index].completed = checked;\n  }\n\n  sort() {\n    this.items = this.items.sort((a, b) => a.index - b.index);\n    this.items.forEach((item, idx) => {\n      item.index = idx + 1;\n    });\n  }\n\n  getNewIndex() {\n    let index = this.items.length + 1;\n\n    this.items.forEach(({ index: currentIndex }) => {\n      if (currentIndex >= index) index = currentIndex + 1;\n    });\n\n    return index;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tasks);\n\n//# sourceURL=webpack://webpack/./src/modules/tasksClass.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);