"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _SegmentedControl = require("./SegmentedControl");
Object.keys(_SegmentedControl).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SegmentedControl[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SegmentedControl[key];
    }
  });
});