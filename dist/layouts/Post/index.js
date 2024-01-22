"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Post = require("./Post");
Object.keys(_Post).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Post[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Post[key];
    }
  });
});
var _PostMarkdown = require("./PostMarkdown");
Object.keys(_PostMarkdown).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _PostMarkdown[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _PostMarkdown[key];
    }
  });
});