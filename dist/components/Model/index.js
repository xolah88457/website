"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Model = require("./Model");
Object.keys(_Model).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Model[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Model[key];
    }
  });
});