document.querySelector(".playvid").addEventListener("click", function() {
    const video = document.getElementById(".videoPlayer");
    if (video) {
        if (video.paused) {
        video.play();
        this.classList.add("playing");
        } else {
        video.pause();
        this.classList.remove("playing");
        }
    }
});