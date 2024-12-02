// JavaScript to swap the spinning image
const spinningImage = document.getElementById("spinning-image");

// Image sources
const spinningImageSrc = "picksel.png"; // Main spinning image
const tempImageSrc = "picksel-wink.png"; // Temporary image

// Duration of spin cycle (must match CSS animation duration)
const spinDuration = 3000; // 3 seconds
const tempImageDuration = 500; // 0.5 seconds

// Function to swap the image temporarily
function swapImage() {
  // Change to temporary image
  spinningImage.src = tempImageSrc;

  // After 0.5 seconds, switch back to the spinning image
  setTimeout(() => {
    spinningImage.src = spinningImageSrc;
  }, tempImageDuration);
}

// Repeatedly call the swap function at the end of each spin cycle
setInterval(swapImage, spinDuration);
