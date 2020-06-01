import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// connecting react router
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import friendsReducer from "./components/EasySplit/store/reducers/friendsReducer";
import groupsReducer from "./components/EasySplit/store/reducers/groupsReducer";
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
