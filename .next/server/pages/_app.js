(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4852:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__Tl1eP",
	"icon": "Footer_icon__Me07u",
	"footer-icon": "Footer_footer-icon__2pqFg",
	"footer-left": "Footer_footer-left__762SR",
	"icon-container-footer": "Footer_icon-container-footer__3p1vq"
};


/***/ }),

/***/ 456:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "Nav_navbar__bpUNv",
	"navbar-nav": "Nav_navbar-nav__2W2KJ",
	"desktop_links": "Nav_desktop_links__lx59O",
	"navbar-toggler": "Nav_navbar-toggler__5W578",
	"logo-nav": "Nav_logo-nav__FFsBp",
	"nav-link": "Nav_nav-link__P0tWj",
	"navbar-link-container": "Nav_navbar-link-container__4aD4g"
};


/***/ }),

/***/ 9608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "react-bootstrap/Navbar"
const Navbar_namespaceObject = require("react-bootstrap/Navbar");
var Navbar_default = /*#__PURE__*/__webpack_require__.n(Navbar_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Nav"
const Nav_namespaceObject = require("react-bootstrap/Nav");
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Container"
const Container_namespaceObject = require("react-bootstrap/Container");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Offcanvas"
const Offcanvas_namespaceObject = require("react-bootstrap/Offcanvas");
var Offcanvas_default = /*#__PURE__*/__webpack_require__.n(Offcanvas_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./styles/Nav.module.css
var Nav_module = __webpack_require__(456);
var Nav_module_default = /*#__PURE__*/__webpack_require__.n(Nav_module);
;// CONCATENATED MODULE: ./components/Navigation/index.js









const Navigation = ()=>{
    const NavLink = [
        {
            "name": "Home",
            "link": "/"
        },
        {
            "name": "About",
            "link": "/about"
        },
        {
            "name": "Services",
            "link": "/services"
        },
        {
            "name": "Contact",
            "link": "/contact"
        }
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()), {
        className: "navbar",
        bg: "light",
        expand: false,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Brand, {
                    href: "/",
                    className: (Nav_module_default())["logo-nav"],
                    alt: "Logo image link to home",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: "/images/logoname.webp",
                        width: 938,
                        height: 493,
                        alt: "Wild Beginnings logo for navigation"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Toggle, {
                    className: (Nav_module_default())["navbar-toggler"],
                    "aria-controls": "offcanvasNavbar",
                    "aria-label": "Toggle collapsible navigation"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()), {
                    className: (Nav_module_default()).desktop_links,
                    style: {
                        maxHeight: "100px"
                    },
                    children: NavLink.map((navLink)=>{
                        /*#__PURE__*/ return jsx_runtime_.jsx(next_link["default"], {
                            className: (Nav_module_default())["nav-link"],
                            href: navLink === null || navLink === void 0 ? void 0 : navLink.link,
                            alt: navLink === null || navLink === void 0 ? void 0 : navLink.name,
                            children: navLink === null || navLink === void 0 ? void 0 : navLink.name
                        }, navLink === null || navLink === void 0 ? void 0 : navLink.name);
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Navbar_default()).Offcanvas, {
                    id: "offcanvasNavbar",
                    "aria-labelledby": "offcanvasNavbarLabel",
                    placement: "end",
                    className: (Nav_module_default())["navbar-toggler"],
                    "aria-label": "Toggle collapsible navigation",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Offcanvas_default()).Header, {
                            closeButton: true
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Offcanvas_default()).Body, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()), {
                                className: "justify-content-end flex-grow-1 pe-3",
                                children: NavLink.map((navLink)=>{
                                    /*#__PURE__*/ return jsx_runtime_.jsx((Nav_default()).Link, {
                                        className: (Nav_module_default())["nav-link"],
                                        href: navLink === null || navLink === void 0 ? void 0 : navLink.link,
                                        alt: navLink === null || navLink === void 0 ? void 0 : navLink.name,
                                        children: navLink === null || navLink === void 0 ? void 0 : navLink.name
                                    }, navLink === null || navLink === void 0 ? void 0 : navLink.name);
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Navigation = (Navigation);

// EXTERNAL MODULE: ./styles/Footer.module.css
var Footer_module = __webpack_require__(4852);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: external "@fortawesome/free-solid-svg-icons"
const free_solid_svg_icons_namespaceObject = require("@fortawesome/free-solid-svg-icons");
;// CONCATENATED MODULE: external "@fortawesome/react-fontawesome"
const react_fontawesome_namespaceObject = require("@fortawesome/react-fontawesome");
;// CONCATENATED MODULE: ./components/Footer/index.js




function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Footer_module_default()).footer,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Footer_module_default())["footer-text"],
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: (Footer_module_default())["footer-left"],
                    children: "Wild Beginnings Birth // (405) 501-9515 // doulabrianna@gmail.com"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Footer_module_default())["icon-right"],
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Footer_module_default())["icon-container-footer"],
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: (Footer_module_default()).icon,
                                href: "https://www.facebook.com/wildbeginningsbirth",
                                alt: "Wild Beginnings Facebook icon",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        className: (Footer_module_default())["footer-icon"],
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 512 512",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                                        })
                                    }),
                                    "facebook"
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: (Footer_module_default()).icon,
                                href: "https://www.instagram.com/doulabrianna/",
                                alt: "Wild beginnings instagram icon",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        className: (Footer_module_default())["footer-icon"],
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 448 512",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                        })
                                    }),
                                    "instagram"
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./components/Layout.js



function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navigation, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
};

;// CONCATENATED MODULE: ./pages/_app.js



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 4241:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664], () => (__webpack_exec__(9608)));
module.exports = __webpack_exports__;

})();