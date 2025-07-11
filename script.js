const ROTATEX_FACTOR = -0.07;
const ROTATEY_FACTOR = 0.10;
const Z_INDEX_FACTOR = 0.1;
const images = document.querySelectorAll(".image");
const buttons = document.querySelectorAll(".button");
const container = document.querySelector(".container");
let mouseenterCounter = 0;
let containerLocation = container.getBoundingClientRect();
let containerHeight = container.offsetHeight;
let containerWidth = container.offsetWidth;
let yCalibration = containerLocation.y + containerHeight / 2;
let xCalibration = containerLocation.x + containerWidth / 2;
const toggle = document.querySelector(".toggleButton");

toggle.addEventListener("click", () => {
  images.forEach((image) => {
    if (!image.classList.contains("frame")) {
      image.classList.toggle("off");
    }
  });
  buttons.forEach((button) => {
    if (!button.classList.contains("frame")) {
      button.classList.toggle("off");
    }
  });
});

container.addEventListener("mousemove", (event) => {
  images.forEach((image) => {
    image.style.transform = `rotateX(${
      ROTATEX_FACTOR *
      ((window.getComputedStyle(image).zIndex *
        Z_INDEX_FACTOR *
        (event.clientY - yCalibration)) /
        containerHeight)
    }turn) rotateY(${
      (ROTATEY_FACTOR *
        window.getComputedStyle(image).zIndex *
        Z_INDEX_FACTOR *
        (event.clientX - xCalibration)) /
      containerWidth
    }turn)`;
  });
});
container.addEventListener("touchmove", (event) => {
  let touch = event.touches[0];
  
    // Get the X and Y coordinates
    let touchX = touch.pageX;
    let touchY = touch.pageY;
  
  images.forEach((image) => {
    image.style.transform = `rotateX(${
      ROTATEX_FACTOR *
      ((window.getComputedStyle(image).zIndex *
        Z_INDEX_FACTOR *
        (touchY - yCalibration)) /
        containerHeight)
    }turn) rotateY(${
      (ROTATEY_FACTOR *
        window.getComputedStyle(image).zIndex *
        Z_INDEX_FACTOR *
        (touchX - xCalibration)) /
      containerWidth
    }turn)`;
  });
});





container.addEventListener("mouseleave", () => {
  images.forEach((image) => {
    image.style.transition = "transform 1s ease-out";
  });
  images.forEach((image) => {
    image.style.transform = "none";
  });
});

container.addEventListener("touchend", () => {
  images.forEach((image) => {
    image.style.transition = "transform 1s ease-out";
  });
  images.forEach((image) => {
    image.style.transform = "none";
  });
});



container.addEventListener("mouseenter", () => {
  containerLocation = container.getBoundingClientRect();
  containerHeight = container.offsetHeight;
  containerWidth = container.offsetWidth;
  yCalibration = containerLocation.y + containerHeight / 2;
  xCalibration = containerLocation.x + containerWidth / 2;
  images.forEach((image) => {
    image.style.transition = "transform 0.2s ease-out";
  });
});

container.addEventListener("touchstart", () => {
  
  images.forEach((image) => {
    image.style.transition = "transform 0.1s ease-out";
  });
});



