exports.id = 644;
exports.ids = [644];
exports.modules = {

/***/ 2004:
/***/ ((module) => {

// Exports
module.exports = {
	"hero_section": "Hero_hero_section__K3_hV",
	"hero_title": "Hero_hero_title__qLDXI",
	"hero-section": "Hero_hero-section__5lK_3",
	"imgContainer": "Hero_imgContainer___olO3",
	"react-parallax": "Hero_react-parallax__0K0lo",
	"title_container": "Hero_title_container__CJpJu",
	"title": "Hero_title__nGUHa"
};


/***/ }),

/***/ 3644:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Hero)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5236);
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2004);
/* harmony import */ var _styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function Hero(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            className: (_styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_3___default().hero_section),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_parallax__WEBPACK_IMPORTED_MODULE_1__.Parallax, {
                    className: (_styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_3___default()["react-parallax"]),
                    bgImage: `/images/${props.heroImage}.webp`,
                    alt: props.alt,
                    strength: 200
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_3___default().hero_title),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_3___default().title_container),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: (_styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),
                            children: props.title
                        })
                    })
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;