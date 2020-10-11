import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import App from "./components/App";

//css
import "./styles/App.css";

ReactDOM.render(
  <React.StrictMode>
    <App className="app" />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
