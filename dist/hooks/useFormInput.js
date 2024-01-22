"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFormInput = useFormInput;
var _react = require("react");
function useFormInput(initialValue = '') {
  const [value, setValue] = (0, _react.useState)(initialValue);
  const [error, setError] = (0, _react.useState)();
  const [isDirty, setIsDirty] = (0, _react.useState)(false);
  const handleChange = event => {
    setValue(event.target.value);
    setIsDirty(true);

    // Resolve errors as soon as input becomes valid
    if (error && event.target.checkValidity()) {
      setError(null);
    }
  };
  const handleInvalid = event => {
    // Prevent native errors appearing
    event.preventDefault();
    setError(event.target.validationMessage);
  };
  const handleBlur = event => {
    // Only validate when the user has made a change
    if (isDirty) {
      event.target.checkValidity();
    }
  };
  return {
    value,
    error,
    onChange: handleChange,
    onBlur: handleBlur,
    onInvalid: handleInvalid
  };
}