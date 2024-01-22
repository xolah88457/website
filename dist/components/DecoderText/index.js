"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _DecoderText = require("./DecoderText");
Object.keys(_DecoderText).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _DecoderText[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _DecoderText[key];
    }
  });
});