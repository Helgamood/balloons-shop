import "./style.css";

import { Header } from "./components/header.js";

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="balloons-shop">
      ${Header()}

  </div>
`;