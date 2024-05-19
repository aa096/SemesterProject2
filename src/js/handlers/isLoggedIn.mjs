import { checkLocalStorage } from "./checkStorage.mjs";

export function handleProfileLinkClick() {
    const profileBtn = document.querySelector("#proBtn")
    return function(event) {
      event.preventDefault();
  
      const isLoggedIn = checkLocalStorage();
      if (isLoggedIn) {
        window.location.href = "/profile";
      } else {
        window.location.href = "/profile/login";
      }
    };
}
