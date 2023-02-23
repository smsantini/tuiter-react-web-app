import React from "react";
const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div>
            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action">
                    <i className="fab fa-twitter"></i></a>
                <a href="#" className="list-group-item list-group-item-action">
                    <i className="fa fa-home"></i>
                    <span className="d-none d-xl-inline">
                Home</span></a>
                <a href="#" className="list-group-item list-group-item-action active">
                    <i className="fa fa-hashtag"></i>
                    <span className="d-none d-xl-inline">
                Explore</span></a>
                <a href="#" className="list-group-item list-group-item-action">
                    <i className="fa fa-bell"></i>
                    <span className="d-none d-xl-inline">
                Notifications</span></a>
                <a href="#" className="list-group-item list-group-item-action">
                    <i className="fa fa-envelope"></i>
                    <span className="d-none d-xl-inline">
                Messages</span></a>
                <a href="#" className="list-group-item list-group-item-action">
                    <i className="fa fa-bookmark"></i>
                    <span className="d-none d-xl-inline">
                Bookmarks</span></a>
                <a href="#" className="list-group-item list-group-item-action">
                    <i className="fa fa-list-ul"></i>
                    <span className="d-none d-xl-inline">
                Lists</span></a>
                <a href="#" className="list-group-item list-group-item-action">
                    <i className="fa fa-user"></i>
                    <span className="d-none d-xl-inline">
                Profile</span></a>
                <a href="#" className="list-group-item list-group-item-action">
                    <i className="fa fa-ellipsis-h"></i>
                    <span className="d-none d-xl-inline">
                More</span></a>
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