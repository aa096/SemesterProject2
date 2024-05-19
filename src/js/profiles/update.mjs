import { API_AUCTION_URL } from "../api/constants.mjs";
import { authFetch } from "../api/authFetch.mjs";

const action = "/auction/profiles";
const method = "PUT";

export async function updateProfile(profileData) {
  if (!profileData.name) {
    throw new Error("Update requires a name");
  }

  const updateProfileURL = `${API_AUCTION_URL}${action}/${profileData.name}`;

  const response = await authFetch(updateProfileURL, {
    method,
    body: JSON.stringify(profileData),
  });

  return await response.json();
}
