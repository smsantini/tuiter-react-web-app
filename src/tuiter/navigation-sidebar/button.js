import React from "react";

const Button = (
    {
        active = "",
        title = "",
        icon = ""
    }) => {

    if (active === title) {
        return (
            <button className="list-group-item list-group-item-action active">
                <i className={icon}></i>
                <span className="d-none d-xl-inline ps-1">
                    {title}</span>
            </button>);
    } else {
        return (
            <button className="list-group-item list-group-item-action">
                <i className={icon}></i>
                <span className="d-none d-xl-inline ps-1">
                    {title}</span>
            </button>);
    }
};
export default Button;