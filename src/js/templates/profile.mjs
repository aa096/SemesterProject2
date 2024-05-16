const parentContainer = document.getElementById("profileContainer");

export function profileTemplate(profile) {
    const heading = document.createElement("h1");
    heading.classList.add("text-secondary", "text-center", "my-5");
    heading.textContent = profile.data.name;

    const listingContainer = document.createElement("div");
    listingContainer.classList.add("container", "col-11", "bg-secondary", "mb-4", "pb-4");

    const topContainer = document.createElement("div");
    topContainer.classList.add("container", "col-11", "top-image", "mx-4");

    const topImage = document.createElement("img");
    topImage.src = profile.data.banner.url;
    topImage.alt = profile.data.banner.alt;
    topImage.className = "rounded-top-5";

    topContainer.appendChild(topImage);

    const contentContainer = document.createElement("div");
    contentContainer.classList.add("d-flex", "flex-wrap", "flex-lg-nowrap", "avatar");

    const img = document.createElement("img");
    img.src = profile.data.avatar.url;
    img.alt = profile.data.avatar.alt;
    img.classList.add("mt-n5", "ms-n5");
    contentContainer.appendChild(img);

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("d-flex", "flex-column");

    const bidsInfoContainer = document.createElement("div");
    bidsInfoContainer.classList.add("d-flex", "ms-4", "gap-3", "mt-3");

    const coinIcon = document.createElement("i");
    coinIcon.classList.add("fa-solid", "fa-coins", "fs-3");

    const credits = document.createElement("p");
    credits.classList.add("fs-6")
    credits.textContent = `${profile.data.credits} Credits`;

    bidsInfoContainer.appendChild(coinIcon);
    bidsInfoContainer.appendChild(credits);

    const description = document.createElement("p");
    description.classList.add("mx-auto", "mt-3");
    description.textContent = profile.data.bio;

    infoContainer.appendChild(bidsInfoContainer);
    infoContainer.appendChild(description);

    contentContainer.appendChild(infoContainer);

    listingContainer.appendChild(contentContainer);

    parentContainer.appendChild(heading);
    parentContainer.appendChild(topContainer);
    parentContainer.appendChild(listingContainer);
}