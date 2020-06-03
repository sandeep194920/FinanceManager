import * as actionTypes from "../actions/actionTypes";

const initState = {
  friendsInfo: {},
  loading: true,
};

const friendsReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_FRIENDS:
      return {
        ...state,
        friendsInfo: action.friends,
        loading: false,
      };
    case actionTypes.UPDATE_FRIENDS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default friendsReducer;
