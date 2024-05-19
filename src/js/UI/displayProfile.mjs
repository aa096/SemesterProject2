import * as utils from "../utils/index.mjs"
import { getProfile } from "../profiles/getProfile.mjs";
import { load } from "../storage/load.mjs";
import * as templates from "../templates/index.mjs"

export async function showProfile() {
    try {
      const profileName = load("profile");
  
      if (!profileName) {
        throw new Error("Profile name not found in localStorage");
      }
  
      const profile = await getProfile(profileName);
      templates.profileTemplate(profile);
    } catch (error) {
      utils.showError(error.message, "#profileContainer");
    }
  }