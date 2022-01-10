import { combineReducers } from "@reduxjs/toolkit";
import homepageReducer from "../Containers/Home/redux";
import likeReducer from "../Containers/Home/redux/likeslice";
export default combineReducers({
  blank: function (state: {}, action) {
    return {};
  },
  homepage: homepageReducer,
  likes: likeReducer,
});
