import React from "react";

// styles
import "../../styles/input.scss";

const TInput = ({
    type,
    value,
    name,
    className,
    placeholder,
    width,
    onChange
}) => {
    return (
        <div className={className}>
            <div className={"t-input " + width}>
                <input
                    value={value}
                    name={name}
                    type={type}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
};

export default TInput;
