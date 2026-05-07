import { Header } from "../components/header.js";
import { Hero } from "../components/hero.js";

export function Home() {
  return `
    <div>
      ${Header()}
      ${Hero()}

    </div>
  `;
}
