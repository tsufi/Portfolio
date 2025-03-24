document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll(".myVideo");
  let index = 0;

  function showNextVideo() {
    videos.forEach((video, i) => {
      if (i === index) {
        video.currentTime = 0;
        video.style.opacity = "1";
        video.style.visibility = "visible";
        video.play(); // Varmistetaan, että video jatkaa pyörimistään
      } else {
        video.style.opacity = "0";
        video.style.visibility = "hidden";
      }
    });

    console.warn("Näkyvä video:", videos[index].id);
    index = (index + 1) % videos.length;
  }

  setInterval(showNextVideo, 6000);
  showNextVideo();
});
