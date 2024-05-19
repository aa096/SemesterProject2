import * as listners from "./handlers/index.mjs";
import * as UI from "./UI/index.mjs"

export function router() {
  const path = location.pathname;

  switch (path) {
    case "/profile/login/":
      listners.setLoginFormListener();
      return;
    case "/profile/register/":
      listners.setRegisterFormListener();
      return;
    case "/auction/create/":
      listners.setCreateListingFormListener();
      listners.setupGoBack();
      return;
    case "/auction/edit/":
      listners.setUpdateListingFormListener();
      listners.setupGoBack();
      return;
    case "/profile/edit/":
      listners.setUpdateProfileFormListener();
      listners.setupGoBack();
      return;
    case "/auctions/":
      UI.showListings();
      listners.handleCreateListingButtonClick();
      listners.setupSearchListener();
      return;
    case "/auction/":
        UI.displaySingleListing();
        return;
    case "/profile/":
      UI.showProfile();
      return;
    case "/":
      const postId = "67561f39-fd99-4c8e-8c45-2d5e653b30a1"; 
      UI.displayIndexTemplate(postId);
      UI.displayLastChance();
      return;
  }
}
