"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DecoderText = void 0;
var _VisuallyHidden = require("../../components/VisuallyHidden");
var _framerMotion = require("framer-motion");
var _react = require("react");
var _delay = require("utils/delay");
var _style = require("utils/style");
var _DecoderTextModule = _interopRequireDefault(require("./DecoderText.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
// prettier-ignore
const glyphs = ['ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ', 'シ', 'ス', 'セ', 'ソ', 'タ', 'チ', 'ツ', 'テ', 'ト', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ', 'ヒ', 'フ', 'ヘ', 'ホ', 'マ', 'ミ', 'ム', 'メ', 'モ', 'ヤ', 'ユ', 'ヨ', 'ー', 'ラ', 'リ', 'ル', 'レ', 'ロ', 'ワ', 'ヰ', 'ヱ', 'ヲ', 'ン', 'ガ', 'ギ', 'グ', 'ゲ', 'ゴ', 'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ', 'ダ', 'ヂ', 'ヅ', 'デ', 'ド', 'バ', 'ビ', 'ブ', 'ベ', 'ボ', 'パ', 'ピ', 'プ', 'ペ', 'ポ'];
const CharType = {
  Glyph: 'glyph',
  Value: 'value'
};
function shuffle(content, output, position) {
  return content.map((value, index) => {
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
const DecoderText = exports.DecoderText = /*#__PURE__*/(0, _react.memo)(({
  text,
  start = true,
  delay: startDelay = 0,
  className,
  ...rest
}) => {
  const output = (0, _react.useRef)([{
    type: CharType.Glyph,
    value: ''
  }]);
  const container = (0, _react.useRef)();
  const reduceMotion = (0, _framerMotion.useReducedMotion)();
  const decoderSpring = (0, _framerMotion.useSpring)(0, {
    stiffness: 8,
    damping: 5
  });
  (0, _react.useEffect)(() => {
    const containerInstance = container.current;
    const content = text.split('');
    let animation;
    const renderOutput = () => {
      const characterMap = output.current.map(item => {
        return `<span class="${_DecoderTextModule.default[item.type]}">${item.value}</span>`;
      });
      containerInstance.innerHTML = characterMap.join('');
    };
    const unsubscribeSpring = decoderSpring.onChange(value => {
      output.current = shuffle(content, output.current, value);
      renderOutput();
    });
    const startSpring = async () => {
      await (0, _delay.delay)(startDelay);
      decoderSpring.set(content.length);
    };
    if (start && !animation && !reduceMotion) {
      startSpring();
    }
    if (reduceMotion) {
      output.current = content.map((value, index) => ({
        type: CharType.Value,
        value: content[index]
      }));
      renderOutput();
    }
    return () => {
      unsubscribeSpring?.();
    };
  }, [decoderSpring, reduceMotion, start, startDelay, text]);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: (0, _style.classes)(_DecoderTextModule.default.text, className)
  }, rest), /*#__PURE__*/React.createElement(_VisuallyHidden.VisuallyHidden, {
    className: _DecoderTextModule.default.label
  }, text), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    className: _DecoderTextModule.default.content,
    ref: container
  }));
});