const img1 = document.getElementById("img1");
const btn1 = document.getElementById("btn1");


const img2 = document.getElementById("img2");
const btn2 = document.getElementById("btn2");

const img3 = document.getElementById("img3");
const btn3 = document.getElementById("btn3");

const vid1 = document.getElementById("vid1");
const vtn1 = document.getElementById("vtn1");

const vid2 = document.getElementById("vid2");
const vtn2 = document.getElementById("vtn2");

const vid3 = document.getElementById("vid3");
const vtn3 = document.getElementById("vtn3");

btn1.addEventListener("click", () => {
    img1.src = "pics/06.jpg";
});

btn2.addEventListener("click", () => {
    img2.src = "pics/04.jpg";
});

btn3.addEventListener("click", () => {
    img3.src = "pics/05.jpg";
});

vtn1.addEventListener("click", () => {
    vid1.src = "/vids/3.mp4";
});

vtn2.addEventListener("click", () => {
    vid2.src = "/vids/1.mp4";
});

vtn3.addEventListener("click", () => {
    vid3.src = "/vids/2.mp4";
});

//Events

document.getElementById("myButton").addEventListener("click", () => {
    alert("Button clicked!");
});
document.getElementById("myElement").addEventListener("mouseenter", (e) => {
    e.target.style.color = "purple";
})
document.getElementById("myElement").addEventListener("mouseover", (e) => {
    alert("mouse overed!")
});
document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Form submitted!");
});
document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Form submitted!");
});
window.addEventListener("load", () => {
    alert("Page loaded!");
});
window.addEventListener("scroll", () => {
    alert("Page scrolled!");
});
document.getElementById("myInput").addEventListener("focus", () => {
    alert("Input focused!");
});
document.getElementById("myInput").addEventListener("focus", () => {
    alert("Input focused!");
});
window.addEventListener("resize", () => {
    alert("Window resized!");
});
document.getElementById("context").addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Context menu opened!");
});
document.getElementById("dbl").addEventListener("dblclick", () => {
    alert("The button has been double-clicked!");
});