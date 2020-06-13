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

// set friends failed (sync) helper
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
      .then((response) => {
        console.log("SET FRIENDS");
        console.log(response.data);
        return dispatch(setFriends(response.data));
      })

      .catch((error) => dispatch(setFriendsFailed()));
  };
};

// update friends failed (sync) helper
export const updateFriendsDet = (friends) => {
  return {
    type: actionTypes.UPDATE_FRIENDS,
    friends: friends,
  };
};

// set friends failed (sync) helper
export const updateFriendsFailed = () => {
  return {
    type: actionTypes.UPDATE_FRIENDS_FAILED,
  };
};

// actual async action creator to update friends -- called in FriendsDetails.js
export const updateFriends = (updateDetails, currentFriends) => {
  // get these update details and get the id out of it, use current details to modify it and then send it to set friends

  // Getting only the details of this particular user whose details need to be updated
  const extractedDetails = currentFriends[updateDetails["userId"]].details;
  console.log("The extracted details are");
  console.log(extractedDetails);
  // Getting a new array thats going to contain only the objects that need not be updated

  // const updatedDetailsArray = extractedDetails.filter(
  //   (detailObj) => detailObj["detailId"] !== updateDetails["detailId"]
  // );

  const updatedDetailsArray = extractedDetails.map((detailObj) => {
    if (detailObj["detailId"] !== updateDetails["detailId"]) {
      return detailObj;
    }
  });
  updatedDetailsArray[updateDetails["detailId"]] = { ...updateDetails };

  // pushing the update into the previous array to get new updated details. This array can now be replaced with the user's details
  const updatedDetails = [...updatedDetailsArray];
  console.log("extractedDetails");
  console.log(extractedDetails);

  console.log("updatedDetailsArray");
  console.log(updatedDetailsArray);

  const updatedFriends = {
    ...currentFriends,
    [updateDetails["userId"]]: {
      ...currentFriends[updateDetails["userId"]],
      main: {
        ...currentFriends[updateDetails["userId"]].main,
      },
      details: updatedDetails,
    },
  };

  // const formattedUpdatedFriends = objToArray(updatedFriends, "main", "details");

  return (dispatch) => {
    console.log("Coming from updateFriends actions");
    console.log(currentFriends);
    console.log(updatedFriends);

    // console.log(updateDetails);
    // console.log(currentFriend);
    dispatch(updateFriendsDet(updatedFriends));
  };
};
