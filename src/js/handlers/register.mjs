import { register } from "../api/auth/register.mjs";

export function setRegisterFormListener() {
  const form = document.querySelector("#register-form");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      try {
        await register(profile);
        
      } catch (error) {
        console.error("Registration error:", error);
      }
    });
  }
}
