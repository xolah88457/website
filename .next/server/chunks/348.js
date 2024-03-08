exports.id = 348;
exports.ids = [348];
exports.modules = {

/***/ 4051:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__nKPS_",
	"link": "Footer_link__2Y2qR",
	"date": "Footer_date__d0nD9"
};


/***/ }),

/***/ 5597:
/***/ ((module) => {

// Exports
module.exports = {
	"heading": "Heading_heading__209rB"
};


/***/ }),

/***/ 767:
/***/ ((module) => {

// Exports
module.exports = {
	"link": "Link_link__1F_mp"
};


/***/ }),

/***/ 8983:
/***/ ((module) => {

// Exports
module.exports = {
	"section": "Section_section__FuI7l"
};


/***/ }),

/***/ 5192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* reexport */ Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/Link/index.js + 1 modules
var Link = __webpack_require__(270);
// EXTERNAL MODULE: ./src/components/Text/index.js + 1 modules
var Text = __webpack_require__(7346);
// EXTERNAL MODULE: ./src/utils/style.js
var style = __webpack_require__(2362);
// EXTERNAL MODULE: ./src/components/Footer/Footer.module.css
var Footer_module = __webpack_require__(4051);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./src/components/Footer/Footer.js





const Footer = ({ className  })=>/*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: (0,style/* classes */.Sh)((Footer_module_default()).footer, className),
        children: /*#__PURE__*/ jsx_runtime_.jsx(Text/* Text */.x, {
            size: "s",
            align: "center",
            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (Footer_module_default()).date,
                children: `© ${new Date().getFullYear()} Ryan Nasiri.`
            })
        })
    });

;// CONCATENATED MODULE: ./src/components/Footer/index.js



/***/ }),

/***/ 2221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X": () => (/* reexport */ Heading)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/utils/style.js
var style = __webpack_require__(2362);
// EXTERNAL MODULE: ./src/components/Heading/Heading.module.css
var Heading_module = __webpack_require__(5597);
var Heading_module_default = /*#__PURE__*/__webpack_require__.n(Heading_module);
;// CONCATENATED MODULE: ./src/components/Heading/Heading.js




const Heading = ({ children , level =1 , as , align ="auto" , weight ="medium" , className , ...rest })=>{
    const clampedLevel = Math.min(Math.max(level, 0), 5);
    const Component = as || `h${Math.max(clampedLevel, 1)}`;
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            className: (0,style/* classes */.Sh)((Heading_module_default()).heading, className),
            "data-align": align,
            "data-weight": weight,
            "data-level": clampedLevel,
            ...rest,
            children: children
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Heading/index.js



/***/ }),

/***/ 270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "r": () => (/* reexport */ Link)
});

// UNUSED EXPORTS: LinkContent

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/utils/style.js
var style = __webpack_require__(2362);
// EXTERNAL MODULE: ./src/components/Link/Link.module.css
var Link_module = __webpack_require__(767);
var Link_module_default = /*#__PURE__*/__webpack_require__.n(Link_module);
;// CONCATENATED MODULE: ./src/components/Link/Link.js





// File extensions that can be linked to
const VALID_EXT = [
    "txt",
    "png",
    "jpg"
];
function isAnchor(href) {
    const isValidExtension = VALID_EXT.includes(href?.split(".").pop());
    return href?.includes("://") || href?.[0] === "#" || isValidExtension;
}
const Link = /*#__PURE__*/ (0,external_react_.forwardRef)(({ href , ...rest }, ref)=>{
    if (isAnchor(href)) {
        return /*#__PURE__*/ jsx_runtime_.jsx(LinkContent, {
            href: href,
            ref: ref,
            ...rest
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        passHref: true,
        href: href,
        scroll: false,
        children: /*#__PURE__*/ jsx_runtime_.jsx(LinkContent, {
            ref: ref,
            ...rest
        })
    });
});
const LinkContent = /*#__PURE__*/ (0,external_react_.forwardRef)(({ rel , target , children , secondary , className , href , ...rest }, ref)=>{
    const isExternal = href?.includes("://");
    const relValue = rel || (isExternal ? "noreferrer noopener" : undefined);
    const targetValue = target || (isExternal ? "_blank" : undefined);
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        className: (0,style/* classes */.Sh)((Link_module_default()).link, className),
        "data-secondary": secondary,
        rel: relValue,
        href: href,
        target: targetValue,
        ref: ref,
        ...rest,
        children: children
    });
});

;// CONCATENATED MODULE: ./src/components/Link/index.js



/***/ }),

/***/ 6602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* reexport */ Section)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/utils/style.js
var style = __webpack_require__(2362);
// EXTERNAL MODULE: ./src/components/Section/Section.module.css
var Section_module = __webpack_require__(8983);
var Section_module_default = /*#__PURE__*/__webpack_require__.n(Section_module);
;// CONCATENATED MODULE: ./src/components/Section/Section.js




const Section = /*#__PURE__*/ (0,external_react_.forwardRef)(({ as: Component = "div" , children , className , ...rest }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        className: (0,style/* classes */.Sh)((Section_module_default()).section, className),
        ref: ref,
        ...rest,
        children: children
    }));

;// CONCATENATED MODULE: ./src/components/Section/index.js



/***/ })

};
;