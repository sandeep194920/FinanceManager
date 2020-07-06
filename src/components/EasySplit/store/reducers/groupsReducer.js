import * as actionTypes from "../actions/actionTypes";

const initState = {
  groupsInfo: {},
  loading: true,
};

const groupsReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_GROUPS:
      return {
        ...state,
        groupsInfo: action.groups,
        loading: false,
      };
    default:
      return state;
  }
};
export default groupsReducer;
