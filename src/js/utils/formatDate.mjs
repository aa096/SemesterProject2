export function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long"
    });
  }
  
export function formatDateAndTime(dateString) {
    const date2 = new Date(dateString);
    return date2.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "numeric"
    });
  }