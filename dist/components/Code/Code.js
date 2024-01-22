"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Code = void 0;
var _Button = require("../../components/Button");
var _Icon = require("../../components/Icon");
var _Text = require("../../components/Text");
var _ThemeProvider = require("../../components/ThemeProvider");
var _Transition = require("../../components/Transition");
var _react = require("react");
var _CodeModule = _interopRequireDefault(require("./Code.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Code = props => {
  const [copied, setCopied] = (0, _react.useState)(false);
  const theme = (0, _ThemeProvider.useTheme)();
  const elementRef = (0, _react.useRef)();
  const copyTimeout = (0, _react.useRef)();
  const lang = props.className?.split('-')[1];
  const handleCopy = () => {
    clearTimeout(copyTimeout);
    navigator.clipboard.writeText(elementRef.current.textContent);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: _CodeModule.default.code,
    "data-theme": theme.themeId
  }, !!lang && /*#__PURE__*/React.createElement(_Text.Text, {
    secondary: true,
    size: "s",
    className: _CodeModule.default.lang
  }, lang), /*#__PURE__*/React.createElement("pre", _extends({
    ref: elementRef
  }, props)), /*#__PURE__*/React.createElement("div", {
    className: _CodeModule.default.actions
  }, /*#__PURE__*/React.createElement(_Button.Button, {
    iconOnly: true,
    onClick: handleCopy,
    "aria-label": "Copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: _CodeModule.default.copyIcon
  }, /*#__PURE__*/React.createElement(_Transition.Transition, {
    in: !copied
  }, visible => /*#__PURE__*/React.createElement(_Icon.Icon, {
    icon: "copy",
    "data-visible": visible
  })), /*#__PURE__*/React.createElement(_Transition.Transition, {
    in: copied
  }, visible => /*#__PURE__*/React.createElement(_Icon.Icon, {
    icon: "check",
    "data-visible": visible
  }))))));
};
exports.Code = Code;