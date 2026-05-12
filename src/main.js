import "./style.css";
import { Home } from "./pages/home.js";
import { Categories } from "./pages/categories.js";
import { initBurger } from "./js/header.js";

const app = document.querySelector("#Balloons-shop");

function render(page) {
  if (page === "home") app.innerHTML = Home();
  if (page === "categories") app.innerHTML = Categories();
}

window.render = render;

render("home");
initBurger();
