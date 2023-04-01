import React from "react";
import Button from "./button.js";
import '../../vendors/fontawesome/css/all.css';
const NavigationSidebar = (
    {
        active = "Home"
    }
) => {
    return (
        <div>
            <div className="list-group">
                <button className="list-group-item list-group-item-action">
                    <i className="fab fa-twitter"></i>
                    <span className="d-none d-xl-inline ps-1">
                        Tuiter</span>
                </button>
                <a href="/tuiter" className="text-decoration-none">
                    <Button active={active} title="Home" icon="fa fa-home"/>
                </a>
                <a href="/tuiter/explore" className="text-decoration-none">
                    <Button active={active} title="Explore" icon="fa fa-hashtag"/>
                </a>
                <Button active={active} title="Labs" icon="fa fa-asterisk"/>
                <Button active={active} title="Messages" icon="fa fa-envelope"/>
                <Button active={active} title="Bookmarks" icon="fa fa-bookmark"/>
                <Button active={active} title="Lists" icon="fa fa-list-ul"/>
                <Button active={active} title="Profile" icon="fa fa-user"/>
                <Button active={active} title="More" icon="fa fa-ellipsis-h"/>
            </div>
            <div className="d-grid pt-2">
                <button className="btn btn-primary rounded-pill">
                    Tuit
                </button>
            </div>
        </div>
    )
};
export default NavigationSidebar;