import React from "react";

let Input = ({ placeholder, value, handleChange, type = "text" }) => {
  return (
    <input
      className="form-control"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
