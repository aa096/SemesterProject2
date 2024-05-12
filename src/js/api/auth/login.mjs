import { API_AUCTION_URL, API_AUTH } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";
import * as utils from "../../utils/index.mjs";

const action = "/auth/login";
const method = "POST";

/**
 * Performs user login by sending a POST request to the authentication endpoint.
 *
 * @param {Object} profile - User profile object containing necessary information for login.
 * @param {string} profile.username - User's username.
 * @param {string} profile.password - User's password.
 *
 * @throws {Error} Throws an error if the login request fails.
 *
 * @returns {Promise<void>} A promise that resolves when the login is successful.
 *
 * @example
 * const userProfile = {
 *   username: 'exampleUser',
 *   password: 'examplePassword',
 * };
 * try {
 *   await login(userProfile);
 * } catch (error) {
 *   console.error('Login failed:', error);
 * }
 */

export async function login(profile) {
  const loginURL = API_AUCTION_URL + action;
  const body = JSON.stringify(profile);

  try {
    utils.showLoadingIndicator();

    const response = await fetch(loginURL, {
      headers: {
        "Content-Type": "application/json",
      },
      method,
      body,
    });

    if (!response.ok) {
      const errorResponse = await response.json();

      utils.showErrorModal(
        errorResponse?.errors?.[0]?.message || "Login failed. Please try again."
      );

      throw new Error(
        errorResponse?.errors?.[0]?.message || "Login failed. Please try again."
      );
    }
    utils.hideLoadingIndicator();

    const { accessToken, ...profile } = (await response.json()).data;
    storage.save("token", accessToken);
    storage.save("profile", profile);

    // window.location.href = "/";
  } catch (error) {
    utils.hideLoadingIndicator();
    console.error("Login error:", error);
  }
}
