import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import * as utils from "../../utils/index.mjs"

const action = "/auctions";


export async function getListing(id) {
  try {
    utils.showLoadingIndicator();

    if (!id) {
      throw new Error("Get requires an ID");
    }

    const getListingURL = `${API_AUCTION_URL}${action}/${id}?_author=true`;

    const response = await authFetch(getListingURL);

    utils.hideLoadingIndicator();

    return await response.json();
  } catch (error) {
    utils.hideLoadingIndicator();
    throw error;
  }
}
