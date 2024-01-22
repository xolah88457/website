"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _Articles.Articles;
  }
});
exports.getStaticProps = getStaticProps;
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
var _grayMatter = _interopRequireDefault(require("gray-matter"));
var _readingTime = _interopRequireDefault(require("reading-time"));
var _mdx = require("../../utils/mdx");
var _timecode = require("../../utils/timecode");
var _Articles = require("./Articles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function getStaticProps() {
  const allPosts = _mdx.postFilePaths.map(filePath => {
    const source = _fs.default.readFileSync(_path.default.join(_mdx.POSTS_PATH, filePath));
    const {
      data,
      content
    } = (0, _grayMatter.default)(source);
    const {
      time
    } = (0, _readingTime.default)(content);
    const timecode = (0, _timecode.formatTimecode)(time);
    return {
      ...data,
      timecode,
      slug: filePath.replace(/\.mdx?$/, '')
    };
  });
  const featured = allPosts.find(post => post.featured);
  const posts = allPosts.filter(post => post.slug !== featured.slug).sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  }).reverse();
  return {
    props: {
      posts,
      featured
    }
  };
}