import { remove } from "../storage/remove.mjs";

document.addEventListener("DOMContentLoaded", function () {
  const logoutLink = document.getElementById("logoutLink");

  if (logoutLink) {
    logoutLink.addEventListener("click", function (event) {
      event.preventDefault();
      handleLogout();
    });
  }
});

export function handleLogout() {
  remove("token", (value));
  remove("profile", (value));

  window.location.href = "/profile/login";
}
