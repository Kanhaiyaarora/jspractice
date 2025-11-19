//  Throttling - User baar-baar event trigger kare, par function sirf fixed interval pr chale — function runs at fixed interval(delay)

let input = document.querySelector("input");

function throttle(fnc, delay) {
  let timer = 0;
  return function (...args) {
    let now = Date.now();
    if (now - timer >= delay) {
      timer = now;
      fnc(...args);
    }
  };
}

input.addEventListener(
  "input",
  throttle(function (dets) {
    console.log(dets.target.value);
  }, 2000)
);
