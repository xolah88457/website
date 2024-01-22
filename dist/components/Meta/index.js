"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Meta = require("./Meta");
Object.keys(_Meta).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Meta[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Meta[key];
    }
  });
});