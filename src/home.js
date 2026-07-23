import heroImage from "./assets/hero.jpg";

export function loadHome(container) {
  const hero = document.createElement("section");
  hero.classList.add("hero");

  const img = document.createElement("img");
  img.src = heroImage;
  img.alt = "Image of a plate full of food";

  const heading = document.createElement("h2");
  heading.textContent = "Seasonal cooking";

  const tagline = document.createElement("p");
  tagline.classList.add("tagline");
  tagline.textContent = "A small neighborhood bistro";

  const infoRow = document.createElement("div");
  infoRow.classList.add("info-row");

  const infoBoxes = [
    { title: "Hours", text: "Mon - Sat, 3pm to 2am." },
    { title: "Location", text: "Middle Street, 12" },
    { title: "Reservations", text: "Tables of 5+ should call ahead." },
  ];

  infoBoxes.forEach((info) => {
    const box = document.createElement("div");
    box.classList.add("info-box");
    const title = document.createElement("h3");
    title.textContent = info.title;
    const text = document.createElement("p");
    text.textContent = info.text;
    box.append(title, text);
    infoRow.appendChild(box);
  });

  hero.append(img, heading, tagline, infoRow);
  container.appendChild(hero);
}
