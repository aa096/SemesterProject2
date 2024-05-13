const container1 = document.querySelector("#post-container");

export function listingsTemplate(item) {
    const divWrapper = document.createElement("div");
    divWrapper.classList.add("col-10", "text-center", "text-secondary");

    const listingsCard = document.createElement("div");
    listingsCard.classList.add("card");

    const idLink = document.createElement("a");
    idLink.href = "/auction/?id=" + item.id;

    if (item.media && item.media.length > 0) {
        const image = document.createElement("img");
        image.src = item.media[0].url || ""; 
        image.alt = item.media[0].alt || ""; 
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

    const listingInfo = document.createElement("p");
    listingInfo.textContent = `Ends at ${formattedDate} | ${item._count.bids} Bids`;
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

  