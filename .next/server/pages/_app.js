(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

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

/***/ 840:
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
// EXTERNAL MODULE: ./styles/Nav.module.css
var Nav_module = __webpack_require__(456);
var Nav_module_default = /*#__PURE__*/__webpack_require__.n(Nav_module);
;// CONCATENATED MODULE: ./components/Navigation/index.js







// import logo
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
        bg: "light",
        expand: false,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Brand, {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: (Nav_module_default())["logo-nav"],
                        src: "../../images/logoname.webp",
                        alt: ""
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Toggle, {
                    className: (Nav_module_default())["navbar-toggler"],
                    "aria-controls": "offcanvasNavbar"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()), {
                    className: (Nav_module_default()).desktop_links,
                    style: {
                        maxHeight: "100px"
                    },
                    children: NavLink.map((navLink)=>{
                        /*#__PURE__*/ return jsx_runtime_.jsx((Nav_default()).Link, {
                            className: (Nav_module_default())["nav-link"],
                            href: navLink === null || navLink === void 0 ? void 0 : navLink.link,
                            children: navLink === null || navLink === void 0 ? void 0 : navLink.name
                        }, navLink === null || navLink === void 0 ? void 0 : navLink.name);
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Navbar_default()).Offcanvas, {
                    id: "offcanvasNavbar",
                    "aria-labelledby": "offcanvasNavbarLabel",
                    placement: "end",
                    className: (Nav_module_default())["navbar-toggler"],
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

;// CONCATENATED MODULE: ./components/Footer/index.js


function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: components_Footer["footer position-static"],
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: components_Footer["footer-text"],
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: components_Footer["footer-left"],
                    children: "Wild Beginnings Birth // (405) 501-9515 // doulabrianna@gmail.com"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: components_Footer["icon-right"],
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: components_Footer["icon-container-footer"],
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://www.facebook.com/wildbeginningsdoulacare",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fab fa-facebook fa-2x"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://www.instagram.com/doulabrianna/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fab fa-instagram fa-2x"
                                })
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
var __webpack_exports__ = (__webpack_exec__(840));
module.exports = __webpack_exports__;

})();