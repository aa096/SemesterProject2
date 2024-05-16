import { createListing } from "../auctions/create.mjs";

export function setCreateListingFormListener() {
  const form = document.querySelector("#createListing");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const listing = Object.fromEntries(formData.entries());
    
      const mediaUrl = formData.get("mediaUrl");
      const mediaAlt = formData.get("mediaAlt") || ""; 

        const mediaObject = {
          url: mediaUrl,
          alt: mediaAlt
        };

      const payload = {
        title: formData.get("title"),
        description: formData.get("description"),
        media: [mediaObject],
        endsAt: new Date(formData.get ("deadlineDate")).toISOString()
      }

      createListing(payload);
    });
  }
}
