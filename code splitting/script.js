let btn = document.querySelector("button");

btn.addEventListener("click", async function () {
  let fn = await import("./heavyfile.js");
  fn.clicked();
});
