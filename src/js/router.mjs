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
    // case "/post/create/":
    //   listners.setCreatePostFormListener();
    //   return;
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
    // case "/profile/":
    //   showProfile();
    //   return;
  }
}
