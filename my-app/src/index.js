import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

root.render(
  <BrowserRouter>
    <App storedTasks={storedTasks} />
  </BrowserRouter>
);