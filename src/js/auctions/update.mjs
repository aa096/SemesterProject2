import { API_AUCTION_URL } from "../api/constants.mjs";
import { authFetch } from "../api/authFetch.mjs";

const action = "/auction/listings";
const method = "PUT";

export async function updateListing(listingsData) {
  if (!listingsData.id) {
    throw new Error("Update requires a postID");
  }

  const updateListingURL = `${API_AUCTION_URL}${action}/${listingsData.id}`;

  const response = await authFetch(updateListingURL, {
    method,
    body: JSON.stringify(listingsData),
  });

  return await response.json();
}
