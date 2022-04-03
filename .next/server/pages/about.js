/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/about";
exports.ids = ["pages/about"];
exports.modules = {

/***/ "./styles/Hero.module.css":
/*!********************************!*\
  !*** ./styles/Hero.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Hero_container__qvbt8\",\n\t\"react-parallax\": \"Hero_react-parallax__0K0lo\",\n\t\"imgContainer\": \"Hero_imgContainer___olO3\",\n\t\"homepage_parallax\": \"Hero_homepage_parallax__cxU7h\",\n\t\"reactParallaxBgImage\": \"Hero_reactParallaxBgImage__S10Ze\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSGVyby5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb3ZlbGFjZS8uL3N0eWxlcy9IZXJvLm1vZHVsZS5jc3M/ZjJkNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIZXJvX2NvbnRhaW5lcl9fcXZidDhcIixcblx0XCJyZWFjdC1wYXJhbGxheFwiOiBcIkhlcm9fcmVhY3QtcGFyYWxsYXhfXzBLMGxvXCIsXG5cdFwiaW1nQ29udGFpbmVyXCI6IFwiSGVyb19pbWdDb250YWluZXJfX19vbE8zXCIsXG5cdFwiaG9tZXBhZ2VfcGFyYWxsYXhcIjogXCJIZXJvX2hvbWVwYWdlX3BhcmFsbGF4X19jeFU3aFwiLFxuXHRcInJlYWN0UGFyYWxsYXhCZ0ltYWdlXCI6IFwiSGVyb19yZWFjdFBhcmFsbGF4QmdJbWFnZV9fUzEwWmVcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Hero.module.css\n");

/***/ }),

/***/ "./components/Hero/index.js":
/*!**********************************!*\
  !*** ./components/Hero/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Hero)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-parallax */ \"react-parallax\");\n/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Hero.module.css */ \"./styles/Hero.module.css\");\n/* harmony import */ var _styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Hero(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_parallax__WEBPACK_IMPORTED_MODULE_1__.Parallax, {\n                className: (_styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_2___default().reactParallaxBgImage),\n                bgImage: `/images/${props.heroImage}.webp`,\n                alt: props.alt,\n                strength: 200\n            }, void 0, false, {\n                fileName: \"/Users/michaeldreesen/Documents/Programming/projects/lovelace-site/components/Hero/index.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hero_title\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"title_container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"title\",\n                        children: props.title\n                    }, void 0, false, {\n                        fileName: \"/Users/michaeldreesen/Documents/Programming/projects/lovelace-site/components/Hero/index.js\",\n                        lineNumber: 11,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/michaeldreesen/Documents/Programming/projects/lovelace-site/components/Hero/index.js\",\n                    lineNumber: 10,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/michaeldreesen/Documents/Programming/projects/lovelace-site/components/Hero/index.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/michaeldreesen/Documents/Programming/projects/lovelace-site/components/Hero/index.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlcm8vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTBDO0FBQ1E7QUFFbkMsU0FBU0UsSUFBSSxDQUFDQyxLQUFLLEVBQUU7SUFFaEMscUJBQ0ksOERBQUNDLFNBQU87UUFBQ0MsU0FBUyxFQUFFSiwwRUFBZ0I7OzBCQUNoQyw4REFBQ0Qsb0RBQVE7Z0JBQUNLLFNBQVMsRUFBRUoscUZBQTJCO2dCQUFFTyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUVMLEtBQUssQ0FBQ00sU0FBUyxDQUFDLEtBQUssQ0FBQztnQkFBRUMsR0FBRyxFQUFFUCxLQUFLLENBQUNPLEdBQUc7Z0JBQUVDLFFBQVEsRUFBRSxHQUFHOzs7OztvQkFBYTswQkFDeEksOERBQUNDLEtBQUc7Z0JBQUNQLFNBQVMsRUFBQyxZQUFZOzBCQUN2Qiw0RUFBQ08sS0FBRztvQkFBQ1AsU0FBUyxFQUFDLGlCQUFpQjs4QkFDNUIsNEVBQUNRLElBQUU7d0JBQUNSLFNBQVMsRUFBQyxPQUFPO2tDQUFFRixLQUFLLENBQUNXLEtBQUs7Ozs7OzRCQUFNOzs7Ozt3QkFDdEM7Ozs7O29CQUNKOzs7Ozs7WUFDQSxDQUNaO0NBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb3ZlbGFjZS8uL2NvbXBvbmVudHMvSGVyby9pbmRleC5qcz9kMDk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvSGVyby5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVybyhwcm9wcykge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxQYXJhbGxheCBjbGFzc05hbWU9e3N0eWxlcy5yZWFjdFBhcmFsbGF4QmdJbWFnZX0gYmdJbWFnZT17YC9pbWFnZXMvJHtwcm9wcy5oZXJvSW1hZ2V9LndlYnBgfSBhbHQ9e3Byb3BzLmFsdH0gc3RyZW5ndGg9ezIwMH0+PC9QYXJhbGxheD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZXJvX3RpdGxlJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlX2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0aXRsZSc+e3Byb3BzLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG59Il0sIm5hbWVzIjpbIlBhcmFsbGF4Iiwic3R5bGVzIiwiSGVybyIsInByb3BzIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInJlYWN0UGFyYWxsYXhCZ0ltYWdlIiwiYmdJbWFnZSIsImhlcm9JbWFnZSIsImFsdCIsInN0cmVuZ3RoIiwiZGl2IiwiaDEiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Hero/index.js\n");

/***/ }),

/***/ "./pages/about/index.js":
/*!******************************!*\
  !*** ./pages/about/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ About)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Hero */ \"./components/Hero/index.js\");\n\n\n\nfunction About() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"About Wild Beginnings\"\n                }, void 0, false, {\n                    fileName: \"/Users/michaeldreesen/Documents/Programming/projects/lovelace-site/pages/about/index.js\",\n                    lineNumber: 9,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/michaeldreesen/Documents/Programming/projects/lovelace-site/pages/about/index.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hero__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    heroImage: \"briannaTwo\",\n                    title: \"About\",\n                    alt: \"Wild Beginnings founder, Brianna\"\n                }, void 0, false, {\n                    fileName: \"/Users/michaeldreesen/Documents/Programming/projects/lovelace-site/pages/about/index.js\",\n                    lineNumber: 12,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/michaeldreesen/Documents/Programming/projects/lovelace-site/pages/about/index.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/michaeldreesen/Documents/Programming/projects/lovelace-site/pages/about/index.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hYm91dC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUVZO0FBRTFCLFNBQVNFLEtBQUssR0FBRztJQUM1QixxQkFDSSw4REFBQ0MsS0FBRzs7MEJBQ0EsOERBQUNILGtEQUFJOzBCQUNELDRFQUFDSSxPQUFLOzhCQUFDLHVCQUFxQjs7Ozs7d0JBQVE7Ozs7O29CQUNqQzswQkFDUCw4REFBQ0MsU0FBTzswQkFDSiw0RUFBQ0osd0RBQUk7b0JBQUNLLFNBQVMsRUFBQyxZQUFZO29CQUFDRixLQUFLLEVBQUMsT0FBTztvQkFBQ0csR0FBRyxFQUFDLGtDQUFrQzs7Ozs7d0JBQUc7Ozs7O29CQUM5RTs7Ozs7O1lBQ1IsQ0FDUjtDQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG92ZWxhY2UvLi9wYWdlcy9hYm91dC9pbmRleC5qcz8zOWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmltcG9ydCBIZXJvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVybyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+QWJvdXQgV2lsZCBCZWdpbm5pbmdzPC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxIZXJvIGhlcm9JbWFnZT0nYnJpYW5uYVR3bycgdGl0bGU9J0Fib3V0JyBhbHQ9J1dpbGQgQmVnaW5uaW5ncyBmb3VuZGVyLCBCcmlhbm5hJyAvPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSJdLCJuYW1lcyI6WyJIZWFkIiwiSGVybyIsIkFib3V0IiwiZGl2IiwidGl0bGUiLCJzZWN0aW9uIiwiaGVyb0ltYWdlIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/about/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react-parallax":
/*!*********************************!*\
  !*** external "react-parallax" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-parallax");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/about/index.js"));
module.exports = __webpack_exports__;

})();