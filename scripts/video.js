let currentVideoIndex = 0;
const videos = document.querySelectorAll("div.video");

// Function to swap videos
function swapVideos() {
  // Remove the 'visible' class from the current video and pause it
  videos[currentVideoIndex].classList.remove("visible");
  videos[currentVideoIndex].pause();

  // Update the current video index to show the next video (looping)
  currentVideoIndex = (currentVideoIndex + 1) % videos.length;

  // Add the 'visible' class to the next video and play it
  videos[currentVideoIndex].classList.add("visible");
  videos[currentVideoIndex].play();
}

// Initial setup: make the first video visible and play it
videos[0].classList.add("visible");
videos[0].play();

// Swap the videos every 6 seconds
setInterval(swapVideos, 6000); // Adjust the time as needed (in milliseconds)
