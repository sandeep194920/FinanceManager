import { auth } from "../../../firebase";
import { db } from "../../../firebase";

// import {
//   createFirestoreInstance,
//   getFirestore,
//   reduxFirestore,
// } from "redux-firestore";
export const registerUser = (email, password, fullname, history) => {
  return (dispatch) => {
    // console.log(
    //   `The email and pwd is ${email} and ${password} and ${fullname}`
    // );
    // const firestore = getFirestore();
    // console.log(db.firestore);
    console.log("REAC");

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        // console.log("The registered in user is -> " + response.user);
        // Add the registered user into users collection. Note that if this collection doesnt exist it would create one
        db.collection("users").doc(response.user.uid).set({
          phone: "999999999",
        });
        return response.user.updateProfile({
          displayName: fullname,
        });
      })
      .then(() => {
        history.push("/");
      })
      .then((response) => {
        console.log(response);
        // return response.user.updateProfile({
        //   displayName: "SSSSS",
        // });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const loginUser = (email, password, history) => {
  return (dispatch) => {
    // console.log(`The email and pwd is ${email} and ${password}`);
    auth.signInWithEmailAndPassword(email, password).then((response) => {
      // console.log("The logged in user is -> ");
      console.log(response);
      history.push("/");
    });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    // console.log("Logging out");
    auth.signOut();
  };
};

// send the user id info to reducer to know the current logged in user
// export const setUser = (userId) => {
//   return {
//     type: "SET_USER",
//     userId: userId,
//   };
// };

// onAuthStateChanged is automatically called when the auth state changes. No need to call this function.
// firebase.auth().onAuthStateChanged(function (user) {
//   if (user) {
//     console.log("User signed in");
//     console.log(user.uid);
//   } else {
//     console.log("User signed out");
//   }
// });
