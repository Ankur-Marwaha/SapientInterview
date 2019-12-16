//https://dev.to/markusclaus/fetching-data-from-an-api-using-reactredux-55ao
import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./Reducers";

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  rootElement
);