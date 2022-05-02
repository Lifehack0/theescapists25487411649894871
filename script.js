const circle = document.querySelector(".circle");
let dots = circle.getAttribute("data-dots");
let rotate = 360 / dots;
points = "";
for (let i = 0; i < dots; i++) {
    points+=`<span class="point" style="--i: ${i}; --rot: ${rotate}deg;"></span>`
}
circle.innerHTML = points;