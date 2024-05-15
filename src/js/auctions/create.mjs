import { API_AUCTION_URL } from "../api/constants.mjs";
import { authFetch } from "../api/authFetch.mjs";

const action = "/auction/listings";
const method = "POST";


export async function createListing(listingData) {
  const createListingURL = API_AUCTION_URL + action;

  const response = await authFetch(createListingURL, {
    method,
    body: JSON.stringify(listingData),
  });

  const responseData = await response.json();

  if (response.ok) {
    window.location.reload();
  } else {
    console.error("Error creating post:", responseData.error);
  }

  return responseData;
}