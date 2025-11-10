let notification = document.querySelector(".container");

let interval = setTimeout(() => {
  notification.style.display = "none";
  clearTimeout(interval);
}, 3000);
