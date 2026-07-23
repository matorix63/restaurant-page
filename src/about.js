export function loadAbout(container) {
  const about = document.createElement("section");
  about.classList.add("about");

  const heading = document.createElement("h2");
  heading.textContent = "Our story";

  const paragraphs = [
    "We started in 2011 with only a small kitchen.",
    "Everything is cooked over a wood fire.",
  ];

  about.appendChild(heading);
  paragraphs.forEach((text) => {
    const p = document.createElement("p");
    p.textContent = text;
    about.appendChild(p);
  });

  const contact = document.createElement("ul");
  contact.classList.add("contact-list");

  const details = [
    { label: "Phone", value: "+48 123 456 789" },
    { label: "Email", value: "hello@restaurant.example" },
    { label: "Address", value: "Middle Street, 12" },
  ];

  details.forEach((detail) => {
    const li = document.createElement("li");
    const label = document.createElement("strong");
    label.textContent = detail.label;
    li.append(label, detail.value);
    contact.appendChild(li);
  });

  about.appendChild(contact);
  container.appendChild(about);
}
