export function checkLocalStorage() {
    const profile = JSON.parse(localStorage.getItem("profile"));
    return profile !== null && typeof profile === 'object';
  }
  