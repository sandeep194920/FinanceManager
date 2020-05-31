import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// connecting react router
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import friendsReducer from "./components/EasySplit/store/friendsReducer";
import groupsReducer from "./components/EasySplit/store/groupsReducer";

const rootReducer = combineReducers({
  friends: friendsReducer,
  groups: groupsReducer,
});
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
