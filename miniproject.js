let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector("#main");

let cardwrapper = document.createElement("div");
cardwrapper.classList.add("cardwrapper");
main.appendChild(cardwrapper);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let card = document.createElement("div");
  card.classList.add("card");

  let profile = document.createElement("div");
  profile.classList.add("profile");

  let img = document.createElement("img");
  img.setAttribute("src", inputs[0].value);

  let h1 = document.createElement("h1");
  h1.textContent = inputs[1].value;
  h1.style.textTransform = "capitalize";

  let h3 = document.createElement("h3");
  h3.textContent = inputs[2].value;
  h3.style.textTransform = "capitalize";

  let p = document.createElement("p");
  p.textContent = inputs[3].value;
  p.classList.add("p");

  profile.appendChild(img);
  card.appendChild(profile);
  card.append(h1, h3, p);
  cardwrapper.appendChild(card);

  inputs.forEach(function (elem) {
    if (elem.type !== "submit") {
      elem.value = "";
    }
  });
});
