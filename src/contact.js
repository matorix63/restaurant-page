let container = document.querySelector("#content");


function createContact() {
    container.innerHTML = "";
    let header = document.createElement("h1");
    let text = document.createElement("p");
    header.textContent = "Contact";
    text.textContent = "Want to make an order? Call us: +1 123 456 789";
    container.append(header, text);
}

export { createContact };