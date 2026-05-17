import { Header } from "../components/header.js";
import { Hero } from "../components/hero.js";
import { Footer } from "../components/footer.js";

export function Home() {
  return `
    <div>
      ${Header()}
      ${Hero()}

      ${Footer()}
    </div>
  `;
}
