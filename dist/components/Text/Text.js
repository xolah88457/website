"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = void 0;
var _style = require("../../utils/style");
var _TextModule = _interopRequireDefault(require("./Text.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Text = ({
  children,
  size = 'm',
  as: Component = 'span',
  align = 'auto',
  weight = 'auto',
  secondary,
  className,
  ...rest
}) => {
  return /*#__PURE__*/React.createElement(Component, _extends({
    className: (0, _style.classes)(_TextModule.default.text, className),
    "data-align": align,
    "data-size": size,
    "data-weight": weight,
    "data-secondary": secondary
  }, rest), children);
};
exports.Text = Text;