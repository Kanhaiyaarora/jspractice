// DOM Manipulation
// 1. js se html ka element select karna by using getElementById, getElementsbyClassName, querySelector,querySelectorAll
// 2. text badalna (innerText,textContent)
// 3. html badalna (innerHTML)
// 4. css badalna(elem.style.color = "red")
// 5. attribute badalna (getAttribute,setAttribute)
// event listeners add karna

//  document.querySelector
// document.querySelectorAll
// document.getElementById
// document.getElementsByClassName

// let text = document.querySelector("h1");
// text.textContent = ("text change");
// text.innerHTML = "<i>hello<i>";
// we can write html in innerHTML and we can change text through innerText,innerContent/

// let link = document.querySelector("a");
// link.href = "https://www.google.com";

// let img = document.querySelector("img")
// img.src = ("https://images.pexels.com/photos/18884939/pexels-photo-18884939.jpeg")
// img.style.width = "200px";
// img.style.outline = "5px solid red";
// img.style.margin = "20px";

// setAttribute, getAttribute, removeAttribute,

// let img = document.querySelector("img");
// img.setAttribute(
//   "src",
//   "https://images.pexels.com/photos/18884939/pexels-photo-18884939.jpeg"
// );
// img.setAttribute("width", "200px");
// img.removeAttribute("src");

// link.setAttribute("href", "https://www.google.com");

// Dynamic Dom manipulation
// --> Element create kro fir usme content add kro uske baad screen pr append(show) kro
// 1.createElement 2. append 3. removeChild 4.prepend 5.appendChild

// let h1 = document.createElement("h1");
// h1.textContent = "Dom manipulation";
// document.body.append(h1);

// link.remove();

//  JS se css change krna

// let hello = document.querySelector("h1");
// hello.style.color = "blue";
// hello.style.fontSize = "3rem";
// hello.style.textTransform = "uppercase";

// let para = document.querySelectorAll("p");
// para.forEach(function (elem) {
//   elem.style.color = "purple";
// });

// hello.addEventListener("click", function (delss) {
//   hello.style.color = "red";
// });
// hello.addEventListener("mouseover", function () {
//   hello.style.color = "lightseagreen";
// });
// hello.addEventListener("mouseout", function (dels) {
//   hello.style.color = "blue";
//   // console.log(dels);
// });

// let inp = document.querySelector("input").addEventListener("input",function(dets){
//  if(dets.data !== null){
//   console.log(dets.data)
//  }
// })

// let h1 = document.querySelector("h1");
// window.addEventListener("keydown", function (dets) {
//   if (dets.key === " ") h1.innerText = "space";
//   else h1.textContent = dets.key;
// });

let inpfile = document.querySelector("#inpfile");

let btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
  inpfile.click();
});

inpfile.addEventListener("change", function (dets) {
  btn.textContent = dets.target.files[0].name;
});
