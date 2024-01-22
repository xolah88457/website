"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAppContext = useAppContext;
var _app = require("../pages/_app.page");
var _react = require("react");
function useAppContext() {
  return (0, _react.useContext)(_app.AppContext);
}