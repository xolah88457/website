"use strict";
exports.id = 584;
exports.ids = [584];
exports.modules = {

/***/ 777:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ WordRotate)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const CYCLES_PER_LETTER = 10;
const SHUFFLE_TIME = 30;
const CHARS = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨーラリルレロワヰヱヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ";
const WordRotate = (props)=>{
    // Ensure that TARGET_TEXT is always a string
    const { TARGET_TEXT  } = props;
    const intervalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: text , 1: setText  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(TARGET_TEXT);
    const scramble = ()=>{
        let pos = 0;
        intervalRef.current = setInterval(()=>{
            const scrambled = TARGET_TEXT.split("").map((char, index)=>{
                if (pos / CYCLES_PER_LETTER > index) {
                    return char;
                }
                const randomCharIndex = Math.floor(Math.random() * CHARS.length);
                const randomChar = CHARS[randomCharIndex];
                return randomChar;
            }).join("");
            setText(scrambled);
            pos++;
            if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
                stopScramble();
            }
        }, SHUFFLE_TIME);
    };
    const stopScramble = ()=>{
        clearInterval(intervalRef.current);
        setText(TARGET_TEXT);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        scramble();
        const timeoutId = setTimeout(stopScramble, 5000);
        // Clear the interval and timeout when the component unmounts
        return ()=>{
            clearInterval(intervalRef.current);
            clearTimeout(timeoutId);
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.button, {
        whileHover: {
            scale: 1.025
        },
        whileTap: {
            scale: 0.975
        },
        style: {
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    position: "relative",
                    zIndex: 10,
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: text
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {
                initial: {
                    y: "100%"
                },
                animate: {
                    y: "-100%"
                },
                transition: {
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 1,
                    ease: "linear"
                },
                style: {
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                    transform: "scale(1.25)",
                    backgroundImage: "linear-gradient(to top, rgba(99, 102, 241, 0) 40%, rgba(99, 102, 241, 1) 50%, rgba(99, 102, 241, 0) 60%)",
                    opacity: 0,
                    transition: "opacity 300ms linear"
                }
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1584:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* reexport safe */ _WordRotate__WEBPACK_IMPORTED_MODULE_0__.h)
/* harmony export */ });
/* harmony import */ var _WordRotate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(777);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_WordRotate__WEBPACK_IMPORTED_MODULE_0__]);
_WordRotate__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;