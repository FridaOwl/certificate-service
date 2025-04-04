import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.sass";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import "./helpers/i18n/i18n";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
