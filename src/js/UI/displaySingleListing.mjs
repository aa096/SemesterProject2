import * as templates from "../templates/index.mjs"
import { getListing } from "../auctions/read.mjs";
import * as utils from "../utils/index.mjs"

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

export async function displaySingleListing() {
  try {
    const item = await getListing(id);
    templates.getTitle(item);
    templates.listingTemplate(item);

  } catch (error) {
    utils.showError(error.message, "#auction");
  }
}

