import React, {Component} from "react";

const Output = () => {
    return (
        <div id="output-box">
            <textarea defaultValue="Test Output text"></textarea>
            <button id="clear" className="btn-small">Clear</button>
        </div>
    );
};

export default Output;
