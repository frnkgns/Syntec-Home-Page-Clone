
// put you assets images in the following directories:
// then change this code to match your images paths
const wagerLeft = [
  "/assets/images/wager/left/battle-1.png",
  "/assets/images/wager/left/battle-3.png",
  "/assets/images/wager/left/battle-5.png",
  "/assets/images/wager/left/battle-7.png",
  "/assets/images/wager/left/battle-9.png"
];

const wagerRight = [
  "/assets/images/wager/right/battle-2.png",
  "/assets/images/wager/right/battle-4.png",
  "/assets/images/wager/right/battle-6.png",
  "/assets/images/wager/right/battle-8.png",
  "/assets/images/wager/right/battle-10.png"
];

let index = 0;
const fadeDuration = 500; // in milliseconds

const imgL = document.getElementById("wagerL");
const imgR = document.getElementById("wagerR");

setInterval(() => {
  imgL.classList.add("fade-out");
  imgR.classList.add("fade-out");

  setTimeout(() => {
    index = (index + 1) % wagerLeft.length;

    imgL.src = wagerLeft[index];
    imgR.src = wagerRight[index];

    imgL.classList.remove("fade-out");
    imgR.classList.remove("fade-out");
  }, fadeDuration);
}, 4000);
