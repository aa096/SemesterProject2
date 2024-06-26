import { getListing } from "../auctions/read.mjs";
import { updateListing } from "../auctions/update.mjs";

export async function setUpdateListingFormListener() {
    const form = document.querySelector("#updateListing");

    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    if (form) {
        const button = form.querySelector("button");
        button.disabled = true;

        const listing = await getListing(id);

        form.title.value = listing.data.title;
        form.description.value = listing.data.description;
        form.mediaUrl.value = listing.data.media[0].url;
        form.mediaAlt.value = listing.data.media[0].alt;
        form.tags.value = listing.data.tags;

        button.disabled = false;

        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            const formData = new FormData(form); 
            const tags = formData.get("tags") ? formData.get("tags").split(",") : [];
            const updatedListing = {
                id: id,
                title: formData.get("title"),
                description: formData.get("description"),
                media: [{
                    url: formData.get("mediaUrl"),
                    alt: formData.get("mediaAlt")
                }],
                tags: tags 
            };

            try {
                await updateListing(updatedListing);
                window.location.href = `/auction/?id=${id}`;
            } catch (error) {
                console.error("Error updating Listing", error);
            }
        });
    }
}
