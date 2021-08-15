import React from "react";
import ReactDOM from "react-dom";
import "./globalstyles/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import VagasProvider from "./context/VagasContext";

ReactDOM.render(
  <VagasProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </VagasProvider>,
  document.getElementById("root")
);
