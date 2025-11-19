// SOC ka matlab hai code ko alag-alag parts me divide karna — jaise logic, DOM manipulation, aur event handling — taaki har part sirf apna kaam kare. Isse code clean, readable aur maintainable ho jata hai.




let btn = document.querySelector("button");
let h1 = document.querySelector("h1");

function Add(a, b) {
  return a + b;
}

btn.addEventListener("click", function () {
  let a = Math.floor(Math.random() * 100);
  let b = Math.floor(Math.random() * 100);
  h1.innerText = Add(a, b);
});
