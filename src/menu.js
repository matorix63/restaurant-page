const MENU = [
  {
    section: "Starters",
    items: [
      { name: "Charred leeks", description: "Hazelnut, brown butter, soft egg", price: "9" },
      { name: "Sourdough & cultured butter", description: "Baked every afternoon", price: "5" },
      { name: "Beet tartare", description: "Smoked yogurt, rye crumbs, dill", price: "10" },
    ],
  },
  {
    section: "Mains",
    items: [
      { name: "Ember-roasted chicken", description: "Half bird, charred lemon, pan jus", price: "22" },
      { name: "Mushroom orzotto", description: "Pearl barley, porcini, aged cheese", price: "18" },
      { name: "Grilled trout", description: "Fennel, capers, new potatoes", price: "24" },
    ],
  },
  {
    section: "Desserts",
    items: [
      { name: "Burnt honey tart", description: "Creme fraiche, thyme", price: "8" },
      { name: "Chocolate & olive oil", description: "Sea salt, toasted bread", price: "8" },
    ],
  },
];

export function loadMenu(container) {
  MENU.forEach((group) => {
    const section = document.createElement("section");
    section.classList.add("menu-section");

    const heading = document.createElement("h2");
    heading.textContent = group.section;
    section.appendChild(heading);

    group.items.forEach((item) => {
      const row = document.createElement("article");
      row.classList.add("menu-item");

      const text = document.createElement("div");
      const name = document.createElement("h3");
      name.textContent = item.name;
      const description = document.createElement("p");
      description.textContent = item.description;
      text.append(name, description);

      const price = document.createElement("span");
      price.classList.add("price");
      price.textContent = `${item.price} €`;

      row.append(text, price);
      section.appendChild(row);
    });

    container.appendChild(section);
  });
}
