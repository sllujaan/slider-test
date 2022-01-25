const containerSlider = document.querySelectorAll(".container-slider")[0];
const ul = containerSlider.querySelectorAll("ul")[0];

setInterval(() => {
    ul.scrollLeft = ul.scrollLeft + 1;
}, 10);