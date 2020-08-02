import * as actionTypes from "../actions/actionTypes";

const initState = {
  userId: null,
};

const authReducer = (state = initState, action) => {
  console.log("Reducer reached");
  console.log("action XXXXXXXXXXXX ");
  console.log(action.userId);
  console.log(actionTypes);

  switch (action.type) {
    case "SET_USER":
      console.log("XXXXXXXXXXXX");
      console.log("The user id is - > auth reducer " + action.userId);
      return {
        ...state,
        userId: action.userId,
      };
    default:
      return state;
  }
};
export default authReducer;
