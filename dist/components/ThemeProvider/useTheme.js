"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTheme = useTheme;
var _react = require("react");
var _ = require(".");
function useTheme() {
  const currentTheme = (0, _react.useContext)(_.ThemeContext);
  return currentTheme;
}