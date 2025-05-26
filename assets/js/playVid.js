const video = document.getElementById("videoPlayer");
const playButton = document.querySelector(".playvid");

playButton.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    playButton.classList.add("opacity-0");

    // Hide it fully after fade-out
    setTimeout(() => {
      playButton.classList.add("hidden");
    }, 500);
  } else {
    video.pause();
    playButton.classList.remove("hidden");
    setTimeout(() => {
      playButton.classList.remove("opacity-0");
    }, 10);
  }
});

// When video ends, show the button again
video.addEventListener("ended", function () {
  playButton.classList.remove("hidden");
  setTimeout(() => {
    playButton.classList.remove("opacity-0");
  }, 10);
});
