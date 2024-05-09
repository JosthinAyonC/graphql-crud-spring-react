import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GraphQLApp } from "./GraphQLApp";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GraphQLApp />
    </BrowserRouter>
  </React.StrictMode>
);
