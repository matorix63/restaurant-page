let container = document.querySelector("#content");


function createHome() {
    container.innerHTML = "";
    let header = document.createElement("h1");
    let text = document.createElement("p");
    header.textContent = "Restaurant";
    text.textContent = "Welcome on our page! Click buttons above to navigate";
    container.append(header, text);
}

export { createHome };