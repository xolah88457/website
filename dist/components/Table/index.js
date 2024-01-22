"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Table = require("./Table");
Object.keys(_Table).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Table[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Table[key];
    }
  });
});