import { friendsInfo } from "../../../data/EasySplit/FriendsInfo";
const initState = {
  friendsInfo: { ...friendsInfo },
  test: "Test is Sandeep",
};

const friendsReducer = (state = initState, action) => {
  console.log("Reducer implemented");
  return state;
};
export default friendsReducer;
