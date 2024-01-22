"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WordRotate = void 0;
var _react = require("react");
var _framerMotion = require("framer-motion");
const CYCLES_PER_LETTER = 10;
const SHUFFLE_TIME = 30;
const CHARS = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨーラリルレロワヰヱヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ";
const WordRotate = props => {
  // Ensure that TARGET_TEXT is always a string
  const {
    TARGET_TEXT
  } = props;
  const intervalRef = (0, _react.useRef)(null);
  const [text, setText] = (0, _react.useState)(TARGET_TEXT);
  const scramble = () => {
    let pos = 0;
    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("").map((char, index) => {
        if (pos / CYCLES_PER_LETTER > index) {
          return char;
        }
        const randomCharIndex = Math.floor(Math.random() * CHARS.length);
        const randomChar = CHARS[randomCharIndex];
        return randomChar;
      }).join("");
      setText(scrambled);
      pos++;
      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };
  const stopScramble = () => {
    clearInterval(intervalRef.current);
    setText(TARGET_TEXT);
  };
  (0, _react.useEffect)(() => {
    scramble();
    const timeoutId = setTimeout(stopScramble, 5000);

    // Clear the interval and timeout when the component unmounts
    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutId);
    };
  }, []);
  return /*#__PURE__*/React.createElement(_framerMotion.motion.button, {
    whileHover: {
      scale: 1.025
    },
    whileTap: {
      scale: 0.975
    },
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px'
    } // Adjust button styles here
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 10,
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("span", null, text)), /*#__PURE__*/React.createElement(_framerMotion.motion.span, {
    initial: {
      y: "100%"
    },
    animate: {
      y: "-100%"
    },
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      ease: "linear"
    },
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      transform: 'scale(1.25)',
      backgroundImage: 'linear-gradient(to top, rgba(99, 102, 241, 0) 40%, rgba(99, 102, 241, 1) 50%, rgba(99, 102, 241, 0) 60%)',
      opacity: 0,
      transition: 'opacity 300ms linear'
      // The group-hover state cannot be directly translated to inline CSS. You might need to use JavaScript or React state to handle hover interactions.
    }
  }));
};
exports.WordRotate = WordRotate;