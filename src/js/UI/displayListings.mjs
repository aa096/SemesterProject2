import * as templates from "../templates/index.mjs"
import * as utils from "../utils/index.mjs"
import * as listings from "../auctions/index.mjs"

export async function showListings() {
    try {
      const item = await listings.getListings();
      templates.renderListingsTemplates(item);
    } catch (error) {
      utils.showError(error.message, "#post-container");
    }
  }
  