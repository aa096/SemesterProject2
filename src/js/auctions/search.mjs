import { API_AUCTION_URL } from "../api/constants.mjs";
import { authFetch } from "../api/authFetch.mjs";
import * as utils from "../utils/index.mjs";

export async function searchListings(query) {
  try {
    utils.showLoadingIndicator();

    const searchURL = `${API_AUCTION_URL}/auction/listings/search?q=${encodeURIComponent(query)}`;

    const response = await authFetch(searchURL);

    if (!response.ok) {
      throw new Error("Error, unable to fetch search results");
    }
    utils.hideLoadingIndicator();

    return await response.json();
  } catch (error) {
    utils.hideLoadingIndicator();
    throw error;
  }
}
