import React from "react";

// styles
import "../../styles/textarea.scss";

const TextArea = ({
    className,
    value,
    name,
    onChange,
    maxLength,
    placeholder
}) => {
    return (
        <div className={className}>
            <div className="t-textarea">
                <textarea
                    id="desc"
                    name={name}
                    value={value}
                    onChange={onChange}
                    maxLength={maxLength}
                    placeholder={placeholder}
                ></textarea>
            </div>
        </div>
    );
};

export default TextArea;
