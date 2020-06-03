import axios from "../../../../axios-easysplit";
import * as actionTypes from "../actions/actionTypes";

// fetching friends from backend using thunk

// helper for friends fetch (sync) helper
export const setFriends = (friends) => {
  return {
    type: actionTypes.SET_FRIENDS,
    friends: friends,
  };
};

// set ingredients failed (sync) helper
export const setFriendsFailed = () => {
  return {
    type: actionTypes.SET_FRIENDS_FAILED,
  };
};

// actual aync action creator to get friends
export const initFriends = () => {
  return (dispatch) => {
    axios
      .get("friends.json")
      .then((response) => dispatch(setFriends(response.data)))
      .catch((error) => dispatch(setFriendsFailed()));
  };
};

// actual async action creator to update friends
export const updateFriends = (updateDetails, currentDetails) => {
  // get these update details and get the id out of it, use current details to modify it and then send it to set friends
  // const updatedFriends = { ...currentDetails };
  return (dispatch) => {
    console.log("Coming from updateFriends actions");

    console.log(currentDetails);
    console.log(updateDetails);
  };
};
