
const createPostButton = document.querySelector("#createPostButton");
const createPostForm = document.getElementById("createPost");
const caretIcon = document.getElementById("caretIcon");

if (createPostButton) {
  createPostButton.addEventListener("click", function () {
    createPostForm.classList.toggle("hidden");

    caretIcon.classList.toggle("fa-caret-up");
    caretIcon.classList.toggle("fa-caret-down");
  });
}

const container1 = document.querySelector("#post-container");

export function listingsTemplate(item) {
    const divWrapper = document.createElement("div");
    divWrapper.classList.add("col-10");

    const listingsCard = document.createElement("div");
    listingsCard.classList.add("card");

    const image = document.createElement("img");
    image.src = item.media;
    image.alt = item.title;


  return divWrapper;
}

export function renderListingsTemplates(item) {
  container1.innerHTML = "";
  items.forEach((item) => {
    container1.appendChild(listingsTemplate(item));
  });
}
