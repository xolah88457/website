"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.icons = exports.Icon = void 0;
var _style = require("../../utils/style");
var _IconModule = _interopRequireDefault(require("./Icon.module.css"));
var _arrowLeft = _interopRequireDefault(require("./svg/arrow-left.svg"));
var _arrowRight = _interopRequireDefault(require("./svg/arrow-right.svg"));
var _check = _interopRequireDefault(require("./svg/check.svg"));
var _chevronRight = _interopRequireDefault(require("./svg/chevron-right.svg"));
var _close = _interopRequireDefault(require("./svg/close.svg"));
var _copy = _interopRequireDefault(require("./svg/copy.svg"));
var _error = _interopRequireDefault(require("./svg/error.svg"));
var _figma = _interopRequireDefault(require("./svg/figma.svg"));
var _github = _interopRequireDefault(require("./svg/github.svg"));
var _link = _interopRequireDefault(require("./svg/link.svg"));
var _menu = _interopRequireDefault(require("./svg/menu.svg"));
var _pause = _interopRequireDefault(require("./svg/pause.svg"));
var _play = _interopRequireDefault(require("./svg/play.svg"));
var _send = _interopRequireDefault(require("./svg/send.svg"));
var _twitter = _interopRequireDefault(require("./svg/twitter.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const icons = exports.icons = {
  arrowLeft: _arrowLeft.default,
  arrowRight: _arrowRight.default,
  check: _check.default,
  chevronRight: _chevronRight.default,
  close: _close.default,
  copy: _copy.default,
  error: _error.default,
  figma: _figma.default,
  github: _github.default,
  link: _link.default,
  menu: _menu.default,
  pause: _pause.default,
  play: _play.default,
  send: _send.default,
  twitter: _twitter.default
};
const Icon = ({
  icon,
  className,
  ...rest
}) => {
  const IconComponent = icons[icon];
  return /*#__PURE__*/React.createElement(IconComponent, _extends({
    "aria-hidden": true,
    className: (0, _style.classes)(_IconModule.default.icon, className)
  }, rest));
};
exports.Icon = Icon;