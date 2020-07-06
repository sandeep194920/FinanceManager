import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// connecting react router
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
<<<<<<< HEAD
<<<<<<< HEAD
import friendsReducer from "./components/EasySplit/store/reducers/friendsReducer";
import groupsReducer from "./components/EasySplit/store/reducers/groupsReducer";
=======
import friendsReducer from "./components/EasySplit/store/reducers/friends";
import groupsReducer from "./components/EasySplit/store/reducers/groups";
>>>>>>> develop
=======
import friendsReducer from "./components/EasySplit/store/reducers/friends";
import groupsReducer from "./components/EasySplit/store/reducers/groups";
>>>>>>> 6a1c4070ff7cd0b76b54ca690c994cdfcfb5f2c0
import thunk from "redux-thunk"; // the import name can be anything which is thunk here

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  friends: friendsReducer,
  groups: groupsReducer,
});
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
