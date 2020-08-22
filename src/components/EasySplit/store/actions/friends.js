import * as actionTypes from "./actionTypes";
import { db } from "../../../../firebase";
import * as firebase from "firebase";

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
    dispatchFirstoreFriends(dispatch);
  };
};

// actual aync action creator to update friends - called in FriendsDetails.js
export const updateFriends = (updateDetails) => {
  return (dispatch) => {
    // update the data here
    console.log("The updateDetails are ");
    console.log(updateDetails);

    // first get the index of the array where the data needs to be changed - use userId and detailId here
    // const userId = updateDetails["userId"];
    const detailId = updateDetails["detailId"];
    let currentUserId = null;
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        currentUserId = user.uid;
      }
      // const docRef = db.collection("friends").doc(userId);
      // getting an element from firestore using userId
      const docRef = db
        .collection("users")
        .doc(currentUserId)
        .collection("friends")
        .doc("u6tjyxQPSFTsg72U2RUjeNkP1AN2");
      // .collection("friends");
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
                console.log(
                  `Index is ${index} and the detailId is ${detailId}`
                );
              }
            });

            // deep copy the currentUser.details and then update it

            // we are replacing current user details with our new updatedUserDetails at the index of the detailId equal to detailID of updateDetails argument
            const updatedUserDetails = [...currentUser.details];
            updatedUserDetails[indexOfDetail] = updateDetails;
            console.log("The updated details array is ");
            console.log(updatedUserDetails);

            // updating the details in firestore with new details

            console.log(
              db.collection("users").doc(currentUserId).collection("friends")
              // .doc("u6tjyxQPSFTsg72U2RUjeNkP1AN2")
            );
            db.collection("users")
              .doc(currentUserId)
              .collection("friends")
              .doc("u6tjyxQPSFTsg72U2RUjeNkP1AN2") // this should be the friend's id you would like to update of
              .update({
                details: updatedUserDetails,
              });

            // db.collection("friends").doc(userId).update({
            // });

            // introduce timeout so that the fetch will happen properly

            setTimeout(() => {
              // getting the updated data from firestore
              dispatchFirstoreFriends(dispatch);
            }, 800);

            // getting the updated data from firestore
            //dispatchFirstoreFriends(dispatch);
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });
    });
  };
};

// actual aync action creator to delete friends - called in FriendsDetails.js
export const deleteFriendsDetail = (deleteDetail) => {
  console.log("REAChed delete");
  return (dispatch) => {
    // remove the array detail object from firestore using arrayRemove method
    const userId = deleteDetail["userId"];
    // const detailId = deleteDetails["detailId"];

    // getting an element from firestore using userId
    const docRef = db.collection("friends").doc(userId);

    docRef.update({
      details: firebase.firestore.FieldValue.arrayRemove(deleteDetail),
    });

    // introduce timeout so that the fetch will happen properly

    setTimeout(() => {
      // getting the updated data from firestore
      dispatchFirstoreFriends(dispatch);
    }, 800);

    // getting the updated data from firestore
    // dispatchFirstoreFriends(dispatch);
  };
};

// add new details to friend
export const addDetailsFriend = (newDetails) => {
  console.log("Th of currENT USER are");

  return (dispatch) => {
    // const docRef = db.collection("friends").doc(newDetails.userId);

    let currentUserId = null;
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        currentUserId = user.uid;
      }

      const docRef = db
        .collection("users")
        .doc(currentUserId)
        .collection("friends")
        .doc("u6tjyxQPSFTsg72U2RUjeNkP1AN2");

      docRef.get().then(function (doc) {
        if (doc.exists) {
          const currentUser = doc.data();
          console.log("The details of currENT USER are");
          console.log(currentUser.details);

          // here we get the detailIDs present in the firebase into this array and then figureout what should be the next number that should go in.
          // Array is sorted in asc order and then 1 is added to the last element to form the latest detailId

          const detailIdArray = [];
          currentUser.details.forEach((detail) => {
            detailIdArray.push(detail.detailId);
          });
          detailIdArray.sort((a, b) => a - b); // sorting array in ascending order //https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
          console.log("The array is " + detailIdArray);
          // Now we got the sorted (ascending order) detaildIds, we can get the last detailId and add 1 for the new detailId

          let lastDetailId = detailIdArray.pop();

          // What if there are no details, then the lastDetailId will be undefined. In that case the lastDetailId should be made 0 so it starts from first
          if (isNaN(lastDetailId)) {
            lastDetailId = -1; // this is coz the below line makes the first detailId 0
          }
          console.log("The last id is " + lastDetailId);

          const newDetailId = lastDetailId + 1;
          const updatedNewDetails = {
            ...newDetails,
            detailId: newDetailId,
          };

          console.log(updatedNewDetails);
          // updating the details in firestore with new details

          db.collection("users")
            .doc(currentUserId)
            .collection("friends")
            .doc("u6tjyxQPSFTsg72U2RUjeNkP1AN2")

            // db.collection("friends")
            // .doc(newDetails.userId)
            .update({
              details: firebase.firestore.FieldValue.arrayUnion(
                updatedNewDetails
              ),
            });

          // introduce timeout so that the fetch will happen properly

          setTimeout(() => {
            // getting the updated data from firestore
            dispatchFirstoreFriends(dispatch);
          }, 800);

          // getting the updated data from firestore
          //dispatchFirstoreFriends(dispatch);
        }
      });
    });
  };
};

// helper function used in setFriends and updateFriends
function dispatchFirstoreFriends(dispatch) {
  const firebaseFriends = [];
  // get the collection of friends from the logged in user

  let currentUserId = null;
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      currentUserId = user.uid;
      console.log("THE Curnt user id is " + currentUserId);
    }

    db.collection("users")
      .doc(currentUserId)
      .collection("friends")
      .get()
      .then((snapshot) => {
        snapshot.forEach((friend) => {
          firebaseFriends.push(friend.data());
        });
        dispatch(setFriends(firebaseFriends));
      })
      .catch((error) => dispatch(setFriendsFailed()));
  });
}
