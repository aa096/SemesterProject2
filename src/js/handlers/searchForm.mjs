import { searchListings } from "../auctions/search.mjs";
import { renderSearchResults } from "../templates/renderSearchResults.mjs";
import * as utils from "../utils/index.mjs";

export function setupSearchListener() {
  const searchForm = document.querySelector("#searchForm");
  const searchInput = document.querySelector("#searchPosts");
  const searchResultsContainer = document.querySelector("#post-container");

  if (searchForm && searchInput && searchResultsContainer) {
    searchForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const query = searchInput.value.trim();

      if (query) {
        try {
          const searchResults = await searchListings(query);
          renderSearchResults(searchResults, searchResultsContainer);
        } catch (error) {
          utils.showError(error.message, "#post-container");
        }
      } else {
        utils.showError("Please enter a search query", "#post-container");
      }
    });
  } else {
    console.error("Search form, input, or container not found");
  }
}
