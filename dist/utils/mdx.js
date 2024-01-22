"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postFilePaths = exports.POSTS_PATH = void 0;
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// POSTS_PATH is useful when you want to get the path to a specific file
const POSTS_PATH = exports.POSTS_PATH = _path.default.join(process.cwd(), 'src/posts');

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
const postFilePaths = exports.postFilePaths = _fs.default.readdirSync(POSTS_PATH)
// Only include md(x) files
.filter(path => /\.mdx?$/.test(path));