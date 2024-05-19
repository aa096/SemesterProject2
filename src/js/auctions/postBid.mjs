import { API_AUCTION_URL } from "../api/constants.mjs";
import { authFetch } from "../api/authFetch.mjs";

const action = "/auction/listings/";
const method = "POST";

export async function postBid(listingId, bid) {
  const postBidURL = `${API_AUCTION_URL}${action}${listingId}/bids`

  const response = await authFetch(postBidURL, {
    method,
    body: JSON.stringify(bid),
  });

  const responseData = await response.json();
  console.log(responseData)

  if (response.ok) {
    window.location.reload();
  } else {
    console.error("Failed to post bid", responseData.errors);
  }

  return responseData;
}


  
