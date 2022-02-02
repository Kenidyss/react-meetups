import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { FavCtxProvider } from "./store/favorites-context";

ReactDOM.render(
  <FavCtxProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavCtxProvider>,
  document.getElementById("root")
);
