import { load } from "../storage/load.mjs";
import { formatDate } from "../utils/formatDate.mjs";

const parentContainer = document.querySelector("#auction");

export function listingTemplate(item) {
  const profile = load("profile");
  const isOwner = profile && item.data.seller.email === profile.email;

  const heading = document.createElement("h1");
  heading.classList.add("text-secondary", "text-center", "my-5");
  heading.textContent = item.data.title;

  const listingContainer = document.createElement("div");
  listingContainer.classList.add("container", "col-10", "bg-secondary", "mb-4");

  const contentContainer = document.createElement("div");
  contentContainer.classList.add("d-flex", "flex-wrap", "flex-lg-nowrap","customImage");

  if (item.data.media && item.data.media[0]) {
    const img = document.createElement("img");
    img.src = item.data.media[0].url;
    img.alt = item.data.media[0].alt;
    img.classList.add("mt-n4", "ms-lg-n5");
    contentContainer.appendChild(img);
  }

  const infoContainer = document.createElement("div");
  infoContainer.classList.add("d-flex", "flex-column");

  const bidsInfoContainer = document.createElement("div");
  bidsInfoContainer.classList.add("d-flex", "gap-3", "mt-4", "mx-auto", "ms-lg-1","mx-xl-auto");
 
  const coinIcon = document.createElement("i");
  coinIcon.classList.add("fa-solid", "fa-coins", "fs-3");

  const bidsCount = item.data._count && item.data._count.bids ? item.data._count.bids : 0;
  const highestBid = item.data.bids && item.data.bids.length > 0 ? Math.max(...item.data.bids.map(bid => bid.amount)) : 0;
  
  const bidsText = bidsCount === 1 ? "Bid" : "Bids";
  const bidsInfo = document.createElement("p");
  bidsInfo.textContent = `${bidsCount} ${bidsText} | ${highestBid} Credits`;

  const clockIcon = document.createElement("i");
  clockIcon.classList.add("fa-solid", "fa-clock", "fs-3");

  const formattedEndDate = formatDate(item.data.endsAt);

  const endDateInfo = document.createElement("p");
  endDateInfo.textContent = formattedEndDate;

  bidsInfoContainer.appendChild(coinIcon);
  bidsInfoContainer.appendChild(bidsInfo);
  bidsInfoContainer.appendChild(clockIcon);
  bidsInfoContainer.appendChild(endDateInfo);

  const description = document.createElement("p");
  description.classList.add("col-10", "mx-auto", "mt-3");
  description.textContent = item.data.description;

const dropdownContainer = document.createElement("div");
dropdownContainer.classList.add("btn-group", "col-1", "d-flex","justify-content-center", "mx-auto", "mt-2");

const dropdownToggle = document.createElement("button");
dropdownToggle.classList.add("btn", "text-secondary", "btn-light", "dropdown-toggle", "rounded-start-4", "rounded-end-0");
dropdownToggle.setAttribute("type", "button");
dropdownToggle.setAttribute("data-bs-toggle", "dropdown");
dropdownToggle.setAttribute("aria-expanded", "false");
dropdownToggle.textContent = "Choose your bid";

const dropdownMenu = document.createElement("ul");
dropdownMenu.classList.add("dropdown-menu");

const nextBidOptions = [highestBid + 1, highestBid + 5, highestBid + 10]; 

nextBidOptions.forEach((bidAmount) => {
  const menuItem = document.createElement("li");
  const menuItemLink = document.createElement("a");
  menuItemLink.classList.add("dropdown-item", "text-secondary");
  menuItemLink.setAttribute("href", "#");
  menuItemLink.textContent = `Next Bid: ${bidAmount} Credits`;
  menuItem.appendChild(menuItemLink);
  dropdownMenu.appendChild(menuItem);
});

const submitButton = document.createElement("button");
submitButton.classList.add("btn", "btn-secondary", "text-white", "border", "rounded-end-4");
submitButton.setAttribute("type", "button");
submitButton.textContent = "Submit";

dropdownContainer.appendChild(dropdownToggle);
dropdownContainer.appendChild(dropdownMenu);
dropdownContainer.appendChild(submitButton);

const createdByDiv = document.createElement("div");
createdByDiv.classList.add("d-flex", "customAvatar", "position-relative", "my-4", "me-4" );

const formattedCreatedDate = formatDate(item.data.created);

const createdByText = document.createElement("p");
createdByText.classList.add("col-4", "mx-auto", "mt-4");
createdByText.textContent = `Created by ${item.data.seller.name} on ${formattedCreatedDate}`;

createdByDiv.appendChild(createdByText);

if (item.data.seller.avatar) {
    const imgAvatar = document.createElement("img");
    imgAvatar.src = item.data.seller.avatar.url;
    imgAvatar.alt = item.data.seller.avatar.url;
    
    const avatarIcon = document.createElement("i");
    avatarIcon.classList.add("fa-solid", "fa-user-clock", "customI", "position-absolute", "fs-2");

    createdByDiv.appendChild(imgAvatar);
    createdByDiv.appendChild(avatarIcon);
  }

  


  infoContainer.appendChild(bidsInfoContainer);
  infoContainer.appendChild(description);
  infoContainer.appendChild(dropdownContainer);
  infoContainer.appendChild(createdByDiv);

  contentContainer.appendChild(infoContainer);
  listingContainer.appendChild(contentContainer);

  parentContainer.appendChild(heading);
  parentContainer.appendChild(listingContainer);
}
