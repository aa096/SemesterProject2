import { formatDate } from "../utils/formatDate.mjs";

const mainContainer = document.querySelector("#featured");

export function indexTemplate(item) {
    const link = document.createElement("a");
    link.href = `/auction/?id=${item.data.id}`; 
    link.classList.add("text-decoration-none"); 

    const listingDiv = document.createElement("div");
    listingDiv.classList.add("container", "d-flex", "flex-wrap", "align-items-center", "justify-content-center", "scale");

    const imageColumn = document.createElement("div");
    imageColumn.classList.add("col-md-4");

    const image = document.createElement("img");
    image.classList.add("img-fluid", "mb-4");
    image.src = item.data.media[0].url; 
    image.alt = item.data.media[0].alt;

    imageColumn.appendChild(image);

    const contentColumn = document.createElement("div");
    contentColumn.classList.add("col-md-8", "text-secondary", "text-center", "fw-bolder");

    const title = document.createElement("h2");
    title.textContent = item.data.title;

    const formattedEndDate = formatDate(item.data.endsAt);
    const date = document.createElement("p");
    date.textContent = `Until ${formattedEndDate}`;

    const description = document.createElement("p");
    description.textContent = item.data.description;

    const button = document.createElement("button");
    button.textContent = "Explore";
    button.classList.add("btn", "btn-light", "border", "border-secondary", "text-secondary", "fw-bolder", "mb-4", "text-uppercase");

    contentColumn.appendChild(title);
    contentColumn.appendChild(date);
    contentColumn.appendChild(description);
    contentColumn.appendChild(button);

    listingDiv.appendChild(imageColumn);
    listingDiv.appendChild(contentColumn);

    link.appendChild(listingDiv);

    mainContainer.appendChild(link);
}
