import { activeListingsTemplate } from "./activeListings.mjs";

const parentContainer = document.getElementById("profileContainer");

export function profileTemplate(profile) {
    const heading = document.createElement("h1");
    heading.classList.add("text-secondary", "text-center", "my-5");
    heading.textContent = profile.data.name;

    const listingContainer = document.createElement("div");
    listingContainer.classList.add("container", "col-11", "bg-info", "mb-4", "pb-4");

    const topContainer = document.createElement("div");
    topContainer.classList.add("container", "col-11");

    const profileBanner = document.createElement("div");
    profileBanner.classList.add("profileBanner");

    profileBanner.style.backgroundImage = `url('${profile.data.banner.url}')`;
    profileBanner.style.backgroundSize = "cover";
    topContainer.appendChild(profileBanner);

    const contentContainer = document.createElement("div");
    contentContainer.classList.add("d-flex", "flex-wrap", "flex-lg-nowrap", "align-items-center", "avatar");

    const img = document.createElement("img");
    img.src = profile.data.avatar.url;
    img.alt = profile.data.avatar.alt;
    img.classList.add("mt-n5", "ms-n5");
    contentContainer.appendChild(img);

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("d-flex", "align-items-center", "flex-column", "text-secondary");

   const editBtn = document.createElement("button");
   editBtn.classList.add("btn", "btn-light", "text-secondary", "fw-bolder", "rounded-4");
   editBtn.textContent = "Edit Profile";
   editBtn.addEventListener("click", () => {
    window.location.href = "/profile/edit";
    });

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
    description.classList.add("mx-auto", "mt-3", "col-8", "col-lg-5");
    description.textContent = profile.data.bio;

    const historyDiv = activeListingsTemplate(profile);

    infoContainer.appendChild(bidsInfoContainer);
    infoContainer.appendChild(description);
    infoContainer.appendChild(editBtn)

    contentContainer.appendChild(infoContainer);

    listingContainer.appendChild(contentContainer);
    listingContainer.appendChild(historyDiv);

    parentContainer.appendChild(heading);
    parentContainer.appendChild(topContainer);
    parentContainer.appendChild(listingContainer);
}
