// import { groupsInfo } from "../../../../data/EasySplit/GroupsInfo";
import * as actionTypes from "../actions/actionTypes";

const initState = {
  groupsInfo: {},
};

const groupsReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_GROUPS:
      return {
        ...state,
        groupsInfo: action.groups,
      };
    default:
      return state;
  }
};
export default groupsReducer;
