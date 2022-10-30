import React from "react";

const TextCouple = (props) => {
    return <div className="text-couple">
        <p>
            {props.title}
            {props.title ? ":" : ". . ."}
        </p>
        <p>{props.children}</p>
    </div>
}

TextCouple.defaultProps = {
    title: "",
    children: "Pompy",
}

export default TextCouple;