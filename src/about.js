let container = document.querySelector("#content");


function createAbout() {
    container.innerHTML = "";
    let header = document.createElement("h1");
    let text = document.createElement("p");
    header.textContent = "About Us";
    text.textContent = "Our restaurant is placed on lemon street. We were founded in 1877";
    container.append(header, text);
}

export { createAbout };