"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Monogram = void 0;
var _react = require("react");
var _style = require("../../utils/style");
var _MonogramModule = _interopRequireDefault(require("./Monogram.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Monogram = exports.Monogram = /*#__PURE__*/(0, _react.forwardRef)(({
  highlight,
  className,
  ...props
}, ref) => {
  const id = (0, _react.useId)();
  const clipId = `${id}monogram-clip`;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    version: "1.1",
    "aria-hidden": true,
    className: (0, _style.classes)(_MonogramModule.default.monogram, className),
    ref: ref
  }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: clipId
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15.5 5h3v2.25h11V5h3v2.25h9.75V10H32.5v1.5h-3V10h-11v1.5h-3V10H6l-.25-.25v-2.5h9.75Zm-6.25 8h30v8.25h-30ZM12 15.25V19h6.25v-3.75Zm9 0V19h6.25v-3.75Zm9 0V19h6.25l.25-.25V15.5l-.25-.25ZM6.75 23.5H41.5V30h-3v-4.25L9.75 26l-.25 4H6.75Z",
    stroke: "none",
    fill: "#fcfcfc",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m20.75 26.25 2.75.5-.5 1-1.75 1.5L36 29.5v2.25L34.5 34 33 35.75 29.75 38l-4.25 2-5.25 1.5-5.5 1-4.25.5h-2l-1.25-2.5 7.25-.75 5.5-1 .5-.25-2.5-1.75-2-1.25.5-1 1.25-1 4 2.25 2.25 1.5 1.5-.25 4-2 2.5-2.25.5-.5H16.75l-4.25 2-1.75.25-1.5-2 2.25-1 4-1.75 3.75-2.25Z",
    stroke: "none",
    fill: "#fcfcfc",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("rect", {
    clipPath: `url(#${clipId})`,
    width: "100%",
    height: "100%"
  }), highlight && /*#__PURE__*/React.createElement("g", {
    clipPath: `url(#${clipId})`
  }, /*#__PURE__*/React.createElement("rect", {
    className: _MonogramModule.default.highlight,
    width: "100%",
    height: "100%"
  })));
});