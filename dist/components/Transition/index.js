"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Transition = require("./Transition");
Object.keys(_Transition).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Transition[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Transition[key];
    }
  });
});