import * as user from "../profiles/index.mjs";
import { load } from "../storage/load.mjs";

export async function setUpdateProfileFormListener() {
    const form = document.querySelector("#editProfile");
  
    const { name, email } = load("profile");
  
    if (form) {
      form.name.value = name;
      form.email.value = email;
  
      const profile = await user.getProfileName(name);
  
      console.log("Avatar URL:", profile.data.avatar.url);
      console.log("Banner URL:", profile.data.banner.url);
  
      form.bio.value = profile.data.bio;
      form.avatarUrl.value = profile.data.avatar.url;
      form.avatarAlt.value = profile.data.avatar.alt;
      form.bannerUrl.value = profile.data.banner.url;
      form.bannerAlt.value = profile.data.banner.alt;
  
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const formData = new FormData(form); 
  
        const updatedProfile = {
          name: name,
          email: email,
          bio: formData.get("bio"),
          avatar: {
            url: formData.get("avatarUrl"),
            alt: formData.get("avatarAlt")
          },
          banner: {
            url: formData.get("bannerUrl"),
            alt: formData.get("bannerAlt")
          }
        };
  
        try {
          const response = await user.updateProfile(updatedProfile);
  
          if (response) {
            window.location.href = "/profile";
          } else {
            console.error("Update failed");
          }
        } catch (error) {
          console.error("Error updating profile", error);
        }
      });
    }
}
