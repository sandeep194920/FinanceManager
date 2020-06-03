import axios from "../../../../axios-easysplit";
import * as actionTypes from "../actions/actionTypes";

// fetching groups from backend using thunk

// helper for groups fetch (sync) helper
export const setGroups = (groups) => {
  return {
    type: actionTypes.SET_GROUPS,
    groups: groups,
  };
};

// fetch ingredients failed (sync) helper
export const fetchGroupsFailed = () => {
  return {
    type: actionTypes.SET_GROUPS_FAILED,
  };
};

// actual aync action creator to get groups
export const initGroups = () => {
  return (dispatch) => {
    axios
      .get("groups.json")
      .then((response) => dispatch(setGroups(response.data)))
      .catch((error) => dispatch(fetchGroupsFailed()));
  };
};
