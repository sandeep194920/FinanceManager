import * as actionTypes from "../actions/actionTypes";
import { friendsInfo } from "../../../../data/EasySplit/FriendsInfo";

const initState = {
  friendsInfo: [],
  loading: true,
};

const friendsReducer = (state = initState, action) => {
  console.log("Friends info with in the app ");
  console.log(friendsInfo);
  switch (action.type) {
    case actionTypes.SET_FRIENDS:
      console.log("REACHED SETFRIENDS reducer");
      return {
        ...state,
        friendsInfo: action.friends,
        loading: false,
      };
    default:
      return state;
  }
};
export default friendsReducer;
