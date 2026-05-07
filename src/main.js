import "./style.css";
import { Home } from "./pages/home.js";
import { Categories } from "./pages/categories.js";

const app = document.querySelector("#app");

function render(page) {
  if (page === "home") app.innerHTML = Home();
  if (page === "categories") app.innerHTML = Categories();
}

window.render = render; 

render("home");
