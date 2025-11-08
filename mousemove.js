let circle = document.querySelector("#circle");
window.addEventListener("mousemove", function (dets) {
  circle.style.top = dets.clientY + "px";
  circle.style.left = dets.clientX + "px";
});
