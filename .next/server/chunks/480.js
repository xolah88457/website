exports.id = 480;
exports.ids = [480];
exports.modules = {

/***/ 5057:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "Button_button__L2wUb",
	"text": "Button_text__t2U9w",
	"loader": "Button_loader__aTo2D",
	"icon": "Button_icon__mSIRG"
};


/***/ }),

/***/ 6419:
/***/ ((module) => {

// Exports
module.exports = {
	"icon": "Icon_icon__t_YgI"
};


/***/ }),

/***/ 754:
/***/ ((module) => {

// Exports
module.exports = {
	"loader": "Loader_loader__3yamk",
	"text": "Loader_text__uupzy",
	"content": "Loader_content__rvat_",
	"span": "Loader_span__qI8wq",
	"loaderSpan": "Loader_loaderSpan__hIbqq"
};


/***/ }),

/***/ 9180:
/***/ ((module) => {

// Exports
module.exports = {
	"monogram": "Monogram_monogram__tnGpV",
	"highlight": "Monogram_highlight__ly_rQ"
};


/***/ }),

/***/ 4207:
/***/ ((module) => {

// Exports
module.exports = {
	"toggle": "NavToggle_toggle__gmiZu",
	"inner": "NavToggle_inner__0uerT",
	"icon": "NavToggle_icon__aG8yu"
};


/***/ }),

/***/ 9946:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "Navbar_navbar__7Exjr",
	"logo": "Navbar_logo__keI4H",
	"nav": "Navbar_nav__Ymaux",
	"navList": "Navbar_navList__mg4Oa",
	"navLink": "Navbar_navLink__Havgb",
	"navIcons": "Navbar_navIcons__KC2a8",
	"navIconLink": "Navbar_navIconLink__W8ZFX",
	"navIcon": "Navbar_navIcon__lI_cE",
	"mobileNav": "Navbar_mobileNav__oBcFx",
	"mobileNavLink": "Navbar_mobileNavLink__7KN69"
};


/***/ }),

/***/ 525:
/***/ ((module) => {

// Exports
module.exports = {
	"toggle": "ThemeToggle_toggle__w8LEU",
	"circle": "ThemeToggle_circle__qVSRK",
	"mask": "ThemeToggle_mask__Y09BP",
	"path": "ThemeToggle_path__9hTG0"
};


/***/ }),

/***/ 2038:
/***/ ((module) => {

// Exports
module.exports = {
	"text": "Text_text__I2GnQ"
};


/***/ }),

/***/ 3674:
/***/ ((module) => {

// Exports
module.exports = {
	"hidden": "VisuallyHidden_hidden__D_ZwH"
};


/***/ }),

/***/ 8139:
/***/ ((module) => {

// Exports
module.exports = {
	"app": "App_app__x2qc1",
	"page": "App_page__ZYUk8",
	"skip": "App_skip__Hmpeg"
};


/***/ }),

/***/ 6383:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1879);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1206);
/* harmony import */ var _components_Transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8802);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2362);
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5057);
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Button_module_css__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Loader__WEBPACK_IMPORTED_MODULE_2__, _components_Transition__WEBPACK_IMPORTED_MODULE_3__]);
([_components_Loader__WEBPACK_IMPORTED_MODULE_2__, _components_Transition__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function isExternalLink(href) {
    return href?.includes("://");
}
const Button = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_5__.forwardRef)(({ href , ...rest }, ref)=>{
    if (isExternalLink(href) || !href) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonContent, {
            href: href,
            ref: ref,
            ...rest
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        passHref: true,
        href: href,
        scroll: false,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonContent, {
            href: href,
            ref: ref,
            ...rest
        })
    });
});
const ButtonContent = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_5__.forwardRef)(({ className , as , secondary , loading , loadingText ="loading" , icon , iconEnd , iconHoverShift , iconOnly , children , rel , target , href , disabled , ...rest }, ref)=>{
    const isExternal = isExternalLink(href);
    const defaultComponent = href ? "a" : "button";
    const Component = as || defaultComponent;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Component, {
        className: (0,_utils_style__WEBPACK_IMPORTED_MODULE_6__/* .classes */ .Sh)((_Button_module_css__WEBPACK_IMPORTED_MODULE_7___default().button), className),
        "data-loading": loading,
        "data-icon-only": iconOnly,
        "data-secondary": secondary,
        "data-icon": icon,
        href: href,
        rel: rel || isExternal ? "noopener noreferrer" : undefined,
        target: target || isExternal ? "_blank" : undefined,
        disabled: disabled,
        ref: ref,
        ...rest,
        children: [
            !!icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icon__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .J, {
                className: (_Button_module_css__WEBPACK_IMPORTED_MODULE_7___default().icon),
                "data-start": !iconOnly,
                "data-shift": iconHoverShift,
                icon: icon
            }),
            !!children && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (_Button_module_css__WEBPACK_IMPORTED_MODULE_7___default().text),
                children: children
            }),
            !!iconEnd && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icon__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .J, {
                className: (_Button_module_css__WEBPACK_IMPORTED_MODULE_7___default().icon),
                "data-end": !iconOnly,
                "data-shift": iconHoverShift,
                icon: iconEnd
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Transition__WEBPACK_IMPORTED_MODULE_3__/* .Transition */ .u, {
                unmount: true,
                in: loading,
                children: (visible)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_2__/* .Loader */ .a, {
                        className: (_Button_module_css__WEBPACK_IMPORTED_MODULE_7___default().loader),
                        size: 32,
                        text: loadingText,
                        "data-visible": visible
                    })
            })
        ]
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5121:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_0__.z)
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6383);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Button__WEBPACK_IMPORTED_MODULE_0__]);
_Button__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* reexport */ Icon)
});

// UNUSED EXPORTS: icons

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/utils/style.js
var style = __webpack_require__(2362);
// EXTERNAL MODULE: ./src/components/Icon/Icon.module.css
var Icon_module = __webpack_require__(6419);
var Icon_module_default = /*#__PURE__*/__webpack_require__.n(Icon_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Icon/svg/arrow-left.svg
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgArrowLeft = props => /*#__PURE__*/external_react_.createElement("svg", _extends({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24"
}, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
  d: "m9.793 19.207-6.5-6.5L2.586 12l.707-.707 6.5-6.5 1.414 1.414L6.414 11H21v2H6.414l4.793 4.793-1.414 1.414Z"
})));
/* harmony default export */ const arrow_left = (SvgArrowLeft);
;// CONCATENATED MODULE: ./src/components/Icon/svg/arrow-right.svg
var arrow_right_path;
function arrow_right_extends() { arrow_right_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return arrow_right_extends.apply(this, arguments); }

const SvgArrowRight = props => /*#__PURE__*/external_react_.createElement("svg", arrow_right_extends({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24"
}, props), arrow_right_path || (arrow_right_path = /*#__PURE__*/external_react_.createElement("path", {
  d: "M14.207 4.793l6.5 6.5.707.707-.707.707-6.5 6.5-1.414-1.414L17.586 13H3v-2h14.586l-4.793-4.793 1.414-1.414z"
})));
/* harmony default export */ const arrow_right = (SvgArrowRight);
;// CONCATENATED MODULE: ./src/components/Icon/svg/check.svg
var check_path;
function check_extends() { check_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return check_extends.apply(this, arguments); }

const SvgCheck = props => /*#__PURE__*/external_react_.createElement("svg", check_extends({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24"
}, props), check_path || (check_path = /*#__PURE__*/external_react_.createElement("path", {
  d: "m20.207 7.207-10 10-.707.707-.707-.707-5-5 1.414-1.414L9.5 15.086l9.293-9.293 1.414 1.414Z"
})));
/* harmony default export */ const check = (SvgCheck);
;// CONCATENATED MODULE: ./src/components/Icon/svg/chevron-right.svg
var chevron_right_path;
function chevron_right_extends() { chevron_right_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return chevron_right_extends.apply(this, arguments); }

const SvgChevronRight = props => /*#__PURE__*/external_react_.createElement("svg", chevron_right_extends({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24"
}, props), chevron_right_path || (chevron_right_path = /*#__PURE__*/external_react_.createElement("path", {
  d: "M13.586 12L7.793 6.207l1.414-1.414 6.5 6.5.707.707-.707.707-6.5 6.5-1.414-1.414L13.586 12z"
})));
/* harmony default export */ const chevron_right = (SvgChevronRight);
;// CONCATENATED MODULE: ./src/components/Icon/svg/close.svg
var close_path;
function close_extends() { close_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return close_extends.apply(this, arguments); }

const SvgClose = props => /*#__PURE__*/external_react_.createElement("svg", close_extends({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24"
}, props), close_path || (close_path = /*#__PURE__*/external_react_.createElement("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
})));
/* harmony default export */ const svg_close = (SvgClose);
;// CONCATENATED MODULE: ./src/components/Icon/svg/copy.svg
var copy_path;
function copy_extends() { copy_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return copy_extends.apply(this, arguments); }

const SvgCopy = props => /*#__PURE__*/external_react_.createElement("svg", copy_extends({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24"
}, props), copy_path || (copy_path = /*#__PURE__*/external_react_.createElement("path", {
  d: "M3 1H2v16h4v-2H4V3h10v2h2V1H3Zm5 6h14v12.414l-.293.293-3 3-.293.293H8V7Zm2 14h7.586L20 18.586V9H10v12Z"
})));
/* harmony default export */ const copy = (SvgCopy);
;// CONCATENATED MODULE: ./src/components/Icon/svg/error.svg
var error_path;
function error_extends() { error_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return error_extends.apply(this, arguments); }

const SvgError = props => /*#__PURE__*/external_react_.createElement("svg", error_extends({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24"
}, props), error_path || (error_path = /*#__PURE__*/external_react_.createElement("path", {
  d: "M12 5.068 19.697 19H4.302L12 5.068Zm-.876-2.552-9.392 17L2.607 21h18.785l.875-1.484-9.392-17h-1.75ZM11 14v-4h2v4h-2Zm0 3v-2h2v2h-2Z"
})));
/* harmony default export */ const error = (SvgError);
;// CONCATENATED MODULE: ./src/components/Icon/svg/figma.svg
var figma_path, _path2, _path3, _path4;
function figma_extends() { figma_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return figma_extends.apply(this, arguments); }

const SvgFigma = props => /*#__PURE__*/external_react_.createElement("svg", figma_extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "48px",
  height: "48px"
}, props), figma_path || (figma_path = /*#__PURE__*/external_react_.createElement("path", {
  fill: "#0078d4",
  d: "M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5 V37z"
})), _path2 || (_path2 = /*#__PURE__*/external_react_.createElement("path", {
  d: "M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364 c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274 L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479 C18,16.523,16.521,18,14.485,18H18v19H11z",
  opacity: 0.05
})), _path3 || (_path3 = /*#__PURE__*/external_react_.createElement("path", {
  d: "M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677 c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638 c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001 c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z",
  opacity: 0.07
})), _path4 || (_path4 = /*#__PURE__*/external_react_.createElement("path", {
  fill: "#fff",
  d: "M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12 c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698 c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19 c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
})));
/* harmony default export */ const figma = (SvgFigma);
;// CONCATENATED MODULE: ./src/components/Icon/svg/github.svg
var github_path;
function github_extends() { github_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return github_extends.apply(this, arguments); }

const SvgGithub = props => /*#__PURE__*/external_react_.createElement("svg", github_extends({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24"
}, props), github_path || (github_path = /*#__PURE__*/external_react_.createElement("path", {
  d: "M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
})));
/* harmony default export */ const github = (SvgGithub);
;// CONCATENATED MODULE: ./src/components/Icon/svg/link.svg
var link_path;
function link_extends() { link_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return link_extends.apply(this, arguments); }

const SvgLink = props => /*#__PURE__*/external_react_.createElement("svg", link_extends({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24"
}, props), link_path || (link_path = /*#__PURE__*/external_react_.createElement("path", {
  d: "M9 4 8 5v2h2V6h10v7H10v-2H8v3l1 1h12l1-1V5l-1-1H9Zm2 4H3L2 9v9l1 1h12l1-1v-2h-2v1H4v-7h10v2h2V9l-1-1h-4Z"
})));
/* harmony default export */ const svg_link = (SvgLink);
;// CONCATENATED MODULE: ./src/components/Icon/svg/menu.svg
var menu_path;
function menu_extends() { menu_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return menu_extends.apply(this, arguments); }

const SvgMenu = props => /*#__PURE__*/external_react_.createElement("svg", menu_extends({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24"
}, props), menu_path || (menu_path = /*#__PURE__*/external_react_.createElement("path", {
  d: "M22 6H2V4h20v2zM2 13h16v-2H2v2zm0 7h20v-2H2v2z"
})));
/* harmony default export */ const menu = (SvgMenu);
;// CONCATENATED MODULE: ./src/components/Icon/svg/pause.svg
var pause_path;
function pause_extends() { pause_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return pause_extends.apply(this, arguments); }

const SvgPause = props => /*#__PURE__*/external_react_.createElement("svg", pause_extends({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24"
}, props), pause_path || (pause_path = /*#__PURE__*/external_react_.createElement("path", {
  d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z"
})));
/* harmony default export */ const pause = (SvgPause);
;// CONCATENATED MODULE: ./src/components/Icon/svg/play.svg
var play_path;
function play_extends() { play_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return play_extends.apply(this, arguments); }

const SvgPlay = props => /*#__PURE__*/external_react_.createElement("svg", play_extends({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24"
}, props), play_path || (play_path = /*#__PURE__*/external_react_.createElement("path", {
  d: "M8 5v14l11-7z"
})));
/* harmony default export */ const play = (SvgPlay);
;// CONCATENATED MODULE: ./src/components/Icon/svg/send.svg
var send_path;
function send_extends() { send_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return send_extends.apply(this, arguments); }

const SvgSend = props => /*#__PURE__*/external_react_.createElement("svg", send_extends({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24"
}, props), send_path || (send_path = /*#__PURE__*/external_react_.createElement("path", {
  d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2 .01 7z"
})));
/* harmony default export */ const send = (SvgSend);
;// CONCATENATED MODULE: ./src/components/Icon/svg/twitter.svg
var _radialGradient, twitter_path, _radialGradient2, twitter_path2, twitter_path3, _circle, twitter_path4;
function twitter_extends() { twitter_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return twitter_extends.apply(this, arguments); }

const SvgTwitter = props => /*#__PURE__*/external_react_.createElement("svg", twitter_extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "48px",
  height: "48px"
}, props), _radialGradient || (_radialGradient = /*#__PURE__*/external_react_.createElement("radialGradient", {
  id: "yOrnnhliCrdS2gy~4tD8ma",
  cx: 19.38,
  cy: 42.035,
  r: 44.899,
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/external_react_.createElement("stop", {
  offset: 0,
  stopColor: "#fd5"
}), /*#__PURE__*/external_react_.createElement("stop", {
  offset: 0.328,
  stopColor: "#ff543f"
}), /*#__PURE__*/external_react_.createElement("stop", {
  offset: 0.348,
  stopColor: "#fc5245"
}), /*#__PURE__*/external_react_.createElement("stop", {
  offset: 0.504,
  stopColor: "#e64771"
}), /*#__PURE__*/external_react_.createElement("stop", {
  offset: 0.643,
  stopColor: "#d53e91"
}), /*#__PURE__*/external_react_.createElement("stop", {
  offset: 0.761,
  stopColor: "#cc39a4"
}), /*#__PURE__*/external_react_.createElement("stop", {
  offset: 0.841,
  stopColor: "#c837ab"
}))), twitter_path || (twitter_path = /*#__PURE__*/external_react_.createElement("path", {
  fill: "url(#yOrnnhliCrdS2gy~4tD8ma)",
  d: "M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z"
})), _radialGradient2 || (_radialGradient2 = /*#__PURE__*/external_react_.createElement("radialGradient", {
  id: "yOrnnhliCrdS2gy~4tD8mb",
  cx: 11.786,
  cy: 5.54,
  r: 29.813,
  gradientTransform: "matrix(1 0 0 .6663 0 1.849)",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/external_react_.createElement("stop", {
  offset: 0,
  stopColor: "#4168c9"
}), /*#__PURE__*/external_react_.createElement("stop", {
  offset: 0.999,
  stopColor: "#4168c9",
  stopOpacity: 0
}))), twitter_path2 || (twitter_path2 = /*#__PURE__*/external_react_.createElement("path", {
  fill: "url(#yOrnnhliCrdS2gy~4tD8mb)",
  d: "M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z"
})), twitter_path3 || (twitter_path3 = /*#__PURE__*/external_react_.createElement("path", {
  fill: "#fff",
  d: "M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5 s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
})), _circle || (_circle = /*#__PURE__*/external_react_.createElement("circle", {
  cx: 31.5,
  cy: 16.5,
  r: 1.5,
  fill: "#fff"
})), twitter_path4 || (twitter_path4 = /*#__PURE__*/external_react_.createElement("path", {
  fill: "#fff",
  d: "M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12 C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
})));
/* harmony default export */ const twitter = (SvgTwitter);
;// CONCATENATED MODULE: ./src/components/Icon/Icon.js


















const icons = {
    arrowLeft: arrow_left,
    arrowRight: arrow_right,
    check: check,
    chevronRight: chevron_right,
    close: svg_close,
    copy: copy,
    error: error,
    figma: figma,
    github: github,
    link: svg_link,
    menu: menu,
    pause: pause,
    play: play,
    send: send,
    twitter: twitter
};
const Icon = ({ icon , className , ...rest })=>{
    const IconComponent = icons[icon];
    return /*#__PURE__*/ jsx_runtime_.jsx(IconComponent, {
        "aria-hidden": true,
        className: (0,style/* classes */.Sh)((Icon_module_default()).icon, className),
        ...rest
    });
};

;// CONCATENATED MODULE: ./src/components/Icon/index.js



/***/ }),

/***/ 2665:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7346);
/* harmony import */ var _components_VisuallyHidden__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2323);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5480);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2362);
/* harmony import */ var _Loader_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(754);
/* harmony import */ var _Loader_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Loader_module_css__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__, _hooks__WEBPACK_IMPORTED_MODULE_4__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_3__, _hooks__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const Loader = ({ className , style , size =32 , text ="Loading..." , ...rest })=>{
    const reduceMotion = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useReducedMotion)();
    const hasMounted = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useHasMounted */ .f3)();
    const renderScreenReaderTextPortal = ()=>{
        if (!hasMounted) return;
        return /*#__PURE__*/ (0,react_dom__WEBPACK_IMPORTED_MODULE_5__.createPortal)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_VisuallyHidden__WEBPACK_IMPORTED_MODULE_2__/* .VisuallyHidden */ .T, {
            className: "loader-announcement",
            "aria-live": "assertive",
            children: text
        }), document.getElementById("portal-root"));
    };
    if (reduceMotion) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Text__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .x, {
            className: (0,_utils_style__WEBPACK_IMPORTED_MODULE_6__/* .classes */ .Sh)((_Loader_module_css__WEBPACK_IMPORTED_MODULE_7___default().text), className),
            weight: "medium",
            ...rest,
            children: [
                text,
                renderScreenReaderTextPortal()
            ]
        });
    }
    const gapSize = Math.round(size / 3 * 0.2);
    const spanSize = Math.round(size / 3 - gapSize * 2 - 1);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (0,_utils_style__WEBPACK_IMPORTED_MODULE_6__/* .classes */ .Sh)((_Loader_module_css__WEBPACK_IMPORTED_MODULE_7___default().loader), className),
        style: (0,_utils_style__WEBPACK_IMPORTED_MODULE_6__/* .cssProps */ .Fh)({
            size,
            spanSize,
            gapSize
        }, style),
        ...rest,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Loader_module_css__WEBPACK_IMPORTED_MODULE_7___default().content),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_Loader_module_css__WEBPACK_IMPORTED_MODULE_7___default().span)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_Loader_module_css__WEBPACK_IMPORTED_MODULE_7___default().span)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_Loader_module_css__WEBPACK_IMPORTED_MODULE_7___default().span)
                    })
                ]
            }),
            renderScreenReaderTextPortal()
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1206:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* reexport safe */ _Loader__WEBPACK_IMPORTED_MODULE_0__.a)
/* harmony export */ });
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2665);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Loader__WEBPACK_IMPORTED_MODULE_0__]);
_Loader__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* reexport */ Monogram)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/utils/style.js
var style = __webpack_require__(2362);
// EXTERNAL MODULE: ./src/components/Monogram/Monogram.module.css
var Monogram_module = __webpack_require__(9180);
var Monogram_module_default = /*#__PURE__*/__webpack_require__.n(Monogram_module);
;// CONCATENATED MODULE: ./src/components/Monogram/Monogram.js




const Monogram = /*#__PURE__*/ (0,external_react_.forwardRef)(({ highlight , className , ...props }, ref)=>{
    const id = (0,external_react_.useId)();
    const clipId = `${id}monogram-clip`;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        version: "1.1",
        "aria-hidden": true,
        className: (0,style/* classes */.Sh)((Monogram_module_default()).monogram, className),
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("clipPath", {
                    id: clipId,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M15.5 5h3v2.25h11V5h3v2.25h9.75V10H32.5v1.5h-3V10h-11v1.5h-3V10H6l-.25-.25v-2.5h9.75Zm-6.25 8h30v8.25h-30ZM12 15.25V19h6.25v-3.75Zm9 0V19h6.25v-3.75Zm9 0V19h6.25l.25-.25V15.5l-.25-.25ZM6.75 23.5H41.5V30h-3v-4.25L9.75 26l-.25 4H6.75Z",
                            stroke: "none",
                            fill: "#fcfcfc",
                            fillRule: "evenodd"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "m20.75 26.25 2.75.5-.5 1-1.75 1.5L36 29.5v2.25L34.5 34 33 35.75 29.75 38l-4.25 2-5.25 1.5-5.5 1-4.25.5h-2l-1.25-2.5 7.25-.75 5.5-1 .5-.25-2.5-1.75-2-1.25.5-1 1.25-1 4 2.25 2.25 1.5 1.5-.25 4-2 2.5-2.25.5-.5H16.75l-4.25 2-1.75.25-1.5-2 2.25-1 4-1.75 3.75-2.25Z",
                            stroke: "none",
                            fill: "#fcfcfc",
                            fillRule: "evenodd"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                clipPath: `url(#${clipId})`,
                width: "100%",
                height: "100%"
            }),
            highlight && /*#__PURE__*/ jsx_runtime_.jsx("g", {
                clipPath: `url(#${clipId})`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                    className: (Monogram_module_default()).highlight,
                    width: "100%",
                    height: "100%"
                })
            })
        ]
    });
});

;// CONCATENATED MODULE: ./src/components/Monogram/index.js



/***/ }),

/***/ 84:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ NavToggle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5121);
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1879);
/* harmony import */ var _NavToggle_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4207);
/* harmony import */ var _NavToggle_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_NavToggle_module_css__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Button__WEBPACK_IMPORTED_MODULE_1__]);
_components_Button__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const NavToggle = ({ menuOpen , ...rest })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .z, {
        iconOnly: true,
        className: (_NavToggle_module_css__WEBPACK_IMPORTED_MODULE_3___default().toggle),
        "aria-label": "Menu",
        "aria-expanded": menuOpen,
        ...rest,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_NavToggle_module_css__WEBPACK_IMPORTED_MODULE_3___default().inner),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icon__WEBPACK_IMPORTED_MODULE_2__/* .Icon */ .J, {
                    className: (_NavToggle_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon),
                    "data-menu": true,
                    "data-open": menuOpen,
                    icon: "menu"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icon__WEBPACK_IMPORTED_MODULE_2__/* .Icon */ .J, {
                    className: (_NavToggle_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon),
                    "data-close": true,
                    "data-open": menuOpen,
                    icon: "close"
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9359:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1879);
/* harmony import */ var components_Monogram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3279);
/* harmony import */ var components_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4352);
/* harmony import */ var components_ThemeProvider_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3994);
/* harmony import */ var components_Transition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8802);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5480);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var utils_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2362);
/* harmony import */ var _NavToggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(84);
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9946);
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _ThemeToggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3580);
/* harmony import */ var _navData__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6087);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__, components_Transition__WEBPACK_IMPORTED_MODULE_5__, hooks__WEBPACK_IMPORTED_MODULE_6__, _NavToggle__WEBPACK_IMPORTED_MODULE_11__, _ThemeToggle__WEBPACK_IMPORTED_MODULE_12__]);
([components_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__, components_Transition__WEBPACK_IMPORTED_MODULE_5__, hooks__WEBPACK_IMPORTED_MODULE_6__, _NavToggle__WEBPACK_IMPORTED_MODULE_11__, _ThemeToggle__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const Navbar = ()=>{
    const { 0: current , 1: setCurrent  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)();
    const { 0: target , 1: setTarget  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)();
    const { themeId  } = (0,components_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__/* .useTheme */ .Fg)();
    const { menuOpen , dispatch  } = (0,hooks__WEBPACK_IMPORTED_MODULE_6__/* .useAppContext */ .bp)();
    const { route , asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const windowSize = (0,hooks__WEBPACK_IMPORTED_MODULE_6__/* .useWindowSize */ .iP)();
    const headerRef = (0,react__WEBPACK_IMPORTED_MODULE_9__.useRef)();
    const isMobile = windowSize.width <= utils_style__WEBPACK_IMPORTED_MODULE_10__/* .media.mobile */ .BC.mobile || windowSize.height <= 696;
    const scrollToHash = (0,hooks__WEBPACK_IMPORTED_MODULE_6__/* .useScrollToHash */ .jh)();
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        // Prevent ssr mismatch by storing this in state
        setCurrent(asPath);
    }, [
        asPath
    ]);
    // Handle smooth scroll nav items
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        if (!target || route !== "/") return;
        setCurrent(`${route}${target}`);
        scrollToHash(target, ()=>setTarget(null));
    }, [
        route,
        scrollToHash,
        target
    ]);
    // Handle swapping the theme when intersecting with inverse themed elements
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        const navItems = document.querySelectorAll("[data-navbar-item]");
        const inverseTheme = themeId === "dark" ? "light" : "dark";
        const { innerHeight  } = window;
        let inverseMeasurements = [];
        let navItemMeasurements = [];
        const isOverlap = (rect1, rect2, scrollY)=>{
            return !(rect1.bottom - scrollY < rect2.top || rect1.top - scrollY > rect2.bottom);
        };
        const resetNavTheme = ()=>{
            for (const measurement of navItemMeasurements){
                measurement.element.dataset.theme = "";
            }
        };
        const handleInversion = ()=>{
            const invertedElements = document.querySelectorAll(`[data-theme='${inverseTheme}'][data-invert]`);
            if (!invertedElements) return;
            inverseMeasurements = Array.from(invertedElements).map((item)=>({
                    element: item,
                    top: item.offsetTop,
                    bottom: item.offsetTop + item.offsetHeight
                }));
            const { scrollY  } = window;
            resetNavTheme();
            for (const inverseMeasurement of inverseMeasurements){
                if (inverseMeasurement.top - scrollY > innerHeight || inverseMeasurement.bottom - scrollY < 0) {
                    continue;
                }
                for (const measurement of navItemMeasurements){
                    if (isOverlap(inverseMeasurement, measurement, scrollY)) {
                        measurement.element.dataset.theme = inverseTheme;
                    } else {
                        measurement.element.dataset.theme = "";
                    }
                }
            }
        };
        // Currently only the light theme has dark full-width elements
        if (themeId === "light") {
            navItemMeasurements = Array.from(navItems).map((item)=>{
                const rect = item.getBoundingClientRect();
                return {
                    element: item,
                    top: rect.top,
                    bottom: rect.bottom
                };
            });
            document.addEventListener("scroll", handleInversion);
            handleInversion();
        }
        return ()=>{
            document.removeEventListener("scroll", handleInversion);
            resetNavTheme();
        };
    }, [
        themeId,
        windowSize,
        asPath
    ]);
    // Check if a nav item should be active
    const getCurrent = (url = "")=>{
        const nonTrailing = current?.endsWith("/") ? current?.slice(0, -1) : current;
        if (url === nonTrailing) {
            return "page";
        }
        return "";
    };
    // Store the current hash to scroll to
    const handleNavItemClick = (event)=>{
        const hash = event.currentTarget.href.split("#")[1];
        setTarget(null);
        if (hash && route === "/") {
            setTarget(`#${hash}`);
            event.preventDefault();
        }
    };
    const handleMobileNavClick = (event)=>{
        handleNavItemClick(event);
        if (menuOpen) dispatch({
            type: "toggleMenu"
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_14___default().navbar),
        ref: headerRef,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                href: route === "/" ? "/#intro" : "/",
                scroll: false,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "data-navbar-item": true,
                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_14___default().logo),
                    "aria-label": "",
                    onClick: handleMobileNavClick,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Monogram__WEBPACK_IMPORTED_MODULE_2__/* .Monogram */ .Y, {
                        highlight: true
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavToggle__WEBPACK_IMPORTED_MODULE_11__/* .NavToggle */ .u, {
                onClick: ()=>dispatch({
                        type: "toggleMenu"
                    }),
                menuOpen: menuOpen
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_14___default().nav),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_14___default().navList),
                        children: _navData__WEBPACK_IMPORTED_MODULE_13__/* .navLinks.map */ .F.map(({ label , pathname  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                href: pathname,
                                scroll: false,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    "data-navbar-item": true,
                                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_14___default().navLink),
                                    "aria-current": getCurrent(pathname),
                                    onClick: handleNavItemClick,
                                    children: label
                                })
                            }, label))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavbarIcons, {
                        desktop: true
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Transition__WEBPACK_IMPORTED_MODULE_5__/* .Transition */ .u, {
                unmount: true,
                in: menuOpen,
                timeout: (0,utils_style__WEBPACK_IMPORTED_MODULE_10__/* .msToNum */ .zG)(components_ThemeProvider_theme__WEBPACK_IMPORTED_MODULE_4__/* .tokens.base.durationL */ .T.base.durationL),
                children: (visible)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_14___default().mobileNav),
                        "data-visible": visible,
                        children: [
                            _navData__WEBPACK_IMPORTED_MODULE_13__/* .navLinks.map */ .F.map(({ label , pathname  }, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    href: pathname,
                                    scroll: false,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_14___default().mobileNavLink),
                                        "data-visible": visible,
                                        "aria-current": getCurrent(pathname),
                                        onClick: handleMobileNavClick,
                                        style: (0,utils_style__WEBPACK_IMPORTED_MODULE_10__/* .cssProps */ .Fh)({
                                            transitionDelay: (0,utils_style__WEBPACK_IMPORTED_MODULE_10__/* .numToMs */ .aU)(Number((0,utils_style__WEBPACK_IMPORTED_MODULE_10__/* .msToNum */ .zG)(components_ThemeProvider_theme__WEBPACK_IMPORTED_MODULE_4__/* .tokens.base.durationS */ .T.base.durationS)) + index * 50)
                                        }),
                                        children: label
                                    })
                                }, label)),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavbarIcons, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ThemeToggle__WEBPACK_IMPORTED_MODULE_12__/* .ThemeToggle */ .T, {
                                isMobile: true
                            })
                        ]
                    })
            }),
            !isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ThemeToggle__WEBPACK_IMPORTED_MODULE_12__/* .ThemeToggle */ .T, {
                "data-navbar-item": true
            })
        ]
    });
};
const NavbarIcons = ({ desktop  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_14___default().navIcons),
        children: _navData__WEBPACK_IMPORTED_MODULE_13__/* .socialLinks.map */ .K.map(({ label , url , icon  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                "data-navbar-item": desktop || undefined,
                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_14___default().navIconLink),
                "aria-label": label,
                href: url,
                rel: "noopener noreferrer",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Icon__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .J, {
                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_14___default().navIcon),
                    icon: icon
                })
            }, label))
    });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3580:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ ThemeToggle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5121);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5480);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeToggle_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(525);
/* harmony import */ var _ThemeToggle_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ThemeToggle_module_css__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Button__WEBPACK_IMPORTED_MODULE_1__, _hooks__WEBPACK_IMPORTED_MODULE_2__]);
([_components_Button__WEBPACK_IMPORTED_MODULE_1__, _hooks__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const ThemeToggle = ({ isMobile , ...rest })=>{
    const { dispatch  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useAppContext */ .bp)();
    const id = (0,react__WEBPACK_IMPORTED_MODULE_3__.useId)();
    const maskId = `${id}theme-toggle-mask`;
    const handleClick = ()=>{
        dispatch({
            type: "toggleTheme"
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .z, {
        iconOnly: true,
        className: (_ThemeToggle_module_css__WEBPACK_IMPORTED_MODULE_4___default().toggle),
        "data-mobile": isMobile,
        "aria-label": "Toggle theme",
        onClick: handleClick,
        ...rest,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            "aria-hidden": true,
            className: (_ThemeToggle_module_css__WEBPACK_IMPORTED_MODULE_4___default().svg),
            width: "38",
            height: "38",
            viewBox: "0 0 38 38",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("mask", {
                        id: maskId,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                className: (_ThemeToggle_module_css__WEBPACK_IMPORTED_MODULE_4___default().circle),
                                "data-mask": true,
                                cx: "19",
                                cy: "19",
                                r: "13"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                className: (_ThemeToggle_module_css__WEBPACK_IMPORTED_MODULE_4___default().mask),
                                cx: "25",
                                cy: "14",
                                r: "9"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    className: (_ThemeToggle_module_css__WEBPACK_IMPORTED_MODULE_4___default().path),
                    d: "M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                    className: (_ThemeToggle_module_css__WEBPACK_IMPORTED_MODULE_4___default().circle),
                    mask: `url(#${maskId})`,
                    cx: "19",
                    cy: "19",
                    r: "12"
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* reexport safe */ _Navbar__WEBPACK_IMPORTED_MODULE_0__.w)
/* harmony export */ });
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9359);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Navbar__WEBPACK_IMPORTED_MODULE_0__]);
_Navbar__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ navLinks),
/* harmony export */   "K": () => (/* binding */ socialLinks)
/* harmony export */ });
const navLinks = [
    {
        label: "Skills",
        pathname: "/skill"
    },
    {
        label: "Projects",
        pathname: "/projects"
    },
    {
        label: "Resume",
        pathname: "/resume"
    }, 
];
const socialLinks = [
    {
        label: "Instagram",
        url: "https://www.instagram.com/rta.juice?igsh=MWFsaW44ZjJvMWdjbA%3D%3D&utm_source=qr",
        icon: "twitter"
    },
    {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/ryan-nasiri-1a1323261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        icon: "figma"
    },
    {
        label: "Github",
        url: "https://github.com/xolah88457",
        icon: "github"
    }, 
];


/***/ }),

/***/ 7346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "x": () => (/* reexport */ Text)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/utils/style.js
var style = __webpack_require__(2362);
// EXTERNAL MODULE: ./src/components/Text/Text.module.css
var Text_module = __webpack_require__(2038);
var Text_module_default = /*#__PURE__*/__webpack_require__.n(Text_module);
;// CONCATENATED MODULE: ./src/components/Text/Text.js



const Text = ({ children , size ="m" , as: Component = "span" , align ="auto" , weight ="auto" , secondary , className , ...rest })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Component, {
        className: (0,style/* classes */.Sh)((Text_module_default()).text, className),
        "data-align": align,
        "data-size": size,
        "data-weight": weight,
        "data-secondary": secondary,
        ...rest,
        children: children
    });
};

;// CONCATENATED MODULE: ./src/components/Text/index.js



/***/ }),

/***/ 5036:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ni": () => (/* binding */ ThemeContext),
/* harmony export */   "f6": () => (/* binding */ ThemeProvider),
/* harmony export */   "g6": () => (/* binding */ fontStyles),
/* harmony export */   "yB": () => (/* binding */ tokenStyles)
/* harmony export */ });
/* unused harmony exports squish, createThemeProperties, createThemeStyleObject, createMediaTokenProperties */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_fonts_gotham_bold_italic_woff2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9272);
/* harmony import */ var _assets_fonts_gotham_bold_woff2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6434);
/* harmony import */ var _assets_fonts_gotham_book_italic_woff2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9653);
/* harmony import */ var _assets_fonts_gotham_book_woff2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3829);
/* harmony import */ var _assets_fonts_gotham_medium_italic_woff2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8039);
/* harmony import */ var _assets_fonts_gotham_medium_woff2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7451);
/* harmony import */ var _assets_fonts_ipa_gothic_woff2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3210);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5480);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2362);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3994);
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6095);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks__WEBPACK_IMPORTED_MODULE_8__, _useTheme__WEBPACK_IMPORTED_MODULE_13__]);
([hooks__WEBPACK_IMPORTED_MODULE_8__, _useTheme__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_10__.createContext)({});
const ThemeProvider = ({ themeId ="dark" , theme: themeOverrides , children , className , as: Component = "div" , ...rest })=>{
    const currentTheme = {
        ..._theme__WEBPACK_IMPORTED_MODULE_12__/* .theme */ .r[themeId],
        ...themeOverrides
    };
    const parentTheme = (0,_useTheme__WEBPACK_IMPORTED_MODULE_13__/* .useTheme */ .F)();
    const isRootProvider = !parentTheme.themeId;
    const hasMounted = (0,hooks__WEBPACK_IMPORTED_MODULE_8__/* .useHasMounted */ .f3)();
    // Save root theme id to localstorage and apply class to body
    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{
        if (isRootProvider && hasMounted) {
            window.localStorage.setItem("theme", JSON.stringify(themeId));
            document.body.dataset.theme = themeId;
        }
    }, [
        themeId,
        isRootProvider,
        hasMounted
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ThemeContext.Provider, {
        value: currentTheme,
        children: [
            isRootProvider && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_9___default()), {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "theme-color",
                            content: `rgb(${currentTheme.rgbBackground})`
                        })
                    }),
                    children
                ]
            }),
            !isRootProvider && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                className: (0,_utils_style__WEBPACK_IMPORTED_MODULE_11__/* .classes */ .Sh)("theme-provider", className),
                "data-theme": themeId,
                ...rest,
                children: children
            })
        ]
    });
};
/**
 * Squeeze out spaces and newlines
 */ function squish(styles) {
    return styles.replace(/\s\s+/g, " ");
}
/**
 * Transform theme token objects into CSS custom property strings
 */ function createThemeProperties(theme) {
    return squish(Object.keys(theme).filter((key)=>key !== "themeId").map((key)=>`--${key}: ${theme[key]};`).join("\n\n"));
}
/**
 * Transform theme tokens into a React CSSProperties object
 */ function createThemeStyleObject(theme) {
    let style = {};
    for (const key of Object.keys(theme)){
        if (key !== "themeId") {
            style[`--${key}`] = theme[key];
        }
    }
    return style;
}
/**
 * Generate media queries for tokens
 */ function createMediaTokenProperties() {
    return squish(Object.keys(_utils_style__WEBPACK_IMPORTED_MODULE_11__/* .media */ .BC).map((key)=>{
        return `
        @media (max-width: ${_utils_style__WEBPACK_IMPORTED_MODULE_11__/* .media */ .BC[key]}px) {
          :root {
            ${createThemeProperties(_theme__WEBPACK_IMPORTED_MODULE_12__/* .tokens */ .T[key])}
          }
        }
      `;
    }).join("\n"));
}
const tokenStyles = squish(`
  :root {
    ${createThemeProperties(_theme__WEBPACK_IMPORTED_MODULE_12__/* .tokens.base */ .T.base)}
  }

  ${createMediaTokenProperties()}

  [data-theme='dark'] {
    ${createThemeProperties(_theme__WEBPACK_IMPORTED_MODULE_12__/* .theme.dark */ .r.dark)}
  }

  [data-theme='light'] {
    ${createThemeProperties(_theme__WEBPACK_IMPORTED_MODULE_12__/* .theme.light */ .r.light)}
  }
`);
const fontStyles = squish(`
  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${_assets_fonts_gotham_book_woff2__WEBPACK_IMPORTED_MODULE_4__}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${_assets_fonts_gotham_book_italic_woff2__WEBPACK_IMPORTED_MODULE_3__}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${_assets_fonts_gotham_medium_woff2__WEBPACK_IMPORTED_MODULE_6__}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${_assets_fonts_gotham_medium_italic_woff2__WEBPACK_IMPORTED_MODULE_5__}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${_assets_fonts_gotham_bold_woff2__WEBPACK_IMPORTED_MODULE_2__}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${_assets_fonts_gotham_bold_italic_woff2__WEBPACK_IMPORTED_MODULE_1__}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: IPA Gothic;
    font-weight: 400;
    src: url(${_assets_fonts_ipa_gothic_woff2__WEBPACK_IMPORTED_MODULE_7__}) format('woff2');
    font-display: block;
    font-style: normal;
  }
`);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4352:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fg": () => (/* reexport safe */ _useTheme__WEBPACK_IMPORTED_MODULE_2__.F),
/* harmony export */   "Ni": () => (/* reexport safe */ _ThemeProvider__WEBPACK_IMPORTED_MODULE_0__.Ni),
/* harmony export */   "f6": () => (/* reexport safe */ _ThemeProvider__WEBPACK_IMPORTED_MODULE_0__.f6),
/* harmony export */   "g6": () => (/* reexport safe */ _ThemeProvider__WEBPACK_IMPORTED_MODULE_0__.g6),
/* harmony export */   "yB": () => (/* reexport safe */ _ThemeProvider__WEBPACK_IMPORTED_MODULE_0__.yB)
/* harmony export */ });
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5036);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3994);
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6095);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ThemeProvider__WEBPACK_IMPORTED_MODULE_0__, _useTheme__WEBPACK_IMPORTED_MODULE_2__]);
([_ThemeProvider__WEBPACK_IMPORTED_MODULE_0__, _useTheme__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ tokens),
/* harmony export */   "r": () => (/* binding */ theme)
/* harmony export */ });
/* harmony import */ var _utils_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2362);

// Full list of tokens
const baseTokens = {
    rgbBlack: "0 0 0",
    rgbWhite: "255 255 255",
    bezierFastoutSlowin: "cubic-bezier(0.4, 0.0, 0.2, 1)",
    durationXS: "200ms",
    durationS: "300ms",
    durationM: "400ms",
    durationL: "600ms",
    durationXL: "800ms",
    systemFontStack: "system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",
    fontStack: `Gotham, var(--systemFontStack)`,
    monoFontStack: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
    japaneseFontStack: "IPA Gothic, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, メイリオ, Meiryo, Segoe UI, sans-serif",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontSizeH0: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(140),
    fontSizeH1: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(100),
    fontSizeH2: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(58),
    fontSizeH3: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(38),
    fontSizeH4: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(28),
    fontSizeH5: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(24),
    fontSizeBodyXL: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(22),
    fontSizeBodyL: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(20),
    fontSizeBodyM: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(18),
    fontSizeBodyS: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(16),
    fontSizeBodyXS: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(14),
    lineHeightTitle: "1.1",
    lineHeightBody: "1.6",
    maxWidthS: "540px",
    maxWidthM: "720px",
    maxWidthL: "1096px",
    maxWidthXL: "1680px",
    spaceOuter: "64px",
    spaceXS: "4px",
    spaceS: "8px",
    spaceM: "16px",
    spaceL: "24px",
    spaceXL: "32px",
    space2XL: "48px",
    space3XL: "64px",
    space4XL: "96px",
    space5XL: "128px",
    zIndex0: 0,
    zIndex1: 4,
    zIndex2: 8,
    zIndex3: 16,
    zIndex4: 32,
    zIndex5: 64
};
// Tokens that change based on viewport size
const tokensDesktop = {
    fontSizeH0: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(120),
    fontSizeH1: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(80)
};
const tokensLaptop = {
    maxWidthS: "480px",
    maxWidthM: "640px",
    maxWidthL: "1000px",
    maxWidthXL: "1100px",
    spaceOuter: "48px",
    fontSizeH0: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(100),
    fontSizeH1: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(70),
    fontSizeH2: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(50),
    fontSizeH3: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(36),
    fontSizeH4: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(26),
    fontSizeH5: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(22)
};
const tokensTablet = {
    fontSizeH0: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(80),
    fontSizeH1: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(60),
    fontSizeH2: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(48),
    fontSizeH3: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(32),
    fontSizeH4: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(24),
    fontSizeH5: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(20)
};
const tokensMobile = {
    spaceOuter: "24px",
    fontSizeH0: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(56),
    fontSizeH1: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(40),
    fontSizeH2: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(34),
    fontSizeH3: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(28),
    fontSizeH4: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(22),
    fontSizeH5: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(18),
    fontSizeBodyL: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(17),
    fontSizeBodyM: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(16),
    fontSizeBodyS: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(14)
};
const tokensMobileSmall = {
    spaceOuter: "16px",
    fontSizeH0: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(42),
    fontSizeH1: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(38),
    fontSizeH2: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(28),
    fontSizeH3: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(24),
    fontSizeH4: (0,_utils_style__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(20)
};
// Tokens that change based on theme
const dark = {
    themeId: "dark",
    rgbBackground: "17 17 17",
    rgbBackgroundLight: "26 26 26",
    rgbPrimary: "0 229 255",
    rgbAccent: "0 229 255",
    rgbText: "255 255 255",
    rgbError: "255 55 102",
    colorTextTitle: "rgb(var(--rgbText) / 1)",
    colorTextBody: "rgb(var(--rgbText) / 0.8)",
    colorTextLight: "rgb(var(--rgbText) / 0.6)"
};
const light = {
    themeId: "light",
    rgbBackground: "242 242 242",
    rgbBackgroundLight: "255 255 255",
    rgbPrimary: "0 0 0",
    rgbAccent: "0 229 255",
    rgbText: "0 0 0",
    rgbError: "255 0 60",
    colorTextTitle: "rgb(var(--rgbText) / 1)",
    colorTextBody: "rgb(var(--rgbText) / 0.8)",
    colorTextLight: "rgb(var(--rgbText) / 0.6)"
};
const tokens = {
    base: baseTokens,
    desktop: tokensDesktop,
    laptop: tokensLaptop,
    tablet: tokensTablet,
    mobile: tokensMobile,
    mobileS: tokensMobileSmall
};
const theme = {
    dark,
    light
};


/***/ }),

/***/ 6095:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ useTheme)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4352);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_1__]);
___WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function useTheme() {
    const currentTheme = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(___WEBPACK_IMPORTED_MODULE_1__/* .ThemeContext */ .Ni);
    return currentTheme;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1475:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ Transition)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



/**
 * A Framer Motion AnimatePresence implementation of `react-transition-group`
 * to be used for vanilla css transitions
 */ const Transition = ({ children , timeout =0 , onEnter , onEntered , onExit , onExited , in: show , unmount ,  })=>{
    const enterTimeout = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    const exitTimeout = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (show) {
            clearTimeout(exitTimeout.current);
        } else {
            clearTimeout(enterTimeout.current);
        }
    }, [
        show
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.AnimatePresence, {
        children: (show || !unmount) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TransitionContent, {
            timeout: timeout,
            enterTimeout: enterTimeout,
            exitTimeout: exitTimeout,
            onEnter: onEnter,
            onEntered: onEntered,
            onExit: onExit,
            onExited: onExited,
            show: show,
            children: children
        })
    });
};
const TransitionContent = ({ children , timeout , enterTimeout , exitTimeout , onEnter , onEntered , onExit , onExited , show ,  })=>{
    const { 0: status , 1: setStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("exited");
    const [isPresent, safeToRemove] = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.usePresence)();
    const { 0: hasEntered , 1: setHasEntered  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const splitTimeout = typeof timeout === "object";
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (hasEntered || !show) return;
        const actualTimeout = splitTimeout ? timeout.enter : timeout;
        clearTimeout(enterTimeout.current);
        clearTimeout(exitTimeout.current);
        setHasEntered(true);
        setStatus("entering");
        onEnter?.();
        enterTimeout.current = setTimeout(()=>{
            setStatus("entered");
            onEntered?.();
        }, actualTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        onEnter,
        onEntered,
        timeout,
        status,
        show
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (isPresent && show) return;
        const actualTimeout = splitTimeout ? timeout.exit : timeout;
        clearTimeout(enterTimeout.current);
        clearTimeout(exitTimeout.current);
        setStatus("exiting");
        onExit?.();
        exitTimeout.current = setTimeout(()=>{
            setStatus("exited");
            safeToRemove?.();
            onExited?.();
        }, actualTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isPresent,
        onExit,
        safeToRemove,
        timeout,
        onExited,
        show
    ]);
    return children(hasEntered && show ? isPresent : false, status);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8802:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* reexport safe */ _Transition__WEBPACK_IMPORTED_MODULE_0__.u)
/* harmony export */ });
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1475);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Transition__WEBPACK_IMPORTED_MODULE_0__]);
_Transition__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* reexport */ VisuallyHidden)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/utils/style.js
var style = __webpack_require__(2362);
// EXTERNAL MODULE: ./src/components/VisuallyHidden/VisuallyHidden.module.css
var VisuallyHidden_module = __webpack_require__(3674);
var VisuallyHidden_module_default = /*#__PURE__*/__webpack_require__.n(VisuallyHidden_module);
;// CONCATENATED MODULE: ./src/components/VisuallyHidden/VisuallyHidden.js




const VisuallyHidden = /*#__PURE__*/ (0,external_react_.forwardRef)(({ className , showOnFocus , as: Component = "span" , children , visible , ...rest }, ref)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Component, {
        className: (0,style/* classes */.Sh)((VisuallyHidden_module_default()).hidden, className),
        "data-hidden": !visible && !showOnFocus,
        "data-show-on-focus": showOnFocus,
        ref: ref,
        ...rest,
        children: children
    });
});

;// CONCATENATED MODULE: ./src/components/VisuallyHidden/index.js



/***/ }),

/***/ 5480:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D9": () => (/* reexport safe */ _usePrevious__WEBPACK_IMPORTED_MODULE_8__.D),
/* harmony export */   "NM": () => (/* reexport safe */ _useInViewport__WEBPACK_IMPORTED_MODULE_5__.N),
/* harmony export */   "S2": () => (/* reexport safe */ _useFoucFix__WEBPACK_IMPORTED_MODULE_2__.S),
/* harmony export */   "YT": () => (/* reexport safe */ _useParallax__WEBPACK_IMPORTED_MODULE_7__.Y),
/* harmony export */   "Yz": () => (/* reexport safe */ _useInterval__WEBPACK_IMPORTED_MODULE_4__.Y),
/* harmony export */   "_": () => (/* reexport safe */ _useLocalStorage__WEBPACK_IMPORTED_MODULE_6__._),
/* harmony export */   "bp": () => (/* reexport safe */ _useAppContext__WEBPACK_IMPORTED_MODULE_0__.b),
/* harmony export */   "f3": () => (/* reexport safe */ _useHasMounted__WEBPACK_IMPORTED_MODULE_3__.f),
/* harmony export */   "iP": () => (/* reexport safe */ _useWindowSize__WEBPACK_IMPORTED_MODULE_10__.i),
/* harmony export */   "jh": () => (/* reexport safe */ _useScrollToHash__WEBPACK_IMPORTED_MODULE_9__.j)
/* harmony export */ });
/* harmony import */ var _useAppContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1138);
/* harmony import */ var _useFormInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2769);
/* harmony import */ var _useFoucFix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4074);
/* harmony import */ var _useHasMounted__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3790);
/* harmony import */ var _useInterval__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8645);
/* harmony import */ var _useInViewport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8349);
/* harmony import */ var _useLocalStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3698);
/* harmony import */ var _useParallax__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9580);
/* harmony import */ var _usePrevious__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(549);
/* harmony import */ var _useScrollToHash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8677);
/* harmony import */ var _useWindowSize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(420);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useAppContext__WEBPACK_IMPORTED_MODULE_0__, _useParallax__WEBPACK_IMPORTED_MODULE_7__, _useScrollToHash__WEBPACK_IMPORTED_MODULE_9__]);
([_useAppContext__WEBPACK_IMPORTED_MODULE_0__, _useParallax__WEBPACK_IMPORTED_MODULE_7__, _useScrollToHash__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1138:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ useAppContext)
/* harmony export */ });
/* harmony import */ var _pages_app_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2214);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_app_page__WEBPACK_IMPORTED_MODULE_0__]);
_pages_app_page__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function useAppContext() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_pages_app_page__WEBPACK_IMPORTED_MODULE_0__.AppContext);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export useFormInput */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useFormInput(initialValue = "") {
    const { 0: value , 1: setValue  } = useState(initialValue);
    const { 0: error , 1: setError  } = useState();
    const { 0: isDirty , 1: setIsDirty  } = useState(false);
    const handleChange = (event)=>{
        setValue(event.target.value);
        setIsDirty(true);
        // Resolve errors as soon as input becomes valid
        if (error && event.target.checkValidity()) {
            setError(null);
        }
    };
    const handleInvalid = (event)=>{
        // Prevent native errors appearing
        event.preventDefault();
        setError(event.target.validationMessage);
    };
    const handleBlur = (event)=>{
        // Only validate when the user has made a change
        if (isDirty) {
            event.target.checkValidity();
        }
    };
    return {
        value,
        error,
        onChange: handleChange,
        onBlur: handleBlur,
        onInvalid: handleInvalid
    };
}


/***/ }),

/***/ 4074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useFoucFix)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// Temporary fix to avoid flash of unstyled content (FOUC) during route transitions.
// Keep an eye on this issue and remove this code when resolved: https://github.com/vercel/next.js/issues/17464
const useFoucFix = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // Gather all server-side rendered stylesheet entries.
        let ssrPageStyleSheetsEntries = Array.from(document.querySelectorAll('link[rel="stylesheet"][data-n-p]')).map((element)=>({
                element,
                href: element.getAttribute("href")
            }));
        // Remove the `data-n-p` attribute to prevent Next.js from removing it early.
        ssrPageStyleSheetsEntries.forEach(({ element  })=>element.removeAttribute("data-n-p"));
        const fixedStyleHrefs = [];
        const mutationHandler = (mutations)=>{
            // Gather all <style data-n-href="/..."> elements.
            const newStyleEntries = mutations.filter(({ target  })=>target.nodeName === "STYLE" && target.hasAttribute("data-n-href")).map(({ target  })=>({
                    element: target,
                    href: target.getAttribute("data-n-href")
                }));
            // Cycle through them and either:
            // - Remove the `data-n-href` attribute to prevent Next.js from removing it early.
            // - Remove the element if it's already present.
            newStyleEntries.forEach(({ element , href  })=>{
                const styleExists = fixedStyleHrefs.includes(href);
                if (styleExists) {
                    element.remove();
                } else {
                    element.setAttribute("data-fouc-fix-n-href", href);
                    element.removeAttribute("data-n-href");
                    fixedStyleHrefs.push(href);
                }
            });
            // Cycle through the server-side rendered stylesheets and remove the ones that
            // are already present as inline <style> tags added by Next.js, so that we don't have duplicate styles.
            ssrPageStyleSheetsEntries = ssrPageStyleSheetsEntries.reduce((entries, entry)=>{
                const { element , href  } = entry;
                const styleExists = fixedStyleHrefs.includes(href);
                if (styleExists) {
                    element.remove();
                } else {
                    entries.push(entry);
                }
                return entries;
            }, []);
        };
        const observer = new MutationObserver(mutationHandler);
        observer.observe(document.head, {
            subtree: true,
            attributeFilter: [
                "media"
            ]
        });
        return ()=>observer.disconnect();
    }, []);
};


/***/ }),

/***/ 3790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ useHasMounted)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useHasMounted() {
    const { 0: mounted , 1: setMounted  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setMounted(true);
    }, []);
    return mounted;
}


/***/ }),

/***/ 8349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ useInViewport)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useInViewport(elementRef, unobserveOnIntersect, options = {}, shouldObserve = true) {
    const { 0: intersect , 1: setIntersect  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { 0: isUnobserved , 1: setIsUnobserved  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!elementRef?.current) return;
        const observer = new IntersectionObserver(([entry])=>{
            const { isIntersecting , target  } = entry;
            setIntersect(isIntersecting);
            if (isIntersecting && unobserveOnIntersect) {
                observer.unobserve(target);
                setIsUnobserved(true);
            }
        }, options);
        if (!isUnobserved && shouldObserve) {
            observer.observe(elementRef.current);
        }
        return ()=>observer.disconnect();
    }, [
        elementRef,
        unobserveOnIntersect,
        options,
        isUnobserved,
        shouldObserve
    ]);
    return intersect;
}


/***/ }),

/***/ 8645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ useInterval)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useInterval(callback, delay, reset) {
    const savedCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        savedCallback.current = callback;
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return ()=>clearInterval(id);
        }
    }, [
        delay,
        reset
    ]);
}


/***/ }),

/***/ 3698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ useLocalStorage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useLocalStorage(key, initialValue) {
    const { 0: storedValue , 1: setStoredValue  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>{
        if (true) return;
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });
    const setValue = (value)=>{
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(error);
        }
    };
    return [
        storedValue,
        setValue
    ];
}


/***/ }),

/***/ 9580:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ useParallax)
/* harmony export */ });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_0__]);
framer_motion__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function useParallax(multiplier, onChange) {
    const reduceMotion = (0,framer_motion__WEBPACK_IMPORTED_MODULE_0__.useReducedMotion)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let ticking = false;
        let animationFrame = null;
        const animate = ()=>{
            const { innerHeight  } = window;
            const offsetValue = Math.max(0, window.scrollY) * multiplier;
            const clampedOffsetValue = Math.max(-innerHeight, Math.min(innerHeight, offsetValue));
            onChange(clampedOffsetValue);
            ticking = false;
        };
        const handleScroll = ()=>{
            if (!ticking) {
                ticking = true;
                animationFrame = requestAnimationFrame(animate);
            }
        };
        if (!reduceMotion) {
            window.addEventListener("scroll", handleScroll);
            handleScroll();
        }
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
            cancelAnimationFrame(animationFrame);
        };
    }, [
        multiplier,
        onChange,
        reduceMotion
    ]);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ usePrevious)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function usePrevious(value) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        ref.current = value;
    }, [
        value
    ]);
    return ref.current;
}


/***/ }),

/***/ 8677:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ useScrollToHash)
/* harmony export */ });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6197);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_0__]);
framer_motion__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function useScrollToHash() {
    const scrollTimeout = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    const { asPath , push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const reduceMotion = (0,framer_motion__WEBPACK_IMPORTED_MODULE_0__.useReducedMotion)();
    const scrollToHash = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((hash, onDone)=>{
        const id = hash.replace(/^#/, "");
        if (!id) return; // Exit if no id is provided
        const route = asPath.split("#")[0];
        const newPath = `${route}#${id}`;
        const targetElement = document.getElementById(id);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: reduceMotion ? "auto" : "smooth"
            });
        } else {
            console.warn(`Element with id ${id} not found.`);
            return;
        }
        const handleScroll = ()=>{
            clearTimeout(scrollTimeout.current);
            scrollTimeout.current = setTimeout(()=>{
                window.removeEventListener("scroll", handleScroll);
                if (window.location.pathname === route) {
                    onDone?.();
                    push(newPath, undefined, {
                        scroll: false
                    });
                }
            }, 50);
        };
        window.addEventListener("scroll", handleScroll);
        // Cleanup function
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(scrollTimeout.current);
        };
    }, [
        push,
        reduceMotion,
        asPath
    ]);
    // Cleanup on unmount
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        return ()=>{
            clearTimeout(scrollTimeout.current);
        };
    }, []);
    return scrollToHash;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ useWindowSize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useWindowSize() {
    const dimensions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(()=>({
            w: 1280,
            h: 800
        }));
    const createRuler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        let ruler = document.createElement("div");
        ruler.style.position = "fixed";
        ruler.style.height = "100vh";
        ruler.style.width = 0;
        ruler.style.top = 0;
        document.documentElement.appendChild(ruler);
        // Set cache conscientious of device orientation
        dimensions.current.w = window.innerWidth;
        dimensions.current.h = ruler.offsetHeight;
        // Clean up after ourselves
        document.documentElement.removeChild(ruler);
        ruler = null;
    }, []);
    // Get the actual height on iOS Safari
    const getHeight = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        const isIOS = navigator?.userAgent.match(/iphone|ipod|ipad/i);
        if (isIOS) {
            createRuler();
            return dimensions.current.h;
        }
        return window.innerHeight;
    }, [
        createRuler
    ]);
    const getSize = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        return {
            width: window.innerWidth,
            height: getHeight()
        };
    }, [
        getHeight
    ]);
    const { 0: windowSize , 1: setWindowSize  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(dimensions.current);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const handleResize = ()=>{
            setWindowSize(getSize());
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, [
        getSize
    ]);
    return windowSize;
}


/***/ }),

/***/ 4189:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ ScrollRestore)
/* harmony export */ });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6197);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_0__]);
framer_motion__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// Custom scroll restoration to avoid jank during page transitions
const ScrollRestore = ()=>{
    const isPresent = (0,framer_motion__WEBPACK_IMPORTED_MODULE_0__.useIsPresent)();
    const { asPath , beforePopState  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        // Opt out of native scroll restoration
        window.history.scrollRestoration = "manual";
    }, []);
    // Prevent insta-scroll on browser back button
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        beforePopState((state)=>{
            state.options.scroll = false;
            return true;
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // Handle scroll restoration
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!isPresent) return;
        const hash = asPath.split("#")[1];
        const targetElement = document.getElementById(hash);
        if (hash && targetElement) {
            // If there's a hash in the url and a matching element
            // id, scroll to and focus it
            window.scrollTo(0, targetElement.offsetTop);
            targetElement.focus({
                preventScroll: true
            });
        } else {
            window.scrollTo(0, 0);
            document.body.focus({
                preventScroll: true
            });
        }
    }, [
        asPath,
        isPresent
    ]);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ initialState),
/* harmony export */   "I": () => (/* binding */ reducer)
/* harmony export */ });
const initialState = {
    menuOpen: false
};
function reducer(state, action) {
    const { type , value  } = action;
    switch(type){
        case "setTheme":
            return {
                ...state,
                theme: value
            };
        case "toggleTheme":
            {
                const newThemeId = state.theme === "dark" ? "light" : "dark";
                return {
                    ...state,
                    theme: newThemeId
                };
            }
        case "toggleMenu":
            return {
                ...state,
                menuOpen: !state.menuOpen
            };
        default:
            throw new Error();
    }
}


/***/ }),

/***/ 2214:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppContext": () => (/* binding */ AppContext),
/* harmony export */   "MyApp": () => (/* binding */ MyApp),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56);
/* harmony import */ var _components_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4352);
/* harmony import */ var _components_ThemeProvider_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3994);
/* harmony import */ var _components_VisuallyHidden__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2323);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6197);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5480);
/* harmony import */ var _layouts_App_App_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8139);
/* harmony import */ var _layouts_App_App_module_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_layouts_App_App_module_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _layouts_App_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1543);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2362);
/* harmony import */ var _layouts_App_ScrollRestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4189);
/* harmony import */ var _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Navbar__WEBPACK_IMPORTED_MODULE_1__, _components_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_5__, hooks__WEBPACK_IMPORTED_MODULE_6__, _layouts_App_ScrollRestore__WEBPACK_IMPORTED_MODULE_12__, _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_13__]);
([_components_Navbar__WEBPACK_IMPORTED_MODULE_1__, _components_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_5__, hooks__WEBPACK_IMPORTED_MODULE_6__, _layouts_App_ScrollRestore__WEBPACK_IMPORTED_MODULE_12__, _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_10__.createContext)({});
const repoPrompt = ``;
const App = ({ Component , pageProps  })=>{
    const [storedTheme] = (0,hooks__WEBPACK_IMPORTED_MODULE_6__/* .useLocalStorage */ ._)("theme", "dark");
    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useReducer)(_layouts_App_reducer__WEBPACK_IMPORTED_MODULE_7__/* .reducer */ .I, _layouts_App_reducer__WEBPACK_IMPORTED_MODULE_7__/* .initialState */ .E);
    const { route , asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const canonicalRoute = route === "/" ? "" : `${asPath}`;
    (0,hooks__WEBPACK_IMPORTED_MODULE_6__/* .useFoucFix */ .S2)();
    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{
        console.info(`${repoPrompt}\n\n`);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{
        dispatch({
            type: "setTheme",
            value: storedTheme || "dark"
        });
    }, [
        storedTheme
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AppContext.Provider, {
        value: {
            ...state,
            dispatch
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__/* .ThemeProvider */ .f6, {
            themeId: state.theme,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.LazyMotion, {
                features: framer_motion__WEBPACK_IMPORTED_MODULE_5__.domAnimation,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                rel: "canonical",
                                href: `${process.env.NEXT_PUBLIC_WEBSITE_URL}${canonicalRoute}`
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_VisuallyHidden__WEBPACK_IMPORTED_MODULE_4__/* .VisuallyHidden */ .T, {
                            showOnFocus: true,
                            as: "a",
                            className: (_layouts_App_App_module_css__WEBPACK_IMPORTED_MODULE_14___default().skip),
                            href: "#MainContent",
                            children: "Skip to main content"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__/* .Navbar */ .w, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                            className: (_layouts_App_App_module_css__WEBPACK_IMPORTED_MODULE_14___default().app),
                            tabIndex: -1,
                            id: "MainContent",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {
                                exitBeforeEnter: true,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.m.div, {
                                    className: (_layouts_App_App_module_css__WEBPACK_IMPORTED_MODULE_14___default().page),
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    exit: {
                                        opacity: 0
                                    },
                                    transition: {
                                        type: "tween",
                                        ease: "linear",
                                        duration: (0,_utils_style__WEBPACK_IMPORTED_MODULE_11__/* .msToNum */ .zG)(_components_ThemeProvider_theme__WEBPACK_IMPORTED_MODULE_3__/* .tokens.base.durationS */ .T.base.durationS) / 1000,
                                        delay: 0.1
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_App_ScrollRestore__WEBPACK_IMPORTED_MODULE_12__/* .ScrollRestore */ .v, {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                            ...pageProps
                                        })
                                    ]
                                }, route)
                            })
                        })
                    ]
                })
            })
        })
    });
};
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_13__.Analytics, {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BC": () => (/* binding */ media),
/* harmony export */   "Fh": () => (/* binding */ cssProps),
/* harmony export */   "Q1": () => (/* binding */ pxToRem),
/* harmony export */   "Sh": () => (/* binding */ classes),
/* harmony export */   "Zm": () => (/* binding */ rgbToThreeColor),
/* harmony export */   "aU": () => (/* binding */ numToMs),
/* harmony export */   "zG": () => (/* binding */ msToNum)
/* harmony export */ });
/* unused harmony exports pxToNum, numToPx */
/**
 * Media query breakpoints
 */ const media = {
    desktop: 2080,
    laptop: 1680,
    tablet: 1040,
    mobile: 696,
    mobileS: 400
};
/**
 * Convert a px string to a number
 */ const pxToNum = (px)=>Number(px.replace("px", ""));
/**
 * Convert a number to a px string
 */ const numToPx = (num)=>`${num}px`;
/**
 * Convert pixel values to rem for a11y
 */ const pxToRem = (px)=>`${px / 16}rem`;
/**
 * Convert ms token values to a raw numbers for ReactTransitionGroup
 * Transition delay props
 */ const msToNum = (msString)=>Number(msString.replace("ms", ""));
/**
 * Convert a number to an ms string
 */ const numToMs = (num)=>`${num}ms`;
/**
 * Convert an rgb theme property (e.g. rgbBlack: '0 0 0')
 * to values that can be spread into a ThreeJS Color class
 */ const rgbToThreeColor = (rgb)=>rgb?.split(" ").map((value)=>Number(value) / 255) || [];
/**
 * Convert a JS object into `--` prefixed css custom properties.
 * Optionally pass a second param for normal styles
 */ function cssProps(props, style = {}) {
    let result = {};
    const keys = Object.keys(props);
    for (const key of keys){
        let value = props[key];
        if (typeof value === "number" && key === "delay") {
            value = numToMs(value);
        }
        if (typeof value === "number" && key !== "opacity") {
            value = numToPx(value);
        }
        result[`--${key}`] = value;
    }
    return {
        ...result,
        ...style
    };
}
/**
 * Concatenate classNames together
 */ function classes(...classes) {
    return classes.filter(Boolean).join(" ");
}


/***/ }),

/***/ 9272:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/gotham-bold-italic.72cd55d4.woff2";

/***/ }),

/***/ 6434:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/gotham-bold.c081ace9.woff2";

/***/ }),

/***/ 9653:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/gotham-book-italic.30d92fbf.woff2";

/***/ }),

/***/ 3829:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/gotham-book.f0d45f33.woff2";

/***/ }),

/***/ 8039:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/gotham-medium-italic.f83fe298.woff2";

/***/ }),

/***/ 7451:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/gotham-medium.cb181817.woff2";

/***/ }),

/***/ 3210:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/ipa-gothic.a1f5eaef.woff2";

/***/ })

};
;