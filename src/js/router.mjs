import * as listners from "./handlers/index.mjs";
import * as UI from "./UI/index.mjs"

export function router() {
  const profileBtn = document.querySelector("#proBtn");
  const path = location.pathname;

  switch (path) {
    case "/profile/login/":
      listners.setLoginFormListener();    
      profileBtn.addEventListener("click", listners.handleProfileLinkClick());
      return;
    case "/profile/register/":
      listners.setRegisterFormListener();
      profileBtn.addEventListener("click", listners.handleProfileLinkClick());
      return;
    case "/auction/create/":
      listners.setCreateListingFormListener();
      listners.setupGoBack();
      profileBtn.addEventListener("click", listners.handleProfileLinkClick());
      return;
    case "/auction/edit/":
      listners.setUpdateListingFormListener();
      listners.setupGoBack();
      profileBtn.addEventListener("click", listners.handleProfileLinkClick());
      return;
    case "/profile/edit/":
      listners.setUpdateProfileFormListener();
      listners.setupGoBack();
      profileBtn.addEventListener("click", listners.handleProfileLinkClick());
      return;
    case "/auctions/":
      UI.showListings();
      listners.handleCreateListingButtonClick();
      listners.setupSearchListener();
      profileBtn.addEventListener("click", listners.handleProfileLinkClick());
      return;
    case "/auction/":
        UI.displaySingleListing();
        profileBtn.addEventListener("click", listners.handleProfileLinkClick());
        return;
    case "/profile/":
      UI.showProfile();
      profileBtn.addEventListener("click", listners.handleProfileLinkClick());
      return;
    case "/":
      const postId = "67561f39-fd99-4c8e-8c45-2d5e653b30a1"; 
      UI.displayIndexTemplate(postId) ;
      UI.displayLastChance();
      profileBtn.addEventListener("click", listners.handleProfileLinkClick());
      return;
  }
}
