const image = document.querySelector(".image");
const imageOverlay = document.querySelector(".imageOverlay");
const eyeIcon = document.querySelector(".eyeIcon");
const title = document.querySelector(".title");
const creatorName = document.querySelector(".creatorName");

image.addEventListener("mouseover", function () {
  imageOverlay.classList.add("active");
  eyeIcon.classList.add("active");
});

image.addEventListener("mouseout", function () {
  imageOverlay.classList.remove("active");
  eyeIcon.classList.remove("active");
});

title.addEventListener("mouseenter", function () {
  title.classList.add("active");
});

title.addEventListener("mouseleave", function () {
  title.classList.remove("active");
});

creatorName.addEventListener("mouseenter", function () {
  creatorName.classList.add("active");
});

creatorName.addEventListener("mouseleave", function () {
  creatorName.classList.remove("active");
});
