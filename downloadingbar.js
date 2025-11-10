let bar = document.querySelector(".bar");
let counter = document.querySelector(".counter");

let count = 0;

let interval = setInterval(() => {
  if (count < 100) {
    count++;
    bar.style.width = `${count}%`;
    counter.innerText = `${count} %`;
  } else {
    let h3 = document.querySelector("h3");
    h3.innerText = "Downloded Successfully.";
    h3.style.color = "green";

    clearInterval(interval);
  }
}, 30);
