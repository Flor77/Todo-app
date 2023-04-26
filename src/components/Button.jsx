import React from "react";

const Button = (props) => {
  return (
    <button className="primary-button" {...props}>
      {props.children}
    </button>
  );
};

export default Button;
