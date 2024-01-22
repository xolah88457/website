"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavToggle = void 0;
var _Button = require("../../components/Button");
var _Icon = require("../../components/Icon");
var _NavToggleModule = _interopRequireDefault(require("./NavToggle.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const NavToggle = ({
  menuOpen,
  ...rest
}) => {
  return /*#__PURE__*/React.createElement(_Button.Button, _extends({
    iconOnly: true,
    className: _NavToggleModule.default.toggle,
    "aria-label": "Menu",
    "aria-expanded": menuOpen
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: _NavToggleModule.default.inner
  }, /*#__PURE__*/React.createElement(_Icon.Icon, {
    className: _NavToggleModule.default.icon,
    "data-menu": true,
    "data-open": menuOpen,
    icon: "menu"
  }), /*#__PURE__*/React.createElement(_Icon.Icon, {
    className: _NavToggleModule.default.icon,
    "data-close": true,
    "data-open": menuOpen,
    icon: "close"
  })));
};
exports.NavToggle = NavToggle;