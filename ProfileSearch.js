const users = [
  {
    name: "Raghav Sharma",
    pic: "https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    occupation: "Instructor",
    bio: "I am CEO of Sheryians Coding School and instructor of Cohort 2.0",
  },
  {
    name: "Sarthak Sharma",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    occupation: "Instructor",
    bio: "I am instructor of Sheryians Coding School and instructor of Cohort 2.0",
  },
  {
    name: "Divyansh Dabur",
    pic: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    occupation: "Student",
    bio: "I am student of Sheryians Coding School and in batch of Cohort 2.0",
  },
  {
    name: "Siya Arora",
    pic: "https://plus.unsplash.com/premium_photo-1681489930334-b0d26fdb9ed8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    occupation: "Councellor",
    bio: "I am Councellor of Sheryians Coding School and instructor of Cohort 2.0",
  },
  {
    name: "Ram Pruthi",
    pic: "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    occupation: "Script Writer",
    bio: "I am Youtuber and creative script writer of Sheryians Coding School",
  },
  {
    name: "Vihaan Batra",
    pic: "https://images.unsplash.com/photo-1647685658173-94c4f42725fd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    occupation: "Influencer",
    bio: "I am influencer at Sheryians Coding School and instructor of Cohort 2.0",
  },
  {
    name: "Manish Kumar",
    pic: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    occupation: "Sales Manager",
    bio: "I am Sales Manager of Sheryians Coding School and instructor of Cohort 2.0",
  },
  {
    name: "Pranav Tyagi",
    pic: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    occupation: "UI/UX Designer",
    bio: "I am Creative UI/UX Designer and instructor of Cohort 2.0",
  },
];

function showUsers(arr) {
  arr.forEach(function (user) {
    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src", user.pic);

    let h2 = document.createElement("h2");
    h2.textContent = user.name;

    let h3 = document.createElement("h3");
    h3.textContent = user.occupation;

    let p = document.createElement("p");
    p.textContent = user.bio;

    // let main = document.querySelector(".main");
    let cardwrapper = document.querySelector(".card-wrapper");

    // main.appendChild(cardwrapper);

    cardwrapper.appendChild(card);
    card.append(profile);
    profile.append(img);
    card.append(h2, h3, p);
  });
}

showUsers(users);

let input = document.querySelector("input");
input.addEventListener("input", function () {
  let newUsers = users.filter((user) => {
    return user.name.toLowerCase().startsWith(input.value.toLowerCase());
  });
  document.querySelector(".card-wrapper").innerHTML = "";
  if (newUsers.length === 0) {
    let cardwrapper = document.querySelector(".card-wrapper");

    cardwrapper.innerHTML = "<h3 class='err'>No user found.</h3>";
  } else {
    showUsers(newUsers);
  }
});
