import { load } from "../storage/load.mjs";
import { removeListing } from "../auctions/delete.mjs";

export function editIfOwner(item) {
  const profile = load("profile");
  const isOwner = profile && item.data.seller.email === profile.email;

  if (isOwner) {
    const editPostButton = createButton("Edit", "fa-pen-to-square", () => {
      window.location.href = `/auction/?id=${item.data.id}`;
    });

    const deletePostButton = createButton("Delete", "fa-trash", async () => {
      const modal = new bootstrap.Modal(
        document.getElementById("deleteConfirmationModal")
      );
      modal.show();

      const confirmationButton = document.getElementById("confirmDeleteButton");
      confirmationButton.addEventListener("click", async () => {
        try {
          await removeListing(item.data.id); // Call your removeListing function
          window.location.href = "/auctions/"; // Redirect to desired location after deletion
        } catch (error) {
          console.error("Error deleting listing", error);
        } finally {
          modal.hide();
        }
      });
    });

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("d-flex", "gap-3", "justify-content-center", "my-3");
    buttonContainer.appendChild(editPostButton);
    buttonContainer.appendChild(deletePostButton);

    return buttonContainer;
  }

  return null;
}

function createButton(text, iconClass, clickHandler) {
  const button = document.createElement("button");
  button.type = "button";
  button.classList.add ("btn", "btn-light", "text-secondary", "fw-bolder", "rounded-4");
  button.textContent = `${text} `;

  const icon = document.createElement("i");
  icon.className = `fa-solid ${iconClass}`;
  button.appendChild(icon);

  button.addEventListener("click", clickHandler);

  return button;
}
