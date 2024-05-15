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
      return;
    // case "/post/edit/":
    //   listners.setUpdatePostFormListener();
    //   listners.setupGoBack();
    //   return;
    // case "/profile/edit/":
    //   listners.setUpdateProfileFormListener();
    //   return;
    case "/auctions/":
      UI.showListings();
      return;
    case "/auction/":
        UI.displaySingleListing();
        return;
    case "/profile/":
      UI.showProfile();
      return;
  }
}
