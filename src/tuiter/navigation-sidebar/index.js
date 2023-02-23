import React from "react";
const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div>
            <div className="list-group">
                <button className="list-group-item list-group-item-action">
                    <i className="fab fa-twitter"></i></button>
                <button className="list-group-item list-group-item-action">
                    <i className="fa fa-home"></i>
                    <span className="d-none d-xl-inline">
                Home</span></button>
                <button className="list-group-item list-group-item-action active">
                    <i className="fa fa-hashtag"></i>
                    <span className="d-none d-xl-inline">
                Explore</span></button>
                <button className="list-group-item list-group-item-action">
                    <i className="fa fa-bell"></i>
                    <span className="d-none d-xl-inline">
                Notifications</span></button>
                <button className="list-group-item list-group-item-action">
                    <i className="fa fa-envelope"></i>
                    <span className="d-none d-xl-inline">
                Messages</span></button>
                <button className="list-group-item list-group-item-action">
                    <i className="fa fa-bookmark"></i>
                    <span className="d-none d-xl-inline">
                Bookmarks</span></button>
                <button className="list-group-item list-group-item-action">
                    <i className="fa fa-list-ul"></i>
                    <span className="d-none d-xl-inline">
                Lists</span></button>
                <button className="list-group-item list-group-item-action">
                    <i className="fa fa-user"></i>
                    <span className="d-none d-xl-inline">
                Profile</span></button>
                <button className="list-group-item list-group-item-action">
                    <i className="fa fa-ellipsis-h"></i>
                    <span className="d-none d-xl-inline">
                More</span></button>
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