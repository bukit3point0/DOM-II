// Listeners
// 1. keydown
// 2. keyup
// 3. mouseenter
// 4. mouseleave
// 5. mouseover
// 6. click
// 7. dblclick
// 8. mousedown
// 9. mouseup
// 10. contextmenu

// Your code goes here

const title = document.querySelector("title");
const body = document.querySelector("body");
const header = document.querySelector("header");
const homeContainer = document.querySelector(".home h2");

body.addEventListener("keydown", event => {
    body.style.backgroundColor = "lightblue";
    header.style.backgroundColor = "purple";
})

body.addEventListener("keyup", event => {
    body.style.backgroundColor = "white";
    header.style.backgroundColor = "white";
})

homeContainer.addEventListener("dblclick", event => {
    homeContainer.innerText = "AHH!";
    homeContainer.style.fontSize = "20rem";
})

// Navigation
const navBar = document.querySelector(".nav");
const navItems = document.querySelectorAll(".nav-link");

navItems[0].addEventListener("mouseenter", event => {
    navItems[0].style.color = "blue";
    navItems[0].style.fontWeight = "bold";
})

navItems[0].addEventListener("mouseleave", event => {
    navItems[0].style.color = "black";
    navItems[0].style.fontWeight = "normal";
})

// Buttons

const signButtons = document.querySelectorAll(".btn");

signButtons[0].addEventListener("mouseover", event => {
    title.innerHTML = "Where are you going?";
})

signButtons[0].addEventListener("mouseleave", event => {
    title.innerHTML = "Fun Bus Travel Agency";
})

signButtons[1].addEventListener("mousedown", event => {
    signButtons[1].style.color = "purple";
    signButtons[1].style.backgroundColor = "white";
})

signButtons[1].addEventListener("mouseup", event => {
    signButtons[1].style.color = "white";
    signButtons[1].style.backgroundColor = "purple";
})

signButtons[2].addEventListener("click", event => {
    alert("Nobody in this room!");
})

// Pick Your Destination

const destination = document.querySelector(".content-destination");
const destinationImg = document.querySelector(".content-destination img");

destination.addEventListener("contextmenu", event => {
    destinationImg.setAttribute("src","https://i.ytimg.com/vi/RNoHcWE8tbQ/maxresdefault.jpg");
})