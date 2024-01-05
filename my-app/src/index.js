import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import i18n from './i18n';
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

root.render(
  <BrowserRouter>
    <App storedTasks={storedTasks} />
  </BrowserRouter>
);
