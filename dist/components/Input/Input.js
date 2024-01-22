"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;
var _Icon = require("../../components/Icon");
var _theme = require("../../components/ThemeProvider/theme");
var _Transition = require("../../components/Transition");
var _react = require("react");
var _style = require("../../utils/style");
var _InputModule = _interopRequireDefault(require("./Input.module.css"));
var _TextArea = require("./TextArea");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Input = ({
  id,
  label,
  value,
  multiline,
  className,
  style,
  error,
  onBlur,
  autoComplete,
  required,
  maxLength,
  type,
  onChange,
  ...rest
}) => {
  const [focused, setFocused] = (0, _react.useState)(false);
  const generatedId = (0, _react.useId)();
  const errorRef = (0, _react.useRef)();
  const inputId = id || `${generatedId}input`;
  const labelId = `${inputId}-label`;
  const errorId = `${inputId}-error`;
  const InputElement = multiline ? _TextArea.TextArea : 'input';
  const handleBlur = event => {
    setFocused(false);
    if (onBlur) {
      onBlur(event);
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: (0, _style.classes)(_InputModule.default.container, className),
    "data-error": !!error,
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: _InputModule.default.content
  }, /*#__PURE__*/React.createElement("label", {
    className: _InputModule.default.label,
    "data-focused": focused,
    "data-filled": !!value,
    id: labelId,
    htmlFor: inputId
  }, label), /*#__PURE__*/React.createElement(InputElement, {
    className: _InputModule.default.input,
    id: inputId,
    "aria-labelledby": labelId,
    "aria-describedby": error ? errorId : undefined,
    onFocus: () => setFocused(true),
    onBlur: handleBlur,
    value: value,
    onChange: onChange,
    autoComplete: autoComplete,
    required: required,
    maxLength: maxLength,
    type: type
  }), /*#__PURE__*/React.createElement("div", {
    className: _InputModule.default.underline,
    "data-focused": focused
  })), /*#__PURE__*/React.createElement(_Transition.Transition, {
    unmount: true,
    in: error,
    timeout: (0, _style.msToNum)(_theme.tokens.base.durationM)
  }, visible => /*#__PURE__*/React.createElement("div", {
    className: _InputModule.default.error,
    "data-visible": visible,
    id: errorId,
    role: "alert",
    style: (0, _style.cssProps)({
      height: visible ? errorRef.current?.getBoundingClientRect().height : 0
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: _InputModule.default.errorMessage,
    ref: errorRef
  }, /*#__PURE__*/React.createElement(_Icon.Icon, {
    icon: "error"
  }), error))));
};
exports.Input = Input;