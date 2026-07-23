import "./styles.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";

const app = document.querySelector("#app");

const header = document.createElement("header");
const brand = document.createElement("h1");
brand.classList.add("brand");
brand.textContent = "Restaurant";

const nav = document.createElement("nav");
const tabs = [
  { name: "Home", loader: loadHome },
  { name: "Menu", loader: loadMenu },
  { name: "About", loader: loadAbout },
];

const content = document.createElement("main");
content.id = "content";

tabs.forEach((tab) => {
  const button = document.createElement("button");
  button.classList.add("tab-btn");
  button.textContent = tab.name;
  button.addEventListener("click", () => selectTab(tab, button));
  nav.appendChild(button);
});

function selectTab(tab, button) {
  nav.querySelectorAll(".tab-btn").forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");
  content.innerHTML = "";
  tab.loader(content);
}

header.append(brand, nav);
app.append(header, content);

selectTab(tabs[0], nav.querySelector(".tab-btn"));
