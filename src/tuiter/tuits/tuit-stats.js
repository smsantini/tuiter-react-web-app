import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = (
    tuit = {
        "_id": 234,
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345
    }
) => {
    const dispatch = useDispatch();
    return (
        <div className="d-flex justify-content-start">
            <span className="col-3">
                <i className="fa fa-comment-o pe-2"></i>
                {tuit.replies}
            </span>
            <span className="col-3">
                <i className="fa fa-refresh pe-2"></i>
                {tuit.retuits}
            </span>
            <span className="col-3" onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    likes: tuit.likes + 1
                }))}>
                <i  className="bi bi-heart-fill me-2 text-danger"></i>
                {tuit.likes}
            </span>
            <span className="col-3">
                <i className="fa fa-share-alt pe-2"></i>
            </span>
        </div>
    );
}

export default TuitStats;