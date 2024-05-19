import { clearStorage } from "../storage/remove.mjs";

export function logoutListener() {
  try {
    clearStorage();
    location.href = "./";
  } catch {
    return alert("There was a problem logging out");
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const logoutLink = document.getElementById('logoutLink');
  if (logoutLink) {
    logoutLink.addEventListener('click', (event) => {
      event.preventDefault(); 
      logoutListener();
    });
  }
});