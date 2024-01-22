exports.id = 564;
exports.ids = [564];
exports.modules = {

/***/ 3502:
/***/ ((module) => {

// Exports
module.exports = {
	"divider": "Divider_divider__R3vqT",
	"line": "Divider_line__bFTLx",
	"notch": "Divider_notch__1kxAj"
};


/***/ }),

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

/***/ 3352:
/***/ ((module) => {

// Exports
module.exports = {
	"image": "Image_image__fhfXL",
	"container": "Image_container__9ry6H",
	"elementWrapper": "Image_elementWrapper__dY5KC",
	"placeholder": "Image_placeholder__rZeKX",
	"element": "Image_element__EpM9I",
	"button": "Image_button__S1k_J"
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

/***/ 3185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i": () => (/* reexport */ Divider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/utils/style.js
var utils_style = __webpack_require__(2362);
// EXTERNAL MODULE: ./src/components/Divider/Divider.module.css
var Divider_module = __webpack_require__(3502);
var Divider_module_default = /*#__PURE__*/__webpack_require__.n(Divider_module);
;// CONCATENATED MODULE: ./src/components/Divider/Divider.js



const Divider = ({ lineWidth , lineHeight , notchWidth , notchHeight , collapseDelay , collapsed , className , style , ...rest })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (0,utils_style/* classes */.Sh)((Divider_module_default()).divider, className),
        style: (0,utils_style/* cssProps */.Fh)({
            lineWidth: lineWidth,
            lineHeight: lineHeight,
            notchWidth: notchWidth,
            notchHeight: notchHeight,
            collapseDelay: (0,utils_style/* numToMs */.aU)(collapseDelay)
        }, style),
        ...rest,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Divider_module_default()).line,
                "data-collapsed": collapsed
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Divider_module_default()).notch,
                "data-collapsed": collapsed,
                style: (0,utils_style/* cssProps */.Fh)({
                    collapseDelay: (0,utils_style/* numToMs */.aU)(collapseDelay + 160)
                })
            })
        ]
    });
Divider.defaultProps = {
    lineWidth: "100%",
    lineHeight: "2px",
    notchWidth: "90px",
    notchHeight: "10px",
    collapsed: false,
    collapseDelay: 0
};

;// CONCATENATED MODULE: ./src/components/Divider/index.js



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

/***/ 9993:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5121);
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1879);
/* harmony import */ var _components_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4352);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5480);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5622);
/* harmony import */ var _utils_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2362);
/* harmony import */ var _Image_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3352);
/* harmony import */ var _Image_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Image_module_css__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Button__WEBPACK_IMPORTED_MODULE_1__, _components_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_4__, hooks__WEBPACK_IMPORTED_MODULE_5__]);
([_components_Button__WEBPACK_IMPORTED_MODULE_1__, _components_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_4__, hooks__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Image = ({ className , style , reveal , delay =0 , raised , src: baseSrc , srcSet , placeholder , ...rest })=>{
    const { 0: loaded , 1: setLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const { themeId  } = (0,_components_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__/* .useTheme */ .Fg)();
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)();
    const src = baseSrc || srcSet?.[0];
    const inViewport = (0,hooks__WEBPACK_IMPORTED_MODULE_5__/* .useInViewport */ .NM)(containerRef, !getIsVideo(src));
    const onLoad = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(()=>{
        setLoaded(true);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_utils_style__WEBPACK_IMPORTED_MODULE_7__/* .classes */ .Sh)((_Image_module_css__WEBPACK_IMPORTED_MODULE_8___default().image), className),
        "data-visible": inViewport || loaded,
        "data-reveal": reveal,
        "data-raised": raised,
        "data-theme": themeId,
        style: (0,_utils_style__WEBPACK_IMPORTED_MODULE_7__/* .cssProps */ .Fh)({
            delay: (0,_utils_style__WEBPACK_IMPORTED_MODULE_7__/* .numToMs */ .aU)(delay)
        }, style),
        ref: containerRef,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ImageElements, {
            delay: delay,
            onLoad: onLoad,
            loaded: loaded,
            inViewport: inViewport,
            reveal: reveal,
            src: src,
            srcSet: srcSet,
            placeholder: placeholder,
            ...rest
        })
    });
};
const ImageElements = ({ onLoad , loaded , inViewport , srcSet , placeholder , delay , src , alt , play =true , restartOnPause , reveal , sizes , noPauseButton , ...rest })=>{
    const reduceMotion = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useReducedMotion)();
    const { 0: showPlaceholder , 1: setShowPlaceholder  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true);
    const { 0: playing , 1: setPlaying  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(!reduceMotion);
    const { 0: videoSrc , 1: setVideoSrc  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();
    const { 0: videoInteracted , 1: setVideoInteracted  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const placeholderRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)();
    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)();
    const isVideo = getIsVideo(src);
    const showFullRes = inViewport;
    const srcSetString = (0,_utils_image__WEBPACK_IMPORTED_MODULE_9__/* .srcSetToString */ .A2)(srcSet);
    const hasMounted = (0,hooks__WEBPACK_IMPORTED_MODULE_5__/* .useHasMounted */ .f3)();
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        const resolveVideoSrc = async ()=>{
            const resolvedVideoSrc = await (0,_utils_image__WEBPACK_IMPORTED_MODULE_9__/* .resolveSrcFromSrcSet */ .Ro)({
                srcSet,
                sizes
            });
            setVideoSrc(resolvedVideoSrc);
        };
        if (isVideo && srcSet) {
            resolveVideoSrc();
        } else if (isVideo) {
            setVideoSrc(src.src);
        }
    }, [
        isVideo,
        sizes,
        src,
        srcSet
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        if (!videoRef.current || !videoSrc) return;
        const playVideo = ()=>{
            setPlaying(true);
            videoRef.current.play();
        };
        const pauseVideo = ()=>{
            setPlaying(false);
            videoRef.current.pause();
        };
        if (!play) {
            pauseVideo();
            if (restartOnPause) {
                videoRef.current.currentTime = 0;
            }
        }
        if (videoInteracted) return;
        if (!inViewport) {
            pauseVideo();
        } else if (inViewport && !reduceMotion && play) {
            playVideo();
        }
    }, [
        inViewport,
        play,
        reduceMotion,
        restartOnPause,
        videoInteracted,
        videoSrc
    ]);
    const togglePlaying = (event)=>{
        event.preventDefault();
        setVideoInteracted(true);
        if (videoRef.current.paused) {
            setPlaying(true);
            videoRef.current.play();
        } else {
            setPlaying(false);
            videoRef.current.pause();
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Image_module_css__WEBPACK_IMPORTED_MODULE_8___default().elementWrapper),
        "data-reveal": reveal,
        "data-visible": inViewport || loaded,
        style: (0,_utils_style__WEBPACK_IMPORTED_MODULE_7__/* .cssProps */ .Fh)({
            delay: (0,_utils_style__WEBPACK_IMPORTED_MODULE_7__/* .numToMs */ .aU)(delay + 1000)
        }),
        children: [
            isVideo && hasMounted && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                        muted: true,
                        loop: true,
                        playsInline: true,
                        className: (_Image_module_css__WEBPACK_IMPORTED_MODULE_8___default().element),
                        "data-loaded": loaded,
                        autoPlay: !reduceMotion,
                        role: "img",
                        onLoadStart: onLoad,
                        src: videoSrc,
                        "aria-label": alt,
                        ref: videoRef,
                        ...rest
                    }),
                    !noPauseButton && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Button__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .z, {
                        className: (_Image_module_css__WEBPACK_IMPORTED_MODULE_8___default().button),
                        onClick: togglePlaying,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icon__WEBPACK_IMPORTED_MODULE_2__/* .Icon */ .J, {
                                icon: playing ? "pause" : "play"
                            }),
                            playing ? "Pause" : "Play"
                        ]
                    })
                ]
            }),
            !isVideo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                className: (_Image_module_css__WEBPACK_IMPORTED_MODULE_8___default().element),
                "data-loaded": loaded,
                onLoad: onLoad,
                decoding: "async",
                src: showFullRes ? src.src : undefined,
                srcSet: showFullRes ? srcSetString : undefined,
                width: src.width,
                height: src.height,
                alt: alt,
                sizes: sizes,
                ...rest
            }),
            showPlaceholder && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                "aria-hidden": true,
                className: (_Image_module_css__WEBPACK_IMPORTED_MODULE_8___default().placeholder),
                "data-loaded": loaded,
                style: (0,_utils_style__WEBPACK_IMPORTED_MODULE_7__/* .cssProps */ .Fh)({
                    delay: (0,_utils_style__WEBPACK_IMPORTED_MODULE_7__/* .numToMs */ .aU)(delay)
                }),
                ref: placeholderRef,
                src: placeholder.src,
                width: placeholder.width,
                height: placeholder.height,
                onTransitionEnd: ()=>setShowPlaceholder(false),
                decoding: "async",
                alt: "",
                role: "presentation"
            })
        ]
    });
};
function getIsVideo(src) {
    return typeof src.src === "string" && src.src.endsWith(".mp4");
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8698:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* reexport safe */ _Image__WEBPACK_IMPORTED_MODULE_0__.E)
/* harmony export */ });
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9993);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Image__WEBPACK_IMPORTED_MODULE_0__]);
_Image__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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



/***/ }),

/***/ 5622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A2": () => (/* binding */ srcSetToString),
/* harmony export */   "Ro": () => (/* binding */ resolveSrcFromSrcSet)
/* harmony export */ });
/* unused harmony exports loadImageFromSrcSet, generateImage */
/**
 * Use the browser's image loading to load an image and
 * grab the `src` it chooses from a `srcSet`
 */ async function loadImageFromSrcSet({ src , srcSet , sizes  }) {
    return new Promise((resolve, reject)=>{
        const srcSetString = srcSetToString(srcSet);
        try {
            if (!src && !srcSet) {
                throw new Error("No image src or srcSet provided");
            }
            let tempImage = new Image();
            if (src) {
                tempImage.src = src;
            }
            if (srcSetString) {
                tempImage.srcset = srcSetString;
            }
            if (sizes) {
                tempImage.sizes = sizes;
            }
            const onLoad = ()=>{
                tempImage.removeEventListener("load", onLoad);
                const source = tempImage.currentSrc;
                tempImage = null;
                resolve(source);
            };
            tempImage.addEventListener("load", onLoad);
        } catch (error) {
            reject(`Error loading ${srcSetString}: ${error}`);
        }
    });
}
/**
 * Convert a `srcSet` array to a plain old `srcSet` string
 */ function srcSetToString(srcSet = []) {
    if (typeof srcSet === "string") {
        return srcSet;
    }
    return srcSet.map((item)=>`${item.src} ${item.width}w`).join(", ");
}
/**
 * Generates a transparent png of a given width and height
 */ async function generateImage(width = 1, height = 1) {
    return new Promise((resolve)=>{
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = width;
        canvas.height = height;
        ctx.fillStyle = "rgba(0, 0, 0, 0)";
        ctx.fillRect(0, 0, width, height);
        canvas.toBlob(async (blob)=>{
            if (!blob) throw new Error("Video thumbnail failed to load");
            const image = URL.createObjectURL(blob);
            canvas.remove();
            resolve(image);
        });
    });
}
/**
 * Use native html image `srcSet` resolution for non-html images
 */ async function resolveSrcFromSrcSet({ srcSet , sizes  }) {
    const stringSrcSet = srcSetToString(srcSet);
    const sources = await Promise.all(stringSrcSet.split(", ").map(async (srcString)=>{
        const [src, width] = srcString.split(" ");
        const size = Number(width.replace("w", ""));
        const image = await generateImage(size);
        return {
            src,
            image,
            width
        };
    }));
    const fakeSrcSet = sources.map(({ image , width  })=>`${image} ${width}`).join(", ");
    const fakeSrc = await loadImageFromSrcSet({
        srcSet: fakeSrcSet,
        sizes
    });
    const output = sources.find((src)=>src.image === fakeSrc);
    return output.src;
}


/***/ })

};
;