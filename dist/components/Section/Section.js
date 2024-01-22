"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Section = void 0;
var _react = require("react");
var _style = require("../../utils/style");
var _SectionModule = _interopRequireDefault(require("./Section.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Section = exports.Section = /*#__PURE__*/(0, _react.forwardRef)(({
  as: Component = 'div',
  children,
  className,
  ...rest
}, ref) => /*#__PURE__*/React.createElement(Component, _extends({
  className: (0, _style.classes)(_SectionModule.default.section, className),
  ref: ref
}, rest), children));