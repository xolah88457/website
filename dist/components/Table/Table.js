"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableRow = exports.TableHeadCell = exports.TableHead = exports.TableCell = exports.TableBody = exports.Table = void 0;
var _TableModule = _interopRequireDefault(require("./Table.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Table = ({
  children
}) => /*#__PURE__*/React.createElement("table", {
  className: _TableModule.default.table
}, children);
exports.Table = Table;
const TableRow = ({
  children
}) => /*#__PURE__*/React.createElement("tr", {
  className: _TableModule.default.row
}, children);
exports.TableRow = TableRow;
const TableHead = ({
  children
}) => /*#__PURE__*/React.createElement("thead", {
  className: _TableModule.default.head
}, children);
exports.TableHead = TableHead;
const TableBody = ({
  children
}) => /*#__PURE__*/React.createElement("tbody", {
  className: _TableModule.default.body
}, children);
exports.TableBody = TableBody;
const TableHeadCell = ({
  children
}) => /*#__PURE__*/React.createElement("th", {
  className: _TableModule.default.headCell
}, children);
exports.TableHeadCell = TableHeadCell;
const TableCell = ({
  children
}) => /*#__PURE__*/React.createElement("td", {
  className: _TableModule.default.cell
}, children);
exports.TableCell = TableCell;