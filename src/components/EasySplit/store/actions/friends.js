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
    getFirstoreFriends(dispatch);
    // const firebaseFriends = [];
    // db.collection("friends")
    //   .get()
    //   .then((snapshot) => {
    //     snapshot.forEach((friend) => {
    //       firebaseFriends.push(friend.data());
    //     });
    //     dispatch(setFriends(firebaseFriends));
    //     // console.log("firebaseFriends");
    //     // console.log(firebaseFriends);
    //   })
    //   .catch((error) => dispatch(setFriendsFailed()));
  };
};

// actual aync action creator to update friends
export const updateFriends = () => {
  return (dispatch) => {
    // update the data here
    db.collection("friends").doc("Sa194920").update({
      "main.oweAmount": 10,
    });
    // gets the new data from firestore once the data is updated in firestore
    getFirstoreFriends(dispatch);
  };
};

// helper function used in setFriends and updateFriends
function getFirstoreFriends(dispatch) {
  const firebaseFriends = [];
  db.collection("friends")
    .get()
    .then((snapshot) => {
      snapshot.forEach((friend) => {
        firebaseFriends.push(friend.data());
      });
      dispatch(setFriends(firebaseFriends));
    })
    .catch((error) => dispatch(setFriendsFailed()));
}
