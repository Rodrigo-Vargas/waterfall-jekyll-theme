/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/nav-collapse.js":
/*!****************************!*\
  !*** ./js/nav-collapse.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar NavCollapse = /*#__PURE__*/function () {\n  function NavCollapse() {\n    _classCallCheck(this, NavCollapse);\n\n    this.panels = [];\n    this.init();\n  }\n\n  _createClass(NavCollapse, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      var navTogglers = document.querySelectorAll('[nav-toggler]');\n      navTogglers.forEach(function (toggler) {\n        toggler.addEventListener('click', function (event) {\n          event.preventDefault();\n          event.stopPropagation();\n          document.querySelector('body').classList.toggle('nav-opened');\n        });\n\n        _this.panels.push(document.querySelector(toggler.getAttribute('href')));\n      });\n\n      window.onclick = function (event) {\n        if (!_this.elementIsAPanel(event.target)) document.querySelector('body').classList.remove('nav-opened');\n      };\n    }\n  }, {\n    key: \"elementIsAPanel\",\n    value: function elementIsAPanel(target) {\n      var isAPanel = false;\n      this.panels.forEach(function (panel) {\n        if (panel == target) isAPanel = true;\n      });\n      return isAPanel;\n    }\n  }]);\n\n  return NavCollapse;\n}();\n\nvar NavCollapseInit = function NavCollapseInit() {\n  return new NavCollapse();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavCollapseInit);\n\n//# sourceURL=webpack:///./js/nav-collapse.js?");

/***/ }),

/***/ "./js/night-mode.js":
/*!**************************!*\
  !*** ./js/night-mode.js ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar NightMode = /*#__PURE__*/function () {\n  function NightMode() {\n    _classCallCheck(this, NightMode);\n\n    this.init();\n  }\n\n  _createClass(NightMode, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      this.setThemeOption(this.getThemeOption());\n      var togglers = document.querySelectorAll('[data-night-mode-toggler]');\n      togglers.forEach(function (toggler) {\n        toggler.addEventListener('click', function (event) {\n          _this.toggleThemeOption();\n        });\n      });\n    }\n  }, {\n    key: \"toggleThemeOption\",\n    value: function toggleThemeOption() {\n      var themeOption = this.getThemeOption();\n      document.querySelector('html').classList.add('night-mode-transitioning');\n      themeOption = themeOption == 'dark' ? 'light' : 'dark';\n      this.setThemeOption(themeOption);\n      setTimeout(function () {\n        document.querySelector('html').classList.remove('night-mode-transitioning');\n      }, 500);\n    }\n  }, {\n    key: \"getDefaultThemeOption\",\n    value: function getDefaultThemeOption() {\n      var themPreference = window.matchMedia('(prefers-color-scheme: dark)');\n      if (themPreference.matches) return 'dark';\n      return 'light';\n    }\n  }, {\n    key: \"getThemeOption\",\n    value: function getThemeOption() {\n      var themeOption = localStorage.getItem('theme');\n      if (!themeOption) return getDefaultThemeOption();\n      return themeOption;\n    }\n  }, {\n    key: \"setThemeOption\",\n    value: function setThemeOption(themeOption) {\n      if (themeOption == 'dark') document.querySelector('html').classList.add('dark');else document.querySelector('html').classList.remove('dark');\n      localStorage.setItem('theme', themeOption);\n    }\n  }]);\n\n  return NightMode;\n}();\n\nvar NightModeInit = function NightModeInit() {\n  return new NightMode();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NightModeInit);\n\n//# sourceURL=webpack:///./js/night-mode.js?");

/***/ }),

/***/ "./js/pills.js":
/*!*********************!*\
  !*** ./js/pills.js ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Pills = /*#__PURE__*/function () {\n  function Pills() {\n    _classCallCheck(this, Pills);\n\n    this.init();\n  }\n\n  _createClass(Pills, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      var pills = document.querySelectorAll('[data-toggle=\"pill\"]');\n      console.log(\"Found \".concat(pills.length, \" pills on this page\"));\n      pills.forEach(function (pill) {\n        pill.addEventListener('click', function (event) {\n          event.preventDefault();\n          var href = event.target.getAttribute('href');\n\n          _this.deactivateAllPills(event.target);\n\n          event.target.classList.add('active');\n          var target = document.querySelector(href);\n\n          _this.hideAllTabs(target).then(function () {\n            target.classList.add('active');\n            setTimeout(function () {\n              target.classList.add('show');\n            }, 100);\n          });\n        });\n      });\n\n      if (pills.length > 0) {\n        var target = document.querySelector(pills[0].getAttribute('href'));\n        target.classList.add('show');\n        target.classList.add('active');\n      }\n    }\n  }, {\n    key: \"deactivateAllPills\",\n    value: function deactivateAllPills(targetPill) {\n      var pills = targetPill.parentNode.querySelectorAll('[data-toggle=\"pill\"]');\n      pills.forEach(function (pill) {\n        pill.classList.remove('show');\n        pill.classList.remove('active');\n      });\n    }\n  }, {\n    key: \"hideAllTabs\",\n    value: function hideAllTabs(targetTab) {\n      var promises = [];\n      var panels = targetTab.parentNode.querySelectorAll('[role=\"tabpanel\"]');\n      panels.forEach(function (panel) {\n        panel.classList.remove('show');\n        promises.push(new Promise(function (resolve) {\n          setTimeout(function () {\n            panel.classList.remove('active');\n            resolve();\n          }, 100);\n        }));\n      });\n      return Promise.all(promises);\n    }\n  }]);\n\n  return Pills;\n}();\n\nvar PillsInit = function PillsInit() {\n  return new Pills();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PillsInit);\n\n//# sourceURL=webpack:///./js/pills.js?");

/***/ }),

/***/ "./js/site.js":
/*!********************!*\
  !*** ./js/site.js ***!
  \********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nav_collapse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-collapse */ \"./js/nav-collapse.js\");\n/* harmony import */ var _pills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pills */ \"./js/pills.js\");\n/* harmony import */ var _night_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./night-mode */ \"./js/night-mode.js\");\n\n(0,_nav_collapse__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n(0,_pills__WEBPACK_IMPORTED_MODULE_1__.default)();\n\n(0,_night_mode__WEBPACK_IMPORTED_MODULE_2__.default)();\n\n//# sourceURL=webpack:///./js/site.js?");

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
/******/ 			// no module.id needed
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/site.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;