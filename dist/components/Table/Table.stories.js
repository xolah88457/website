"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;
var _Table = require("components/Table");
var _StoryContainer = require("../../../.storybook/StoryContainer");
var _Table2 = require("./Table");
var _default = exports.default = {
  title: 'Table'
};
const Default = () => /*#__PURE__*/React.createElement(_StoryContainer.StoryContainer, null, /*#__PURE__*/React.createElement(_Table.Table, null, /*#__PURE__*/React.createElement(_Table2.TableHead, null, /*#__PURE__*/React.createElement(_Table.TableRow, null, /*#__PURE__*/React.createElement(_Table2.TableHeadCell, null, "Country"), /*#__PURE__*/React.createElement(_Table2.TableHeadCell, null, "Capital"), /*#__PURE__*/React.createElement(_Table2.TableHeadCell, null, "Population"))), /*#__PURE__*/React.createElement(_Table2.TableBody, null, /*#__PURE__*/React.createElement(_Table.TableRow, null, /*#__PURE__*/React.createElement(_Table.TableCell, null, "USA"), /*#__PURE__*/React.createElement(_Table.TableCell, null, "Washington, D.C."), /*#__PURE__*/React.createElement(_Table.TableCell, null, "309 million")), /*#__PURE__*/React.createElement(_Table.TableRow, null, /*#__PURE__*/React.createElement(_Table.TableCell, null, "Sweden"), /*#__PURE__*/React.createElement(_Table.TableCell, null, "Stockholm"), /*#__PURE__*/React.createElement(_Table.TableCell, null, "9 million")))));
exports.Default = Default;