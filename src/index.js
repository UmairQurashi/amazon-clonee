import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// import { StateProvider } from "./Provider";
// import reducer, { initalState } from "./reducer";

ReactDOM.render(
  <BrowserRouter>
    {/* <StateProvider initalState={initalState} reducer={reducer}> */}
    <App />
    {/* </StateProvider> */}
  </BrowserRouter>,
  document.getElementById("root")
);
