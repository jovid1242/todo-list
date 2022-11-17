import React from "react";

// styles
import "../../styles/button.scss";

const TButton = ({ className, children, onClick }) => {
  return (
    <div className={"btn " + className}>
      <button onClick={onClick}>{children}</button>
    </div>
  );
};

export default TButton;
