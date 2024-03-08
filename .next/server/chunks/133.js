exports.id = 133;
exports.ids = [133];
exports.modules = {

/***/ 1646:
/***/ ((module) => {

// Exports
module.exports = {
	"text": "DecoderText_text__ZFBnw",
	"glyph": "DecoderText_glyph__vCP7h",
	"value": "DecoderText_value__DIA5G"
};


/***/ }),

/***/ 1934:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ DecoderText)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_VisuallyHidden__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2323);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_delay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9569);
/* harmony import */ var utils_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2362);
/* harmony import */ var _DecoderText_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1646);
/* harmony import */ var _DecoderText_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_DecoderText_module_css__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







// prettier-ignore
const glyphs = [
    "ア",
    "イ",
    "ウ",
    "エ",
    "オ",
    "カ",
    "キ",
    "ク",
    "ケ",
    "コ",
    "サ",
    "シ",
    "ス",
    "セ",
    "ソ",
    "タ",
    "チ",
    "ツ",
    "テ",
    "ト",
    "ナ",
    "ニ",
    "ヌ",
    "ネ",
    "ノ",
    "ハ",
    "ヒ",
    "フ",
    "ヘ",
    "ホ",
    "マ",
    "ミ",
    "ム",
    "メ",
    "モ",
    "ヤ",
    "ユ",
    "ヨ",
    "ー",
    "ラ",
    "リ",
    "ル",
    "レ",
    "ロ",
    "ワ",
    "ヰ",
    "ヱ",
    "ヲ",
    "ン",
    "ガ",
    "ギ",
    "グ",
    "ゲ",
    "ゴ",
    "ザ",
    "ジ",
    "ズ",
    "ゼ",
    "ゾ",
    "ダ",
    "ヂ",
    "ヅ",
    "デ",
    "ド",
    "バ",
    "ビ",
    "ブ",
    "ベ",
    "ボ",
    "パ",
    "ピ",
    "プ",
    "ペ",
    "ポ", 
];
const CharType = {
    Glyph: "glyph",
    Value: "value"
};
function shuffle(content, output, position) {
    return content.map((value, index)=>{
        if (index < position) {
            return {
                type: CharType.Value,
                value
            };
        }
        if (position % 1 < 0.5) {
            const rand = Math.floor(Math.random() * glyphs.length);
            return {
                type: CharType.Glyph,
                value: glyphs[rand]
            };
        }
        return {
            type: CharType.Glyph,
            value: output[index].value
        };
    });
}
const DecoderText = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(({ text , start =true , delay: startDelay = 0 , className , ...rest })=>{
    const output = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)([
        {
            type: CharType.Glyph,
            value: ""
        }
    ]);
    const container = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
    const reduceMotion = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useReducedMotion)();
    const decoderSpring = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useSpring)(0, {
        stiffness: 8,
        damping: 5
    });
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const containerInstance = container.current;
        const content = text.split("");
        let animation;
        const renderOutput = ()=>{
            const characterMap = output.current.map((item)=>{
                return `<span class="${(_DecoderText_module_css__WEBPACK_IMPORTED_MODULE_5___default())[item.type]}">${item.value}</span>`;
            });
            containerInstance.innerHTML = characterMap.join("");
        };
        const unsubscribeSpring = decoderSpring.onChange((value)=>{
            output.current = shuffle(content, output.current, value);
            renderOutput();
        });
        const startSpring = async ()=>{
            await (0,utils_delay__WEBPACK_IMPORTED_MODULE_6__/* .delay */ .g)(startDelay);
            decoderSpring.set(content.length);
        };
        if (start && !animation && !reduceMotion) {
            startSpring();
        }
        if (reduceMotion) {
            output.current = content.map((value, index)=>({
                    type: CharType.Value,
                    value: content[index]
                }));
            renderOutput();
        }
        return ()=>{
            unsubscribeSpring?.();
        };
    }, [
        decoderSpring,
        reduceMotion,
        start,
        startDelay,
        text
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        className: (0,utils_style__WEBPACK_IMPORTED_MODULE_4__/* .classes */ .Sh)((_DecoderText_module_css__WEBPACK_IMPORTED_MODULE_5___default().text), className),
        ...rest,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_VisuallyHidden__WEBPACK_IMPORTED_MODULE_1__/* .VisuallyHidden */ .T, {
                className: (_DecoderText_module_css__WEBPACK_IMPORTED_MODULE_5___default().label),
                children: text
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                "aria-hidden": true,
                className: (_DecoderText_module_css__WEBPACK_IMPORTED_MODULE_5___default().content),
                ref: container
            })
        ]
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2133:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* reexport safe */ _DecoderText__WEBPACK_IMPORTED_MODULE_0__.V)
/* harmony export */ });
/* harmony import */ var _DecoderText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1934);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_DecoderText__WEBPACK_IMPORTED_MODULE_0__]);
_DecoderText__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ delay)
/* harmony export */ });
async function delay(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}


/***/ })

};
;