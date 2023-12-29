import React from "react";
import { ReactComponent as CheckSVG } from "./Check.svg";
import { ReactComponent as DeleteSVG } from "./Delete.svg";
import "./TodoIcon.css";

const iconTypes = {
    "check": (color) => <CheckSVG className = "Icon-svg" fill={color} />,
    "delete": (color) => <DeleteSVG className = "Icon-svg" fill={color}/>,
 };
 
 
function TodoIcon({ type, color, onClick}) {
    return (
        <span
        className={`Icon Icon-${type}` }
        onClick = { onClick}
        >
            {iconTypes[type] (color)}
        </span>
)}

export { TodoIcon };

