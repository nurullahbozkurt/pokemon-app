import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./style.css";
import App from "./App";
import AppContextProvider from "./context/app";

ReactDOM.render(
  <BrowserRouter>
    <AppContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AppContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
