// Select the spinning image by its ID
const spinningImage = document.getElementById("spinning-image");

// Image sources
const spinningImageSrc = "picksel.png"; // Main spinning image
const tempImageSrc = "picksel-wink.png"; // Temporary wink image

// Timing configurations
const spinDuration = 4000; // Duration of one spin cycle (3 seconds)
const tempImageDuration = 500; // Duration of wink image (0.5 seconds)

// Function to swap the image temporarily
function swapImage() {
  // Change the source to the temporary wink image
  spinningImage.src = tempImageSrc;

  // After 0.5 seconds, change it back to the spinning image
  setTimeout(() => {
    spinningImage.src = spinningImageSrc;
  }, tempImageDuration);
}

// Call the swapImage function at the end of each spin cycle
setInterval(swapImage, spinDuration);
