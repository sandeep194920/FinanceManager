import { friendsInfo } from "../../../../data/EasySplit/FriendsInfo";
const initState = {
  friendsInfo: friendsInfo,
};

const friendsReducer = (state = initState, action) => {
  console.log("Reducer implemented");
  return state;
};
export default friendsReducer;
