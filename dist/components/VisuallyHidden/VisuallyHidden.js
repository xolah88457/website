"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VisuallyHidden = void 0;
var _react = require("react");
var _style = require("../../utils/style");
var _VisuallyHiddenModule = _interopRequireDefault(require("./VisuallyHidden.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const VisuallyHidden = exports.VisuallyHidden = /*#__PURE__*/(0, _react.forwardRef)(({
  className,
  showOnFocus,
  as: Component = 'span',
  children,
  visible,
  ...rest
}, ref) => {
  return /*#__PURE__*/React.createElement(Component, _extends({
    className: (0, _style.classes)(_VisuallyHiddenModule.default.hidden, className),
    "data-hidden": !visible && !showOnFocus,
    "data-show-on-focus": showOnFocus,
    ref: ref
  }, rest), children);
});