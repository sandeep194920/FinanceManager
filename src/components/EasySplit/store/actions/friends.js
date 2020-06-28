import * as actionTypes from "./actionTypes";
import { db } from "../../../../firebase";

// helper for friends fetch (sync) helper
export const setFriends = (friends) => {
  return {
    type: actionTypes.SET_FRIENDS,
    friends: friends,
  };
};

// set friends failed (sync) helper
export const setFriendsFailed = () => {
  return {
    type: actionTypes.SET_FRIENDS_FAILED,
  };
};

// actual aync action creator to get friends
export const initFriends = () => {
  return (dispatch) => {
    const firebaseFriends = [];
    db.collection("friends")
      .get()
      .then((snapshot) => {
        snapshot.forEach((friend) => {
          firebaseFriends.push(friend.data());
        });
        dispatch(setFriends(firebaseFriends));
        // console.log("firebaseFriends");
        // console.log(firebaseFriends);
      })
      .catch((error) => dispatch(setFriendsFailed()));
  };
};
