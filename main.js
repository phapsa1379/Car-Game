let car = document.getElementsByClassName("my-car")[0];
const sun = document.querySelector(".day"),
  moon = document.querySelector(".night"),
  background = document.querySelector(".background"),
  whiteLine = document.querySelectorAll(".white-line"),
  trees = [
    ...document.querySelectorAll(".tree"),
    ...document.querySelectorAll(".trees"),
  ];
let stepMoving = 5;
let positionX = car.getBoundingClientRect().x,
  positionY = car.getBoundingClientRect().y;
window.addEventListener("keyup", (e) => {
  whiteLine.forEach((item) => {
    item.style.animation = "move 0.2s infinite";
  });
  trees.forEach((item) => {
    item.style.animation = "move2 10s infinite";
  });
});
window.addEventListener("keydown", (e) => {
  switch (e.keyCode) {
    case 38:
      if (positionY >= 8) {
        positionY -= stepMoving;
        car.style.top = positionY + "px";
        whiteLine.forEach((item) => {
          item.style.animation = "move 0.001s infinite";
        });
        trees.forEach((item) => {
          item.style.animation = "move2 0.1s infinite";
        });
      }
      break;
    case 40:
      if (positionY <= window.innerHeight - 80) {
        positionY += stepMoving;
        car.style.top = positionY + "px";
        whiteLine.forEach((item) => {
          item.style.animation = "move 1s infinite";
        });
        trees.forEach((item) => {
          item.style.animation = "move2 10s infinite";
        });
      }

      break;
    case 37:
      if (positionX >= 20) {
        positionX -= stepMoving;
        car.style.left = positionX + "px";
      }
      break;
    case 39:
      if (positionX <= 380) {
        positionX += stepMoving;
        car.style.left = positionX + "px";
      }
      break;
  }
});

sun.addEventListener("click", () => {
  background.style.backgroundColor = "#1e272e";
  moon.style.display = "block";
  sun.style.display = "none";
  car.style.overflow = "unset";
});

moon.addEventListener("click", () => {
  background.style.backgroundColor = "rgb(255, 255, 255)";
  moon.style.display = "none";
  sun.style.display = "block";
  car.style.overflow = "hidden";
});

// window.addEventListener("keydown", (e) => {
//   switch (e.keyCode) {
//     case 38:
//       if (positionY >= 8) {
//         positionY -= stepMoving;
//         car.style.top = positionY + "px";
//         whiteLine.style.animationDuration = "0.1s";
//       }
//       break;
//     case 40:
//       if (positionY <= window.innerHeight - 80) {
//         positionY += stepMoving;
//         car.style.top = positionY + "px";
//       }

//       break;
//     case 37:
//       if (positionX >= 20) {
//         positionX -= stepMoving;
//         car.style.left = positionX + "px";
//       }
//       break;
//     case 39:
//       if (positionX <= 380) {
//         positionX += stepMoving;
//         car.style.left = positionX + "px";
//       }
//       break;
//   }
// });
