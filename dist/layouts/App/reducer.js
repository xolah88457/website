"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = void 0;
exports.reducer = reducer;
const initialState = exports.initialState = {
  menuOpen: false
};
function reducer(state, action) {
  const {
    type,
    value
  } = action;
  switch (type) {
    case 'setTheme':
      return {
        ...state,
        theme: value
      };
    case 'toggleTheme':
      {
        const newThemeId = state.theme === 'dark' ? 'light' : 'dark';
        return {
          ...state,
          theme: newThemeId
        };
      }
    case 'toggleMenu':
      return {
        ...state,
        menuOpen: !state.menuOpen
      };
    default:
      throw new Error();
  }
}