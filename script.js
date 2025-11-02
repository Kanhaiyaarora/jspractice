// DOM Manipulation
// 1. js se html ka element select karna by using getElementById, getElementsbyClassName, querySelector,querySelectorAll
// 2. text badalna
// 3. html badalna
// 4. css badalna
// 5. attribute badalna
// event listeners add karna

// 1st question

// for(let i = 1; i<=10;i++){
//   console.log(i)
// }

// 2nd question

// for(let i =1;i<=20;i++){
//   if(i%2===0){
//     console.log(`${i} is Even`)
//   }
//   else{
//     console.log(`${i} is Odd`)
//   }

// }

// innerHTML,innerText,textContent

let text = document.querySelector("h1");
// text.textContent = ("i don't give a fuck champion");
text.innerHTML = "<i>hello<i>";
// we can write html in innerHTML and we can change text through innerText,innerContent/
let link = document.querySelector("a");
link.href = "https://www.google.com";

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
