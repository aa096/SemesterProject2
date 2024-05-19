export function handleCreateListingButtonClick() {
    const createListingButton = document.getElementById("createListingButton");
  
    createListingButton.addEventListener("click", () => {
      window.location.href = "/auction/create";
    });
}