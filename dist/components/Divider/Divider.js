"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Divider = void 0;
var _style = require("../../utils/style");
var _DividerModule = _interopRequireDefault(require("./Divider.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Divider = ({
  lineWidth,
  lineHeight,
  notchWidth,
  notchHeight,
  collapseDelay,
  collapsed,
  className,
  style,
  ...rest
}) => /*#__PURE__*/React.createElement("div", _extends({
  className: (0, _style.classes)(_DividerModule.default.divider, className),
  style: (0, _style.cssProps)({
    lineWidth: lineWidth,
    lineHeight: lineHeight,
    notchWidth: notchWidth,
    notchHeight: notchHeight,
    collapseDelay: (0, _style.numToMs)(collapseDelay)
  }, style)
}, rest), /*#__PURE__*/React.createElement("div", {
  className: _DividerModule.default.line,
  "data-collapsed": collapsed
}), /*#__PURE__*/React.createElement("div", {
  className: _DividerModule.default.notch,
  "data-collapsed": collapsed,
  style: (0, _style.cssProps)({
    collapseDelay: (0, _style.numToMs)(collapseDelay + 160)
  })
}));
exports.Divider = Divider;
Divider.defaultProps = {
  lineWidth: '100%',
  lineHeight: '2px',
  notchWidth: '90px',
  notchHeight: '10px',
  collapsed: false,
  collapseDelay: 0
};