"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = void 0;
var _Link = require("../../components/Link");
var _Text = require("../../components/Text");
var _style = require("../../utils/style");
var _FooterModule = _interopRequireDefault(require("./Footer.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Footer = ({
  className
}) => /*#__PURE__*/React.createElement("footer", {
  className: (0, _style.classes)(_FooterModule.default.footer, className)
}, /*#__PURE__*/React.createElement(_Text.Text, {
  size: "s",
  align: "center"
}, /*#__PURE__*/React.createElement("span", {
  className: _FooterModule.default.date
}, `© ${new Date().getFullYear()} Ryan Nasiri.`)));
exports.Footer = Footer;