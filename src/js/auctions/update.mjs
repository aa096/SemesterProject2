import { API_AUCTION_URL } from "../api/constants.mjs";
import { authFetch } from "../api/authFetch.mjs";

const action = "/auctions";
const method = "put";

export async function updateListing(listingsData) {
  if (!listingsData.id) {
    throw new Error("Update requires a postID");
  }

  const updateListingURL = `${API_AUCTION_URL}${action}/${listingsData.id}`;

  const response = await authFetch(updateListingURL, {
    method,
    body: JSON.stringify(listingsDataData),
  });

  return await response.json();
}
