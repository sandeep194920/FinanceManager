import * as actionTypes from "./actionTypes";
import { db } from "../../../../firebase";
import * as firebase from "firebase";

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

// actual aync action creator to update groups - called in GroupsDetails.js
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

          // introduce timeout so that the fetch will happen properly

          setTimeout(() => {
            // getting the updated data from firestore
            dispatchFirstoreGroups(dispatch);
          }, 800);

          // getting the updated data from firestore
          // dispatchFirstoreGroups(dispatch);
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

// actual aync action creator to delete groups - called in GroupsDetails.js
export const deleteGroupsDetail = (deleteDetail) => {
  console.log("REAChed delete");
  return (dispatch) => {
    // remove the array detail object from firestore using arrayRemove method
    const userId = deleteDetail["userId"];
    // const detailId = deleteDetails["detailId"];

    // getting an element from firestore using userId
    const docRef = db.collection("groups").doc(userId);

    docRef.update({
      details: firebase.firestore.FieldValue.arrayRemove(deleteDetail),
    });

    // introduce timeout so that the fetch will happen properly

    setTimeout(() => {
      // getting the updated data from firestore
      dispatchFirstoreGroups(dispatch);
    }, 800);

    // getting the updated data from firestore
    // dispatchFirstoreGroups(dispatch);
  };
};

// add new details to friend
export const addDetailsGroup = (newDetails) => {
  console.log("Th of currENT USER are");

  return (dispatch) => {
    const docRef = db.collection("groups").doc(newDetails.userId);
    docRef.get().then(function (doc) {
      if (doc.exists) {
        const currentUser = doc.data();
        console.log("The details of currENT USER are");
        console.log(currentUser.details);

        const detailIdArray = [];
        currentUser.details.forEach((detail) => {
          detailIdArray.push(detail.detailId);
        });
        detailIdArray.sort((a, b) => a - b); // sorting array in ascending order //https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
        console.log("The array is " + detailIdArray);
        // Now we got the sorted (ascending order) detaildIds, we can get the last detailId and add 1 for the new detailId

        const lastDetailId = detailIdArray.pop();
        console.log("The last id is " + lastDetailId);

        const newDetailId = lastDetailId + 1;
        const updatedNewDetails = {
          ...newDetails,
          detailId: newDetailId,
        };

        console.log(updatedNewDetails);
        // updating the details in firestore with new details
        db.collection("groups")
          .doc(newDetails.userId)
          .update({
            details: firebase.firestore.FieldValue.arrayUnion(
              updatedNewDetails
            ),
          });
        // introduce timeout so that the fetch will happen properly

        setTimeout(() => {
          // getting the updated data from firestore
          dispatchFirstoreGroups(dispatch);
        }, 800);

        // getting the updated data from firestore
        // dispatchFirstoreGroups(dispatch);
      }
    });
  };
};

// helper function used in setGroups and updateGroups
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
