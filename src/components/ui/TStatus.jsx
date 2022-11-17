import React from "react";

// styles
import "../../styles/status.scss";

const TStatus = ({ text, status }) => {
    return (
        <div className="t-status">
            <div className={"status " + status}></div>
            {text}
        </div>
    );
};

export default TStatus;
