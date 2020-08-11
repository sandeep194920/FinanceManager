import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// connecting react router
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import friendsReducer from "./components/EasySplit/store/reducers/friends";
import groupsReducer from "./components/EasySplit/store/reducers/groups";
// import authReducer from "./components/store/reducers/auth";
import thunk from "redux-thunk"; // the import name can be anything which is thunk here
// import { reduxFirestore, getFirestore } from "redux-firestore";
// import fbconfig from "./firebase";
// import { getFirebase } from "react-redux-firebase";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  friends: friendsReducer,
  groups: groupsReducer,
  // auth: authReducer,
});
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
    // reduxFirestore(fbconfig)
    // reactReduxFirebase(fbconfig)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
