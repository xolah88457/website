"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deviceModels = exports.ModelAnimationType = void 0;
var _iphone = _interopRequireDefault(require("assets/iphone-11.glb"));
var _macbookPro = _interopRequireDefault(require("assets/macbook-pro.glb"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ModelAnimationType = exports.ModelAnimationType = {
  SpringUp: 'spring-up',
  LaptopOpen: 'laptop-open'
};
const deviceModels = exports.deviceModels = {
  phone: {
    url: _iphone.default,
    width: 374,
    height: 512,
    position: {
      x: 0,
      y: 0,
      z: 0
    },
    animation: ModelAnimationType.SpringUp
  },
  laptop: {
    url: _macbookPro.default,
    width: 1280,
    height: 800,
    position: {
      x: 0,
      y: 0,
      z: 0
    },
    animation: ModelAnimationType.LaptopOpen
  }
};