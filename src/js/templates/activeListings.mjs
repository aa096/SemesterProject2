import { formatDate } from "../utils/formatDate.mjs";

export function activeListingsTemplate(profile) {
  const historyDiv = document.createElement("div");
  historyDiv.classList.add("bg-white", "rounded-4", "col-10", "mx-auto", "p-4", "history", "mt-4");

  if (profile.data.listings && Array.isArray(profile.data.listings)) {
    profile.data.listings.forEach((listing, index) => {
      const listingsRow = document.createElement("div");
      listingsRow.classList.add("d-flex", "align-items-center", "mb-3", "flex-column", "flex-md-row", "justify-content-between", "gap-2");

      const listingImg = document.createElement("img");
      if (listing.media && Array.isArray(listing.media) && listing.media.length > 0) {
        listingImg.src = listing.media[0].url; 
        listingImg.alt = listing.media[0].alt; 
        listingImg.classList.add("img-fluid"); 
        listingsRow.appendChild(listingImg); 
      }

      const itemText = document.createElement("p");
      itemText.classList.add("text-secondary", "mb-0"); 
      itemText.textContent = listing.title; 
      listingsRow.appendChild(itemText); 

      const clockCreatedAtContainer = document.createElement("div");
      clockCreatedAtContainer.classList.add("d-flex", "align-items-center", "gap-3");

      const clockIcon = document.createElement("i");
      clockIcon.classList.add("fa-solid", "fa-clock", "text-secondary", "fs-3");
      clockCreatedAtContainer.appendChild(clockIcon);

      const endsAt = listing.endsAt;
      const formattedEndsAt = formatDate(endsAt);

      const createdAtElement = document.createElement("span");
      createdAtElement.classList.add("text-secondary");
      createdAtElement.textContent = formattedEndsAt;
      clockCreatedAtContainer.appendChild(createdAtElement);

      listingsRow.appendChild(clockCreatedAtContainer);

      historyDiv.appendChild(listingsRow);

      if (index < profile.data.listings.length - 1) {
        const hr = document.createElement("hr");
        hr.classList.add("text-secondary", "my-3"); 
        historyDiv.appendChild(hr);
      }
    });
  }

  return historyDiv;
}
