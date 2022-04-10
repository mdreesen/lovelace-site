"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/services",{

/***/ "./components/Hero/index.js":
/*!**********************************!*\
  !*** ./components/Hero/index.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Hero; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-parallax */ \"./node_modules/react-parallax/lib/index.js\");\n/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Hero.module.css */ \"./styles/Hero.module.css\");\n/* harmony import */ var _styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Hero(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_2___default().hero_section),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_parallax__WEBPACK_IMPORTED_MODULE_1__.Parallax, {\n                className: (_styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"react-parallax react-parallax-bgimage\"]),\n                bgImage: \"/images/\".concat(props.heroImage, \".webp\"),\n                alt: props.alt,\n                strength: 200\n            }, void 0, false, {\n                fileName: \"/Users/michaeldreesen/Documents/Programming/projects/lovelace-site/components/Hero/index.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_2___default().hero_title),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_2___default().title_container),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                        children: props.title\n                    }, void 0, false, {\n                        fileName: \"/Users/michaeldreesen/Documents/Programming/projects/lovelace-site/components/Hero/index.js\",\n                        lineNumber: 11,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/michaeldreesen/Documents/Programming/projects/lovelace-site/components/Hero/index.js\",\n                    lineNumber: 10,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/michaeldreesen/Documents/Programming/projects/lovelace-site/components/Hero/index.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/michaeldreesen/Documents/Programming/projects/lovelace-site/components/Hero/index.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n};\n_c = Hero;\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlcm8vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTBDO0FBQ1E7QUFFbkMsU0FBU0UsSUFBSSxDQUFDQyxLQUFLLEVBQUU7SUFFaEMscUJBQ0ksOERBQUNDLFNBQU87UUFBQ0MsU0FBUyxFQUFFSiw2RUFBc0I7OzBCQUN0Qyw4REFBQ0Qsb0RBQVE7Z0JBQUNLLFNBQVMsRUFBRUoseUdBQStDO2dCQUFFSyxPQUFPLEVBQUUsVUFBUyxDQUFrQixNQUFLLENBQXJCSCxLQUFLLENBQUNJLFNBQVMsRUFBQyxPQUFLLENBQUM7Z0JBQUVDLEdBQUcsRUFBRUwsS0FBSyxDQUFDSyxHQUFHO2dCQUFFQyxRQUFRLEVBQUUsR0FBRzs7Ozs7b0JBQWE7MEJBQzVKLDhEQUFDQyxLQUFHO2dCQUFDTCxTQUFTLEVBQUVKLDJFQUFvQjswQkFDaEMsNEVBQUNTLEtBQUc7b0JBQUNMLFNBQVMsRUFBRUosZ0ZBQXlCOzhCQUNyQyw0RUFBQ1UsSUFBRTt3QkFBQ04sU0FBUyxFQUFFSixzRUFBZTtrQ0FBR0UsS0FBSyxDQUFDUyxLQUFLOzs7Ozs0QkFBTTs7Ozs7d0JBQ2hEOzs7OztvQkFDSjs7Ozs7O1lBQ0EsQ0FDWjtDQUNMO0FBWnVCVixLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVyby9pbmRleC5qcz9kMDk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvSGVyby5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVybyhwcm9wcykge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXNbJ2hlcm9fc2VjdGlvbiddfT5cbiAgICAgICAgICAgIDxQYXJhbGxheCBjbGFzc05hbWU9e3N0eWxlc1sncmVhY3QtcGFyYWxsYXggcmVhY3QtcGFyYWxsYXgtYmdpbWFnZSddfSBiZ0ltYWdlPXtgL2ltYWdlcy8ke3Byb3BzLmhlcm9JbWFnZX0ud2VicGB9IGFsdD17cHJvcHMuYWx0fSBzdHJlbmd0aD17MjAwfT48L1BhcmFsbGF4PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snaGVyb190aXRsZSddfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWyd0aXRsZV9jb250YWluZXInXX0+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlc1sndGl0bGUnXX0+e3Byb3BzLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG59Il0sIm5hbWVzIjpbIlBhcmFsbGF4Iiwic3R5bGVzIiwiSGVybyIsInByb3BzIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImJnSW1hZ2UiLCJoZXJvSW1hZ2UiLCJhbHQiLCJzdHJlbmd0aCIsImRpdiIsImgxIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Hero/index.js\n");

/***/ })

});