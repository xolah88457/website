"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Monogram = require("./Monogram");
Object.keys(_Monogram).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Monogram[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Monogram[key];
    }
  });
});