import { API_AUCTION_URL, API_KEY } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import * as utils from "../../utils/index.mjs"
import { load } from "../../storage/index.mjs";

const action = "/auction/listings";

export async function getListings() {
    try {
      utils.showLoadingIndicator();
  
      const getListingsURL = `${API_AUCTION_URL}${action}`;
  
      const response = await authFetch(getListingsURL, {
        headers: {
          Authorization: `Bearer ${load("token")}`,
          "X-Noroff-API-key": API_KEY
        }
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

    const getListingURL = `${API_AUCTION_URL}${action}/${id}?_author=true`;

    const response = await authFetch(getListingURL);

    utils.hideLoadingIndicator();

    return await response.json();
  } catch (error) {
    utils.hideLoadingIndicator();
    throw error;
  }
}
