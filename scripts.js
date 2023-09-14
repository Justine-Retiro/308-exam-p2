// Events

document.getElementById("myButton").addEventListener("click", () => {
    alert("Button clicked!");
});

document.getElementById("btn-hover").addEventListener("mouseover", () => {
    document.body.style.backgroundColor = "red";
});

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form submitted!");
});

window.addEventListener("load", () => {
    alert("Page loaded!");
});

window.addEventListener("scroll", () => {
    alert("Page scrolled!");
});

document.getElementById("input").addEventListener("focus", (e) => {
    e.style.backgroundColor = "pink";
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