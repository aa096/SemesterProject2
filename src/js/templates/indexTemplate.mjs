import { formatDate } from "../utils/formatDate.mjs";

const mainContainer = document.querySelector("#featured")

export function indexTemplate(item) {
    const featuredDiv = document.createElement("div");
    featuredDiv.classList.add("container", "col-11", "d-flex")

    const heading = document.createElement("h1");
    heading.classList.add("text-uppercase");
    heading.textContent = item.data.title;

    const special = document.createElement("p");
    special.classList.add("text-uppercase");
    special.textContent = item.data.title;

    const formattedEndDate = formatDate(item.data.endsAt);

    const until = document.createElement("p");
    until.classList.add("text-uppercase");
    until.textContent = formattedEndDate;

    featuredDiv.appendChild(heading);
    featuredDiv.appendChild(special);
    featuredDiv.appendChild(until);

    mainContainer.appendChild(featuredDiv);
}