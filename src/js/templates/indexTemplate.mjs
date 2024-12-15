const mainContainer = document.querySelector("#featured");

export function indexTemplate() {
    const link = document.createElement("a");
    link.href = ``; 
    link.classList.add("text-decoration-none"); 

    const listingDiv = document.createElement("div");
    listingDiv.classList.add("container", "d-flex", "flex-wrap", "align-items-center", "justify-content-center", "ind");

    const imageColumn = document.createElement("div");
    imageColumn.classList.add("col-md-8", "p-4");

    const image = document.createElement("img");
    image.classList.add("img-fluid", "mb-4");
    image.src = "images/teacup.jpg"; 
    image.alt = "A small antique teacup";

    imageColumn.appendChild(image);

    const contentColumn = document.createElement("div");
    contentColumn.classList.add("col", "text-secondary", "text-center", "fw-bolder", "pl-12");

    const title = document.createElement("h2");
    title.classList.add("text-uppercase");
    title.textContent = "Tea & Treasure";

    const date = document.createElement("p");
    date.classList.add("text-uppercase");
    date.textContent = "Until 31 May" ;

    const description = document.createElement("p");
    description.classList.add("text-uppercase");
    description.textContent = "Special Auction";

    const button = document.createElement("button");
    button.textContent = "Explore";
    button.classList.add("btn", "btn-light", "border", "border-secondary", "text-secondary", "fw-bolder", "mb-4", "pb-8", "text-uppercase");

    contentColumn.appendChild(title);
    contentColumn.appendChild(description);
    contentColumn.appendChild(date);
    contentColumn.appendChild(button);

    listingDiv.appendChild(imageColumn);
    listingDiv.appendChild(contentColumn);

    link.appendChild(listingDiv);

    mainContainer.appendChild(link);
}
