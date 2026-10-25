const userProfile = {
  name: "Yerali",
  birthYear: 2007,
  isDeveloper: true,
  hobbies: ["Volleyball", "Table Tennis", "Hobby horsing"]
};

const usernameInput = document.getElementById("username");
const birthYearInput = document.getElementById("birth-year");
const hobbyInput = document.getElementById("new-hobby");
const hobbyList = document.getElementById("hobby-list");

function showProfile() {
  const currentYear = new Date().getFullYear();
  const age = currentYear - userProfile.birthYear;

  document.getElementById("profile-name").textContent = userProfile.name;
  document.getElementById("profile-year").textContent = userProfile.birthYear;
  document.getElementById("profile-developer").textContent = userProfile.isDeveloper;
  document.getElementById("profile-age").textContent = age;
  document.getElementById("hobbies-count").textContent = userProfile.hobbies.length;

  console.log("Profile:", userProfile);
  console.log("Age:", age, "Hobbies count:", userProfile.hobbies.length);
}

function addListItem(hobby) {
  const item = document.createElement("li");
  item.textContent = hobby;
  hobbyList.appendChild(item);
}

for (const hobby of userProfile.hobbies) {
  addListItem(hobby);
}

showProfile();

document.getElementById("profile-form").addEventListener("submit", function (event) {
  event.preventDefault();
  userProfile.name = usernameInput.value;
  userProfile.birthYear = Number(birthYearInput.value);
  showProfile();
  document.getElementById("profile").style.backgroundColor = "#f2f2f2";
});

document.getElementById("hobby-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const hobby = hobbyInput.value;
  userProfile.hobbies.push(hobby);
  addListItem(hobby);
  showProfile();
});

document.getElementById("remove-item").addEventListener("click", function () {
  if (hobbyList.lastElementChild) {
    hobbyList.lastElementChild.remove();
    userProfile.hobbies.pop();
    showProfile();
  }
});
