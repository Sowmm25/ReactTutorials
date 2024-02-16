import React from "react";
import  ReactDOM  from "react-dom/client";
import {App} from "./app"
import "./index.css";
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    //to use component add tags to it
    <React.StrictMode>
        <App/>
     {//   <h1>Hello!</h1>
      // <p>Subtitle</p>
     }
    </React.StrictMode>//strictmode- activates additional checks
);