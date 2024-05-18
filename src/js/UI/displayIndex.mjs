import * as templates from "../templates/index.mjs"
import { getListings } from "../auctions/read.mjs";
import * as utils from "../utils/index.mjs"

export async function displayIndexTemplate(item) {
  try {
    const item = await getListings();
  
    for (let i = 0; i < items.length; i++) {
        const listing = items[i];

       if (listing.id && listing.id.includes("67561f39-fd99-4c8e-8c45-2d5e653b30a1")) {
            templates.indexTemplate(item);
        }
    }

  } catch (error) {
    utils.showError(error.message, "#featured");
  }
}

