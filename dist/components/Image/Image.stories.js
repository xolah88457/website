"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Reveal = exports.Default = void 0;
var _Image = require("components/Image");
var _StoryContainer = require("../../../.storybook/StoryContainer");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var _default = exports.default = {
  title: 'Image'
};
const imageData = {
  alt: 'An abstract purple and pink neon thing',
  src: {
    src: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=960&h=540&q=80',
    width: 960,
    height: 540
  },
  placeholder: {
    src: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=64&h=36&q=0',
    width: 64,
    height: 36
  }
};
const Story = args => /*#__PURE__*/React.createElement(_StoryContainer.StoryContainer, null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0px, 960px)'
  }
}, /*#__PURE__*/React.createElement(_Image.Image, _extends({
  alt: "An abstract purple and pink neon thing"
}, imageData, args))));
const Default = exports.Default = Story.bind({});
Default.args = {
  ...imageData
};
const Reveal = exports.Reveal = Story.bind({});
Reveal.args = {
  ...imageData,
  reveal: true
};