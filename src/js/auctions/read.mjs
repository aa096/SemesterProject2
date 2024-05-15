import { API_AUCTION_URL, API_KEY } from "../api/constants.mjs";
import { authFetch } from "../api/authFetch.mjs";
import * as utils from "../utils/index.mjs"

const action = "/auction/listings";

export async function getListings() {
    try {
      utils.showLoadingIndicator();
  
      const getListingsURL = `${API_AUCTION_URL}${action}?page=1&limit=100&sort=title&sortOrder=asc`;
  
      const response = await authFetch(getListingsURL, {
      });
  
      if (!response.ok) {
        throw new Error("Error, unable to fetch listings");
      }
      utils.hideLoadingIndicator();
  
      return await response.json();
    } catch (error) {
      utils.hideLoadingIndicator();
      throw error;
    }
  }


export async function getListing(id) {
  try {
    utils.showLoadingIndicator();

    if (!id) {
      throw new Error("Get requires an ID");
    }

    const getListingURL = `${API_AUCTION_URL}${action}/${id}?_seller=true&_bids=true`;

    const response = await authFetch(getListingURL);

    utils.hideLoadingIndicator();

    return await response.json();
  } catch (error) {
    utils.hideLoadingIndicator();
    throw error;
  }
}
