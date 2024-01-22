"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PostPage;
exports.getStaticProps = exports.getStaticPaths = void 0;
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
var _Post = require("../../layouts/Post");
var _mdxBundler = require("mdx-bundler");
var _client = require("mdx-bundler/client");
var _react = require("react");
var _readingTime = _interopRequireDefault(require("reading-time"));
var _rehypeImgSize = _interopRequireDefault(require("rehype-img-size"));
var _rehypePresetMinify = _interopRequireDefault(require("rehype-preset-minify"));
var _rehypeSlug = _interopRequireDefault(require("rehype-slug"));
var _mdx = require("../../utils/mdx");
var _timecode = require("../../utils/timecode");
var _rehypePrism = _interopRequireDefault(require("@mapbox/rehype-prism"));
var _ogImage = require("./og-image");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function PostPage({
  frontmatter,
  code,
  timecode,
  ogImage
}) {
  const MDXComponent = (0, _react.useMemo)(() => (0, _client.getMDXComponent)(code), [code]);
  return /*#__PURE__*/React.createElement(_Post.Post, _extends({
    timecode: timecode,
    ogImage: ogImage
  }, frontmatter), /*#__PURE__*/React.createElement(MDXComponent, {
    components: _Post.postMarkdown
  }));
}
PostPage.propTypes = {
  frontmatter: _propTypes.default.object.isRequired,
  code: _propTypes.default.string.isRequired,
  timecode: _propTypes.default.string.isRequired,
  ogImage: _propTypes.default.string.isRequired
};
const getStaticProps = async ({
  params
}) => {
  const postFilePath = _path.default.join(_mdx.POSTS_PATH, `${params.slug}.mdx`);
  const source = _fs.default.readFileSync(postFilePath, 'utf-8');
  const {
    code,
    frontmatter,
    matter
  } = await (0, _mdxBundler.bundleMDX)({
    source,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? [])];
      options.rehypePlugins = [...(options.rehypePlugins ?? []), _rehypePrism.default, _rehypeSlug.default, _rehypePresetMinify.default, [_rehypeImgSize.default, {
        dir: 'public'
      }]];
      return options;
    }
  });
  const {
    time
  } = (0, _readingTime.default)(matter.content);
  const timecode = (0, _timecode.formatTimecode)(time);
  const ogImage = await (0, _ogImage.generateOgImage)({
    title: frontmatter.title,
    date: frontmatter.date,
    banner: frontmatter.banner,
    timecode
  });
  return {
    props: {
      code,
      frontmatter,
      timecode,
      ogImage
    },
    notFound: process.env.NODE_ENV === 'production' && frontmatter.draft
  };
};
exports.getStaticProps = getStaticProps;
const getStaticPaths = async () => {
  const paths = _mdx.postFilePaths.map(filePath => filePath.replace(/\.mdx?$/, '')).map(slug => ({
    params: {
      slug
    }
  }));
  return {
    paths,
    fallback: false
  };
};
exports.getStaticPaths = getStaticPaths;