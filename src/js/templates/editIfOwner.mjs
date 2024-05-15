import { load } from "../storage/load.mjs";

export function editIfOwner (item) {
    const profile = load("profile");
    const isOwner = profile && item.data.seller.email === profile.email;

    if (isOwner) {
        const editPostButton = document.createElement("button");
        editPostButton.type = "button";
        editPostButton.className = "btn btn-primary m-2";
        editPostButton.textContent = "Edit ";
    
        const editIcon = document.createElement("i");
        editIcon.className = "fa-solid fa-pen-to-square";
    
        editPostButton.appendChild(editIcon);
    
        editPostButton.addEventListener("click", () => {
          window.location.href = `/auction/?id=${item.data.id}`;
        });
    }
}