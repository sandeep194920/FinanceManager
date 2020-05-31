import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// connecting react router
import { Provider } from "react-redux";
import { createStore } from "redux";
import friendsReducer from "./components/EasySplit/store/friendsReducer";

const store = createStore(friendsReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
