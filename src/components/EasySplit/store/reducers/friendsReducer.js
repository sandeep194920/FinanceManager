// import { friendsInfo } from "../../../../data/EasySplit/FriendsInfo";
import * as actionTypes from "../actions/actionTypes";

const initState = {
  friendsInfo: {},
};

const friendsReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_FRIENDS:
      return {
        ...state,
        friendsInfo: action.friends,
      };
    default:
      return state;
  }
};
export default friendsReducer;
