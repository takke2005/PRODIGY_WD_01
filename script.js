const raw = document.querySelector(".raw");
const navList = document.querySelector(".menu-overlay");

raw.addEventListener("click", function() {
    navList.classList.toggle("active");
    raw.classList.toggle("click");
});
