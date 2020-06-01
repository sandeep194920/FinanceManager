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

// fetch ingredients failed (sync) helper
export const fetchFriendsFailed = () => {
  return {
    type: actionTypes.FETCH_FRIENDS_FAILED,
  };
};

// actual aync action creator to get friends
export const initFriends = () => {
  return (dispatch) => {
    axios
      .get("friends.json")
      .then((response) => dispatch(setFriends(response.data)))
      .catch((error) => dispatch(fetchFriendsFailed()));
  };
};
