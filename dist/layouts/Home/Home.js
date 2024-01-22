"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Home = void 0;
var _Footer = require("../../components/Footer");
var _Intro = require("../../layouts/Home/Intro");
var _Profile = require("../../layouts/Home/Profile");
var _react = require("react");
var _HomeModule = _interopRequireDefault(require("./Home.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const disciplines = ['Software', 'FullStack', 'Game', 'Web', 'Desktop'];
const Home = () => {
  const [visibleSections, setVisibleSections] = (0, _react.useState)([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = (0, _react.useState)(false);
  const intro = (0, _react.useRef)();
  const projectOne = (0, _react.useRef)();
  const projectTwo = (0, _react.useRef)();
  const projectThree = (0, _react.useRef)();
  const details = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];
    const sectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = entry.target;
          observer.unobserve(section);
          if (visibleSections.includes(section)) return;
          setVisibleSections(prevSections => [...prevSections, section]);
        }
      });
    }, {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1
    });
    const indicatorObserver = new IntersectionObserver(([entry]) => {
      setScrollIndicatorHidden(!entry.isIntersecting);
    }, {
      rootMargin: '-100% 0px 0px 0px'
    });
    sections.forEach(section => {
      if (section.current) {
        sectionObserver.observe(section.current);
      }
    });
    indicatorObserver.observe(intro.current);
    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);
  return /*#__PURE__*/React.createElement("div", {
    className: _HomeModule.default.home
  }, /*#__PURE__*/React.createElement(_Intro.Intro, {
    id: "intro",
    sectionRef: intro,
    disciplines: disciplines,
    scrollIndicatorHidden: scrollIndicatorHidden
  }), /*#__PURE__*/React.createElement(_Profile.Profile, {
    sectionRef: details,
    visible: visibleSections.includes(details.current),
    id: "details"
  }), /*#__PURE__*/React.createElement(_Footer.Footer, null));
};
exports.Home = Home;