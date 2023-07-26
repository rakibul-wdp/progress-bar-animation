const progressBar = document.querySelector("#progress-bar");
const section = document.querySelector("section");

const animateProgressBar = () => {
  let scrollDistance = -section.getBoundingClientRect().top;
  console.log(scrollDistance);
};

window.addEventListener("scroll", animateProgressBar);
