import React from "react";

// styles
import "../../styles/input.scss";

const TInput = ({ type, width, onChange }) => {
  return (
    <div className={"t-input " + width}>
      <input type={type} onChange={onChange} placeholder="Please inter text" />
    </div>
  );
};

export default TInput;
