exports.id = 293;
exports.ids = [293];
exports.modules = {

/***/ 2198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgArrowDown = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  stroke: "currentColor",
  width: 43,
  height: 15,
  viewBox: "0 0 43 15"
}, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M1 1l20.5 12L42 1",
  strokeWidth: 2,
  fill: "none"
})));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgArrowDown);

/***/ }),

/***/ 4619:
/***/ ((module) => {

// Exports
module.exports = {
	"code": "Code_code__RSNfC",
	"actions": "Code_actions__Zoqye",
	"copyIcon": "Code_copyIcon__gdLmk",
	"lang": "Code_lang__3Kuby"
};


/***/ }),

/***/ 3718:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "List_list__0oF1W",
	"item": "List_item__t5SQz"
};


/***/ }),

/***/ 8603:
/***/ ((module) => {

// Exports
module.exports = {
	"post": "Post_post__fWn0d",
	"header": "Post_header__Sf1pZ",
	"headerText": "Post_headerText__gC9Yl",
	"date": "Post_date__InVhZ",
	"dateText": "Post_dateText__H5Zzn",
	"titleWordWrapper": "Post_titleWordWrapper__yKhUz",
	"titleWord": "Post_titleWord__SU5zc",
	"postTitleWord": "Post_postTitleWord__XAuou",
	"banner": "Post_banner__OU9ZO",
	"bannerImage": "Post_bannerImage__MT3ht",
	"bannerImageBlur": "Post_bannerImageBlur__JbMhH",
	"details": "Post_details__sLHn9",
	"arrow": "Post_arrow__GnDPy",
	"timecode": "Post_timecode__QfQ7k",
	"wrapper": "Post_wrapper__FLc1v",
	"content": "Post_content__GI1_2"
};


/***/ }),

/***/ 749:
/***/ ((module) => {

// Exports
module.exports = {
	"heading": "PostMarkdown_heading__oOjES",
	"paragraph": "PostMarkdown_paragraph__JJW6d",
	"list": "PostMarkdown_list___gY0U",
	"image": "PostMarkdown_image__58Jo8",
	"headingLink": "PostMarkdown_headingLink__urh9O",
	"code": "PostMarkdown_code__hwEir",
	"pre": "PostMarkdown_pre__MgdYF",
	"hr": "PostMarkdown_hr__F4uZ6",
	"blockquote": "PostMarkdown_blockquote__C9__4",
	"strong": "PostMarkdown_strong__AlJE_",
	"embed": "PostMarkdown_embed__aO_uG"
};


/***/ }),

/***/ 3034:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ Code)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5121);
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1879);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7346);
/* harmony import */ var _components_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4352);
/* harmony import */ var _components_Transition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8802);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Code_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4619);
/* harmony import */ var _Code_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Code_module_css__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Button__WEBPACK_IMPORTED_MODULE_1__, _components_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__, _components_Transition__WEBPACK_IMPORTED_MODULE_5__]);
([_components_Button__WEBPACK_IMPORTED_MODULE_1__, _components_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__, _components_Transition__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const Code = (props)=>{
    const { 0: copied , 1: setCopied  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const theme = (0,_components_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__/* .useTheme */ .Fg)();
    const elementRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)();
    const copyTimeout = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)();
    const lang = props.className?.split("-")[1];
    const handleCopy = ()=>{
        clearTimeout(copyTimeout);
        navigator.clipboard.writeText(elementRef.current.textContent);
        setCopied(true);
        setTimeout(()=>{
            setCopied(false);
        }, 2000);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Code_module_css__WEBPACK_IMPORTED_MODULE_7___default().code),
        "data-theme": theme.themeId,
        children: [
            !!lang && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_3__/* .Text */ .x, {
                secondary: true,
                size: "s",
                className: (_Code_module_css__WEBPACK_IMPORTED_MODULE_7___default().lang),
                children: lang
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                ref: elementRef,
                ...props
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Code_module_css__WEBPACK_IMPORTED_MODULE_7___default().actions),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .z, {
                    iconOnly: true,
                    onClick: handleCopy,
                    "aria-label": "Copy",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: (_Code_module_css__WEBPACK_IMPORTED_MODULE_7___default().copyIcon),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Transition__WEBPACK_IMPORTED_MODULE_5__/* .Transition */ .u, {
                                in: !copied,
                                children: (visible)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icon__WEBPACK_IMPORTED_MODULE_2__/* .Icon */ .J, {
                                        icon: "copy",
                                        "data-visible": visible
                                    })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Transition__WEBPACK_IMPORTED_MODULE_5__/* .Transition */ .u, {
                                in: copied,
                                children: (visible)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icon__WEBPACK_IMPORTED_MODULE_2__/* .Icon */ .J, {
                                        icon: "check",
                                        "data-visible": visible
                                    })
                            })
                        ]
                    })
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9277:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* reexport safe */ _Code__WEBPACK_IMPORTED_MODULE_0__.E)
/* harmony export */ });
/* harmony import */ var _Code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3034);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Code__WEBPACK_IMPORTED_MODULE_0__]);
_Code__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": () => (/* reexport */ List),
  "H": () => (/* reexport */ ListItem)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/utils/style.js
var style = __webpack_require__(2362);
// EXTERNAL MODULE: ./src/components/List/List.module.css
var List_module = __webpack_require__(3718);
var List_module_default = /*#__PURE__*/__webpack_require__.n(List_module);
;// CONCATENATED MODULE: ./src/components/List/List.js



const List = ({ ordered , children , className , ...rest })=>{
    const Element = ordered ? "ol" : "ul";
    return /*#__PURE__*/ jsx_runtime_.jsx(Element, {
        className: (0,style/* classes */.Sh)((List_module_default()).list, className),
        ...rest,
        children: children
    });
};
const ListItem = ({ children , ...rest })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: (List_module_default()).item,
        ...rest,
        children: children
    });
};

;// CONCATENATED MODULE: ./src/components/List/index.js



/***/ }),

/***/ 3768:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ Post)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_arrow_down_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2198);
/* harmony import */ var _components_Divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3185);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5192);
/* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2221);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8698);
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5633);
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6602);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7346);
/* harmony import */ var _components_ThemeProvider_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3994);
/* harmony import */ var _components_Transition__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8802);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5480);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_clamp__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2156);
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7715);
/* harmony import */ var _utils_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2362);
/* harmony import */ var _Post_module_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8603);
/* harmony import */ var _Post_module_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_Post_module_css__WEBPACK_IMPORTED_MODULE_17__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Image__WEBPACK_IMPORTED_MODULE_5__, _components_Transition__WEBPACK_IMPORTED_MODULE_10__, _hooks__WEBPACK_IMPORTED_MODULE_11__]);
([_components_Image__WEBPACK_IMPORTED_MODULE_5__, _components_Transition__WEBPACK_IMPORTED_MODULE_10__, _hooks__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const Post = ({ children , title , date , abstract , banner , timecode , ogImage  })=>{
    const scrollToHash = (0,_hooks__WEBPACK_IMPORTED_MODULE_11__/* .useScrollToHash */ .jh)();
    const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_13__.useRef)();
    const { 0: dateTime , 1: setDateTime  } = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(()=>{
        setDateTime((0,_utils_date__WEBPACK_IMPORTED_MODULE_15__/* .formatDate */ .p)(date));
    }, [
        date,
        dateTime
    ]);
    (0,_hooks__WEBPACK_IMPORTED_MODULE_11__/* .useParallax */ .YT)(0.004, (value)=>{
        if (!imageRef.current) return;
        imageRef.current.style.setProperty("--blurOpacity", (0,_utils_clamp__WEBPACK_IMPORTED_MODULE_16__/* .clamp */ .u)(value, 0, 1));
    });
    const handleScrollIndicatorClick = (event)=>{
        event.preventDefault();
        scrollToHash(event.currentTarget.href);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_17___default().post),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Meta__WEBPACK_IMPORTED_MODULE_6__/* .Meta */ .h, {
                title: title,
                prefix: "",
                description: abstract,
                ogImage: ogImage
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Section__WEBPACK_IMPORTED_MODULE_7__/* .Section */ .$, {
                children: [
                    banner && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_17___default().banner),
                        ref: imageRef,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_17___default().bannerImage),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_5__/* .Image */ .E, {
                                    role: "presentation",
                                    src: {
                                        src: banner
                                    },
                                    placeholder: {
                                        src: `${banner.split(".")[0]}-placeholder.jpg`
                                    },
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_17___default().bannerImageBlur),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_5__/* .Image */ .E, {
                                    role: "presentation",
                                    src: {
                                        src: `${banner.split(".")[0]}-placeholder.jpg`
                                    },
                                    placeholder: {
                                        src: `${banner.split(".")[0]}-placeholder.jpg`
                                    },
                                    alt: ""
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                        className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_17___default().header),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_17___default().headerText),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Transition__WEBPACK_IMPORTED_MODULE_10__/* .Transition */ .u, {
                                    in: true,
                                    timeout: (0,_utils_style__WEBPACK_IMPORTED_MODULE_14__/* .msToNum */ .zG)(_components_ThemeProvider_theme__WEBPACK_IMPORTED_MODULE_9__/* .tokens.base.durationM */ .T.base.durationM),
                                    children: (visible)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_17___default().date),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Divider__WEBPACK_IMPORTED_MODULE_2__/* .Divider */ .i, {
                                                    notchWidth: "64px",
                                                    notchHeight: "8px",
                                                    collapsed: !visible
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .x, {
                                                    className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_17___default().dateText),
                                                    "data-visible": visible,
                                                    children: dateTime
                                                })
                                            ]
                                        })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Heading__WEBPACK_IMPORTED_MODULE_4__/* .Heading */ .X, {
                                    level: 2,
                                    as: "h1",
                                    className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_17___default().title),
                                    "aria-label": title,
                                    children: title.split(" ").map((word, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_17___default().titleWordWrapper),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_17___default().titleWord),
                                                style: (0,_utils_style__WEBPACK_IMPORTED_MODULE_14__/* .cssProps */ .Fh)({
                                                    delay: (0,_utils_style__WEBPACK_IMPORTED_MODULE_14__/* .numToMs */ .aU)(index * 100 + 100)
                                                }),
                                                index: index,
                                                children: [
                                                    word,
                                                    index !== title.split(" ").length - 1 ? " " : ""
                                                ]
                                            })
                                        }, `${word}-${index}`))
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_17___default().details),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_17___default().timecode),
                                        children: timecode
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Section__WEBPACK_IMPORTED_MODULE_7__/* .Section */ .$, {
                className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_17___default().wrapper),
                id: "postContent",
                tabIndex: -1,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .x, {
                    as: "div",
                    size: "l",
                    className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_17___default().content),
                    children: children
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_3__/* .Footer */ .$, {})
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2803:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ postMarkdown)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9277);
/* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2221);
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1879);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(270);
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5149);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7346);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _PostMarkdown_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(749);
/* harmony import */ var _PostMarkdown_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_PostMarkdown_module_css__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Code__WEBPACK_IMPORTED_MODULE_1__]);
_components_Code__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const PostHeadingLink = ({ id  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        className: (_PostMarkdown_module_css__WEBPACK_IMPORTED_MODULE_8___default().headingLink),
        href: `#${id}`,
        "aria-label": "Link to heading",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icon__WEBPACK_IMPORTED_MODULE_3__/* .Icon */ .J, {
            icon: "link"
        })
    });
};
const PostH1 = ({ children , id , ...rest })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Heading__WEBPACK_IMPORTED_MODULE_2__/* .Heading */ .X, {
        className: (_PostMarkdown_module_css__WEBPACK_IMPORTED_MODULE_8___default().heading),
        id: id,
        level: 2,
        as: "h1",
        ...rest,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PostHeadingLink, {
                id: id
            }),
            children
        ]
    });
const PostH2 = ({ children , id , ...rest })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Heading__WEBPACK_IMPORTED_MODULE_2__/* .Heading */ .X, {
        className: (_PostMarkdown_module_css__WEBPACK_IMPORTED_MODULE_8___default().heading),
        id: id,
        level: 3,
        as: "h2",
        ...rest,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PostHeadingLink, {
                id: id
            }),
            children
        ]
    });
const PostH3 = ({ children , id , ...rest })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Heading__WEBPACK_IMPORTED_MODULE_2__/* .Heading */ .X, {
        className: (_PostMarkdown_module_css__WEBPACK_IMPORTED_MODULE_8___default().heading),
        id: id,
        level: 4,
        as: "h3",
        ...rest,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PostHeadingLink, {
                id: id
            }),
            children
        ]
    });
const PostH4 = ({ children , id , ...rest })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Heading__WEBPACK_IMPORTED_MODULE_2__/* .Heading */ .X, {
        className: (_PostMarkdown_module_css__WEBPACK_IMPORTED_MODULE_8___default().heading),
        id: id,
        level: 5,
        as: "h4",
        ...rest,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PostHeadingLink, {
                id: id
            }),
            children
        ]
    });
const PostParagraph = ({ children , ...rest })=>{
    const hasSingleChild = react__WEBPACK_IMPORTED_MODULE_7__.Children.count(children) === 1;
    const firstChild = react__WEBPACK_IMPORTED_MODULE_7__.Children.toArray(children)[0];
    // Prevent `img` being wrapped in `p`
    if (hasSingleChild && firstChild.type === PostImage) {
        return children;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_6__/* .Text */ .x, {
        className: (_PostMarkdown_module_css__WEBPACK_IMPORTED_MODULE_8___default().paragraph),
        size: "l",
        as: "p",
        ...rest,
        children: children
    });
};
const PostLink = ({ ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .r, {
        ...props
    });
const PostUl = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_List__WEBPACK_IMPORTED_MODULE_5__/* .List */ .a, {
        className: (_PostMarkdown_module_css__WEBPACK_IMPORTED_MODULE_8___default().list),
        ...props
    });
};
const PostOl = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_List__WEBPACK_IMPORTED_MODULE_5__/* .List */ .a, {
        className: (_PostMarkdown_module_css__WEBPACK_IMPORTED_MODULE_8___default().list),
        ordered: true,
        ...props
    });
};
const PostLi = ({ children , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_List__WEBPACK_IMPORTED_MODULE_5__/* .ListItem */ .H, {
        ...props,
        children: children
    });
};
const PostCode = ({ children , ...rest })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
        className: (_PostMarkdown_module_css__WEBPACK_IMPORTED_MODULE_8___default().code),
        ...rest,
        children: children
    });
const PostPre = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_PostMarkdown_module_css__WEBPACK_IMPORTED_MODULE_8___default().pre),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Code__WEBPACK_IMPORTED_MODULE_1__/* .Code */ .E, {
            ...props
        })
    });
};
const PostBlockquote = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("blockquote", {
        className: (_PostMarkdown_module_css__WEBPACK_IMPORTED_MODULE_8___default().blockquote),
        ...props
    });
};
const PostHr = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
        className: (_PostMarkdown_module_css__WEBPACK_IMPORTED_MODULE_8___default().hr),
        ...props
    });
};
const PostStrong = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
        className: (_PostMarkdown_module_css__WEBPACK_IMPORTED_MODULE_8___default().strong),
        ...props
    });
};
const PostImage = ({ src , alt , width , height , ...rest })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        className: (_PostMarkdown_module_css__WEBPACK_IMPORTED_MODULE_8___default().image),
        src: src,
        decoding: "async",
        loading: "lazy",
        alt: alt,
        width: width,
        height: height,
        ...rest
    });
};
const Embed = ({ src  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_PostMarkdown_module_css__WEBPACK_IMPORTED_MODULE_8___default().embed),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
            src: src,
            loading: "lazy"
        })
    });
};
const postMarkdown = {
    h1: PostH1,
    h2: PostH2,
    h3: PostH3,
    h4: PostH4,
    p: PostParagraph,
    a: PostLink,
    ul: PostUl,
    ol: PostOl,
    li: PostLi,
    pre: PostPre,
    code: PostCode,
    blockquote: PostBlockquote,
    hr: PostHr,
    img: PostImage,
    strong: PostStrong,
    Embed
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4293:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* reexport safe */ _Post__WEBPACK_IMPORTED_MODULE_0__.S),
/* harmony export */   "e": () => (/* reexport safe */ _PostMarkdown__WEBPACK_IMPORTED_MODULE_1__.e)
/* harmony export */ });
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3768);
/* harmony import */ var _PostMarkdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2803);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Post__WEBPACK_IMPORTED_MODULE_0__, _PostMarkdown__WEBPACK_IMPORTED_MODULE_1__]);
([_Post__WEBPACK_IMPORTED_MODULE_0__, _PostMarkdown__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ clamp)
/* harmony export */ });
const clamp = (number, boundOne, boundTwo)=>{
    if (!boundTwo) {
        return Math.max(number, boundOne) === boundOne ? number : boundOne;
    } else if (Math.min(number, boundOne) === number) {
        return boundOne;
    } else if (Math.max(number, boundTwo) === number) {
        return boundTwo;
    }
    return number;
};


/***/ })

};
;