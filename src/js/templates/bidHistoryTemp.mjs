import { formatDateAndTime } from "../utils/formatDate.mjs";

export function bidHistoryTemplate(item) {
  const historyDiv = document.createElement("div");
  historyDiv.classList.add("bg-white", "rounded-4", "col-10", "mx-auto", "p-4", "history");

  if (item.data && Array.isArray(item.data.bids) && item.data.bids.length > 0) {
    item.data.bids.forEach((bid, index) => {
      const bidderAvatar = document.createElement("img");
      if (bid.bidder && bid.bidder.avatar) {
        bidderAvatar.src = bid.bidder.avatar.url;
        bidderAvatar.alt = bid.bidder.avatar.alt;

        const createdAt = bid.created;
        const formattedCreatedAt = formatDateAndTime(createdAt);

        const clockIcon = document.createElement("i");
        clockIcon.classList.add("fa-solid", "fa-clock", "text-secondary", "fs-3");

        const createdAtElement = document.createElement("span");
        createdAtElement.classList.add("text-secondary");
        createdAtElement.textContent = formattedCreatedAt;

        const coinIcon = document.createElement("i");
        coinIcon.classList.add("fa-solid", "fa-coins", "text-secondary", "fs-3");

        const amount = document.createElement("span");
        amount.classList.add("text-secondary");
        amount.textContent = `${bid.amount} Credits`;

        const bidRow = document.createElement("div");
        bidRow.classList.add("d-flex", "align-items-center", "mb-3", "flex-column", "flex-md-row", "justify-content-between", "gap-2");

        bidRow.appendChild(bidderAvatar);

        const clockCreatedAtContainer = document.createElement("div");
        clockCreatedAtContainer.classList.add("d-flex", "align-items-center", "me-4", "gap-3");

        clockCreatedAtContainer.appendChild(clockIcon);
        clockCreatedAtContainer.appendChild(createdAtElement);
        bidRow.appendChild(clockCreatedAtContainer);

        const coinAmountContainer = document.createElement("div");
        coinAmountContainer.classList.add("d-flex", "align-items-center", "gap-3");

        coinAmountContainer.appendChild(coinIcon);
        coinAmountContainer.appendChild(amount);
        bidRow.appendChild(coinAmountContainer);

        historyDiv.appendChild(bidRow);

        if (index < item.data.bids.length - 1) {
          const hr = document.createElement("hr");
          hr.classList.add("text-secondary");
          historyDiv.appendChild(hr);
        }
      }
    });
  } else {
    const noBidsMessage = document.createElement("p");
    noBidsMessage.classList.add("text-secondary", "text-center", "my-3");
    noBidsMessage.textContent = "No Bids Placed";
    historyDiv.appendChild(noBidsMessage);
  }

  return historyDiv;
}
