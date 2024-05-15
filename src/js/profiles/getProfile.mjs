import { API_AUCTION_URL } from "../api/constants.mjs";
import { authFetch } from "../api/authFetch.mjs"
import * as utils from "../utils/index.mjs"
import { load } from "../storage/load.mjs";

const action = "/auction/profiles";
// const action2 = "/posts";

export async function getProfiles() {
  try {
    utils.showLoadingIndicator();
    const updateProfileURL = `${API_AUCTION_URL}${action}`;

    const response = await authFetch(updateProfileURL);

    if (!response.ok) {
      throw new Error("Error, unable to fetch profile");
    }
    utils.hideLoadingIndicator();

    return await response.json();
  } catch (error) {
    utils.hideLoadingIndicator();
    throw error;
  }
}

export async function getProfile(profileData) {
  try {
    const profileName = load("profile");
   utils.showLoadingIndicator();

    if (!profileData.name) {
      throw new Error("Get requires a name");
    }

    const getProfileURL = `${API_AUCTION_URL}${action}/${profileData.name}`;

    const response = await authFetch(getProfileURL);
    utils.hideLoadingIndicator();

    return await response.json();
  } catch (error) {
    utils.hideLoadingIndicator();
    throw error;
  }
}


// export async function getProfilePost(profileData) {
//   try {
//     showLoadingIndicator();

//     if (!profileData.name) {
//       throw new Error("Get requires a name");
//     }

//     const getProfileURL = `${API_SOCIAL_URL}${action}/${profileData.name}${action2}?_author=true`;

//     const response = await authFetch(getProfileURL);
//     hideLoadingIndicator();

//     return await response.json();
//   } catch (error) {
//     hideLoadingIndicator();
//     throw error;
//   }
// }
