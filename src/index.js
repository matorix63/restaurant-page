import { createHome } from "./home.js";
import { createAbout } from "./about.js";
import { createContact } from "./contact.js";

let homeButton = document.querySelector("#home");
let aboutButton = document.querySelector("#about");
let contactButton = document.querySelector("#contact");

homeButton.addEventListener("click", () => {
    createHome();
});

aboutButton.addEventListener("click", () => {
    createAbout();
});

contactButton.addEventListener("click", () => {
    createContact();
});
createHome();

