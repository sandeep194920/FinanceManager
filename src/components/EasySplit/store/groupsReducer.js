import { groupsInfo } from "../../../data/EasySplit/GroupsInfo";
const initState = {
  groupsInfo: groupsInfo,
};

const groupsReducer = (state = initState, action) => {
  console.log("Group Reducer implemented");
  return state;
};
export default groupsReducer;
