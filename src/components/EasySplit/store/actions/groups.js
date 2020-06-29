import * as actionTypes from "./actionTypes";
import { db } from "../../../../firebase";

// helper for groups fetch (sync) helper
export const setGroups = (groups) => {
  return {
    type: actionTypes.SET_GROUPS,
    groups: groups,
  };
};

// set groups failed (sync) helper
export const setGroupsFailed = () => {
  return {
    type: actionTypes.SET_GROUPS_FAILED,
  };
};

// actual aync action creator to get groups
export const initGroups = () => {
  return (dispatch) => {
    dispatchFirstoreGroups(dispatch);
  };
};

// actual aync action creator to update friends - called in FriendsDetails.js
export const updateGroups = (updateDetails) => {
  return (dispatch) => {
    // update the data here
    console.log("The updateDetails are ");
    console.log(updateDetails);

    // first get the index of the array where the data needs to be changed - use userId and detailId here
    const userId = updateDetails["userId"];
    const detailId = updateDetails["detailId"];

    // getting an element from firestore using userId
    const docRef = db.collection("groups").doc(userId);
    docRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          // getting the currentUser using userId from firestore
          const currentUser = doc.data();
          console.log("The details of cur user are");
          console.log(currentUser.details);

          // this index helps to get the particular element in detail array using the detailId
          let indexOfDetail = null;
          currentUser.details.forEach((detailObj, index) => {
            if (detailObj.detailId === detailId) {
              indexOfDetail = index;
              console.log(`Index is ${index} and the detailId is ${detailId}`);
            }
          });

          // deep copy the currentUser.details and then update it

          // we are replacing current user details with our new updatedUserDetails at the index of the detailId equal to detailID of updateDetails argument
          const updatedUserDetails = [...currentUser.details];
          updatedUserDetails[indexOfDetail] = updateDetails;
          console.log("The updated details array is ");
          console.log(updatedUserDetails);

          // updating the details in firestore with new details
          db.collection("groups").doc(userId).update({
            details: updatedUserDetails,
          });
          // getting the updated data from firestore
          dispatchFirstoreGroups(dispatch);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  };
};

// helper function used in setFriends and updateFriends
function dispatchFirstoreGroups(dispatch) {
  console.log("REACHED GROUP ACTION");
  const firebaseGroups = [];
  db.collection("groups")
    .get()
    .then((snapshot) => {
      snapshot.forEach((group) => {
        firebaseGroups.push(group.data());
      });
      dispatch(setGroups(firebaseGroups));
      console.log(firebaseGroups);
    })
    .catch((error) => dispatch(setGroupsFailed()));
}
