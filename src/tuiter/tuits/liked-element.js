import React from "react";

const LikedElement = (
    {
        liked = false
    }) => {
    if(liked.liked) {
        return (<i className="fa fa-heart text-danger pe-2"></i>);
    } else {
        return (<i className="fa fa-heart-o pe-2"></i>);
    }
};
export default LikedElement;