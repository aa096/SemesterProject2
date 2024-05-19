import * as templates from "../templates/index.mjs"
import { getListing } from "../auctions/read.mjs";
import { getListingsLastChance } from "../auctions/read.mjs";
import * as utils from "../utils/index.mjs";

export async function displayIndexTemplate(postId) {
    try {
        const featured = await getListing(postId);
        templates.indexTemplate(featured)
    } catch (error) {
        utils.showError(error.message, "#featured");
    }
}

export async function displayLastChance() {
    try {
      const items = await getListingsLastChance();
      templates.renderListingsTemplatesLast(items) ;
    } catch (error) {
      utils.showError(error.message, "#last-container");
    }
  }
  
