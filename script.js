const userProfile = {
    name: "Zhasmira",
    birthYear: 2007,
    isDeveloper: true,
    hobbies: ["dancing", "reading", "listening to music", "spending time with family"]
};
console.log(userProfile);
console.log(typeof userProfile.name);
console.log(typeof userProfile.birthYear);
console.log(typeof userProfile.isDeveloper);
console.log(typeof userProfile.hobbies);
const currentYear=2026;
function calcAge(birthYear){
    return currentYear-birthYear;
}
function calcMonths(age){
    return age*12;
}
function showProfile(){
    let age=calcAge(userProfile.birthYear);
    let months=calcMonths(age);
    let hobbyCount=userProfile.hobbies.length;
    console.log("Age - "+age);
    console.log("Months -  "+ months);
    console.log("Hobbies count - "+hobbyCount);
    document.getElementById("nameText").textContent=userProfile.name;
    document.getElementById("yearText").textContent=userProfile.birthYear;
    document.getElementById("devText").textContent=userProfile.isDeveloper ? "Yes" : "No";
    document.getElementById("hobbiesText").textContent=userProfile.hobbies;
    document.getElementById("ageText").textContent=age;
    document.getElementById("monthsText").textContent=months;
    document.getElementById("countText").textContent=hobbyCount;
}
showProfile();

let profileBtn = document.getElementById("profileBtn");
let usernameInput = document.getElementById("name");
let birthYearInput = document.getElementById("birth");
let message = document.getElementById("message");
profileBtn.addEventListener("click", () => {
    let newName = usernameInput.value;
    let newYear = Number(birthYearInput.value);
    if (newName === "" || newYear === 0) {
        message.textContent = "Please fill in all fields!";
        message.style.color = "red";
        return;
    }
    userProfile.name = newName;
    userProfile.birthYear = newYear;
    console.log("Updated profile:", userProfile);
    showProfile();
    document.getElementById("profcard").classList.add("active");
    message.textContent = "Profile updated!";
    message.style.color = "green";
});

let taskList = document.getElementById("taskList");
let itemInput = document.getElementById("itemInput");
let addBtn = document.getElementById("addBtn");
let removeBtn = document.getElementById("removeBtn");
function addItem() {
    let text = itemInput.value;
    if (text === "") {
        return;
    }
    taskList.innerHTML += "<li>" + text + "</li>";
    itemInput.value = "";
}
addBtn.addEventListener("click", addItem);
itemInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addItem();
    }
});
removeBtn.addEventListener("click", () => {
    let items = taskList.querySelectorAll("li");
    if (items.length === 0) {
        return;
    }
    items[items.length - 1].remove();
});