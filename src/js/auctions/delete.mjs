import { API_AUCTION_URL } from "../api/constants.mjs";
import { authFetch } from "../api/authFetch.mjs";

const action = "/auction/listings";
const method = "DELETE";


export async function removeListing(id) {
  if (!id) {
    throw new Error("Deleting a listing requires an ID");
  }

  const updateListingURL = `${API_AUCTION_URL}${action}/${id}`;

  const response = await authFetch(updateListingURL, {
    method,
  });

  return await response.json();
}
