export function getTitle (item) {
    const titleContainer = document.getElementById("title");    
    titleContainer.textContent = item.data.title + " | Noble Oak Auctions";
}
