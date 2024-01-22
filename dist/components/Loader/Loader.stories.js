"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;
var _Loader = require("components/Loader");
var _StoryContainer = require("../../../.storybook/StoryContainer");
var _default = exports.default = {
  title: 'Loader'
};
const Default = () => /*#__PURE__*/React.createElement(_StoryContainer.StoryContainer, null, /*#__PURE__*/React.createElement(_Loader.Loader, {
  size: 48
}));
exports.Default = Default;