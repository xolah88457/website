"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navbar = void 0;
var _Icon = require("components/Icon");
var _Monogram = require("components/Monogram");
var _ThemeProvider = require("components/ThemeProvider");
var _theme = require("components/ThemeProvider/theme");
var _Transition = require("components/Transition");
var _hooks = require("hooks");
var _link = _interopRequireDefault(require("next/link"));
var _router = require("next/router");
var _react = require("react");
var _style = require("utils/style");
var _NavToggle = require("./NavToggle");
var _NavbarModule = _interopRequireDefault(require("./Navbar.module.css"));
var _ThemeToggle = require("./ThemeToggle");
var _navData = require("./navData");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Navbar = () => {
  const [current, setCurrent] = (0, _react.useState)();
  const [target, setTarget] = (0, _react.useState)();
  const {
    themeId
  } = (0, _ThemeProvider.useTheme)();
  const {
    menuOpen,
    dispatch
  } = (0, _hooks.useAppContext)();
  const {
    route,
    asPath
  } = (0, _router.useRouter)();
  const windowSize = (0, _hooks.useWindowSize)();
  const headerRef = (0, _react.useRef)();
  const isMobile = windowSize.width <= _style.media.mobile || windowSize.height <= 696;
  const scrollToHash = (0, _hooks.useScrollToHash)();
  (0, _react.useEffect)(() => {
    // Prevent ssr mismatch by storing this in state
    setCurrent(asPath);
  }, [asPath]);

  // Handle smooth scroll nav items
  (0, _react.useEffect)(() => {
    if (!target || route !== '/') return;
    setCurrent(`${route}${target}`);
    scrollToHash(target, () => setTarget(null));
  }, [route, scrollToHash, target]);

  // Handle swapping the theme when intersecting with inverse themed elements
  (0, _react.useEffect)(() => {
    const navItems = document.querySelectorAll('[data-navbar-item]');
    const inverseTheme = themeId === 'dark' ? 'light' : 'dark';
    const {
      innerHeight
    } = window;
    let inverseMeasurements = [];
    let navItemMeasurements = [];
    const isOverlap = (rect1, rect2, scrollY) => {
      return !(rect1.bottom - scrollY < rect2.top || rect1.top - scrollY > rect2.bottom);
    };
    const resetNavTheme = () => {
      for (const measurement of navItemMeasurements) {
        measurement.element.dataset.theme = '';
      }
    };
    const handleInversion = () => {
      const invertedElements = document.querySelectorAll(`[data-theme='${inverseTheme}'][data-invert]`);
      if (!invertedElements) return;
      inverseMeasurements = Array.from(invertedElements).map(item => ({
        element: item,
        top: item.offsetTop,
        bottom: item.offsetTop + item.offsetHeight
      }));
      const {
        scrollY
      } = window;
      resetNavTheme();
      for (const inverseMeasurement of inverseMeasurements) {
        if (inverseMeasurement.top - scrollY > innerHeight || inverseMeasurement.bottom - scrollY < 0) {
          continue;
        }
        for (const measurement of navItemMeasurements) {
          if (isOverlap(inverseMeasurement, measurement, scrollY)) {
            measurement.element.dataset.theme = inverseTheme;
          } else {
            measurement.element.dataset.theme = '';
          }
        }
      }
    };

    // Currently only the light theme has dark full-width elements
    if (themeId === 'light') {
      navItemMeasurements = Array.from(navItems).map(item => {
        const rect = item.getBoundingClientRect();
        return {
          element: item,
          top: rect.top,
          bottom: rect.bottom
        };
      });
      document.addEventListener('scroll', handleInversion);
      handleInversion();
    }
    return () => {
      document.removeEventListener('scroll', handleInversion);
      resetNavTheme();
    };
  }, [themeId, windowSize, asPath]);

  // Check if a nav item should be active
  const getCurrent = (url = '') => {
    const nonTrailing = current?.endsWith('/') ? current?.slice(0, -1) : current;
    if (url === nonTrailing) {
      return 'page';
    }
    return '';
  };

  // Store the current hash to scroll to
  const handleNavItemClick = event => {
    const hash = event.currentTarget.href.split('#')[1];
    setTarget(null);
    if (hash && route === '/') {
      setTarget(`#${hash}`);
      event.preventDefault();
    }
  };
  const handleMobileNavClick = event => {
    handleNavItemClick(event);
    if (menuOpen) dispatch({
      type: 'toggleMenu'
    });
  };
  return /*#__PURE__*/React.createElement("header", {
    className: _NavbarModule.default.navbar,
    ref: headerRef
  }, /*#__PURE__*/React.createElement(_link.default, {
    href: route === '/' ? '/#intro' : '/',
    scroll: false
  }, /*#__PURE__*/React.createElement("a", {
    "data-navbar-item": true,
    className: _NavbarModule.default.logo,
    "aria-label": "",
    onClick: handleMobileNavClick
  }, /*#__PURE__*/React.createElement(_Monogram.Monogram, {
    highlight: true
  }))), /*#__PURE__*/React.createElement(_NavToggle.NavToggle, {
    onClick: () => dispatch({
      type: 'toggleMenu'
    }),
    menuOpen: menuOpen
  }), /*#__PURE__*/React.createElement("nav", {
    className: _NavbarModule.default.nav
  }, /*#__PURE__*/React.createElement("div", {
    className: _NavbarModule.default.navList
  }, _navData.navLinks.map(({
    label,
    pathname
  }) => /*#__PURE__*/React.createElement(_link.default, {
    href: pathname,
    scroll: false,
    key: label
  }, /*#__PURE__*/React.createElement("a", {
    "data-navbar-item": true,
    className: _NavbarModule.default.navLink,
    "aria-current": getCurrent(pathname),
    onClick: handleNavItemClick
  }, label)))), /*#__PURE__*/React.createElement(NavbarIcons, {
    desktop: true
  })), /*#__PURE__*/React.createElement(_Transition.Transition, {
    unmount: true,
    in: menuOpen,
    timeout: (0, _style.msToNum)(_theme.tokens.base.durationL)
  }, visible => /*#__PURE__*/React.createElement("nav", {
    className: _NavbarModule.default.mobileNav,
    "data-visible": visible
  }, _navData.navLinks.map(({
    label,
    pathname
  }, index) => /*#__PURE__*/React.createElement(_link.default, {
    href: pathname,
    scroll: false,
    key: label
  }, /*#__PURE__*/React.createElement("a", {
    className: _NavbarModule.default.mobileNavLink,
    "data-visible": visible,
    "aria-current": getCurrent(pathname),
    onClick: handleMobileNavClick,
    style: (0, _style.cssProps)({
      transitionDelay: (0, _style.numToMs)(Number((0, _style.msToNum)(_theme.tokens.base.durationS)) + index * 50)
    })
  }, label))), /*#__PURE__*/React.createElement(NavbarIcons, null), /*#__PURE__*/React.createElement(_ThemeToggle.ThemeToggle, {
    isMobile: true
  }))), !isMobile && /*#__PURE__*/React.createElement(_ThemeToggle.ThemeToggle, {
    "data-navbar-item": true
  }));
};
exports.Navbar = Navbar;
const NavbarIcons = ({
  desktop
}) => /*#__PURE__*/React.createElement("div", {
  className: _NavbarModule.default.navIcons
}, _navData.socialLinks.map(({
  label,
  url,
  icon
}) => /*#__PURE__*/React.createElement("a", {
  key: label,
  "data-navbar-item": desktop || undefined,
  className: _NavbarModule.default.navIconLink,
  "aria-label": label,
  href: url,
  rel: "noopener noreferrer"
}, /*#__PURE__*/React.createElement(_Icon.Icon, {
  className: _NavbarModule.default.navIcon,
  icon: icon
}))));