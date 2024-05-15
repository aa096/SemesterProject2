const container1 = document.querySelector("#post-container");

export function listingsTemplate(item) {
    const divWrapper = document.createElement("div");
    divWrapper.classList.add("col-sm", "text-center", "text-secondary");

    const listingsCard = document.createElement("div");
    listingsCard.classList.add("text-center", "photo");

    const idLink = document.createElement("a");
    idLink.href = "/auction/?id=" + item.id;

    if (item.media && item.media.length > 0) {
        const image = document.createElement("img");
        image.src = item.media[0].url || ""; 
        image.alt = item.media[0].alt || ""; 
        image.classList.add("card-img-top", "object-fit-cover");
        listingsCard.appendChild(image);
    }

    const listingTitle = document.createElement("p");
    listingTitle.textContent = item.title;
    listingTitle.classList.add("text-secondary");

    const endsAtDate = new Date(item.endsAt);
    const formattedDate = endsAtDate.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short" 
    });

    const bidsCount = item._count && item._count.bids ? item._count.bids : 0;
    const bidsText = bidsCount === 1 ? "Bid" : "Bids";

    const listingInfo = document.createElement("p");
    listingInfo.textContent = `Ends at ${formattedDate} | ${bidsCount} ${bidsText}`;
    listingInfo.classList.add("text-secondary");

    idLink.appendChild(listingsCard);
    listingsCard.appendChild(listingTitle);
    listingsCard.appendChild(listingInfo);
    divWrapper.appendChild(idLink);  

  return divWrapper;
}

export function renderListingsTemplates(items) {
    const dataList = items?.data ?? [];

    container1.innerHTML = "";

    dataList.forEach((item) => {
        container1.appendChild(listingsTemplate(item));
    });
}

  