import { remove } from "../storage/remove.mjs";

function handleLogoutClick() {
  remove("token");
  remove("profile");
}

document.addEventListener('DOMContentLoaded', () => {
  const logoutLink = document.getElementById('logoutLink');
  if (logoutLink) {
      logoutLink.addEventListener('click', handleLogoutClick);
  }
});
