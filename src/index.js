import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Headline from "./Headline";
import Count from "./Countdown";
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
// const root1 = ReactDOM.createRoot(document.getElementById("root1"));
// root1.render(
// <Count/>
// );

// const root2 = ReactDOM.createRoot(document.getElementById("canvas_container"));

// root2.render(<Headline />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
