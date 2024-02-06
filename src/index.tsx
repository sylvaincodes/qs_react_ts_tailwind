import * as React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const node = document.querySelector("#root") as HTMLElement;

const root = ReactDOM.createRoot(node);

root.render(<App />);
