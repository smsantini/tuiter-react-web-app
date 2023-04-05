import React from "react";
import NavigationSidebar from "../navigation-sidebar/index.js";
import WhoToFollowList from "../who-to-follow-list/index.js";
import ExploreComponent from "../explore-component/index.js";
import whoReducer
    from "../reducers/who-reducer.js";
import tuitsReducer from "../tuits/tuits-reducer.js";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";

const store = configureStore(
    {reducer: {
        who: whoReducer,
        tuitsData: tuitsReducer}});
function Tuiter() {
    return(
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="Explore"/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                     style={{"position": "relative"}}>
                    <ExploreComponent/>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    );
}
export default Tuiter