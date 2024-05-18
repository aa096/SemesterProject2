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
      listners.handleCreateListingButtonClick()
      return;
    case "/auction/":
        UI.displaySingleListing();
        return;
    case "/profile/":
      UI.showProfile();
      return;
    case "/":
      UI.displayIndexTemplate();
      return;
  }
}
