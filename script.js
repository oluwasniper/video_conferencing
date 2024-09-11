// script.js

const video = document.getElementById("video");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
let stream;

// Function to start the camera
async function startCamera() {
  try {
    // Request access to the camera
    stream = await navigator.mediaDevices.getUserMedia({ video: true });

    // Set the video source to the camera stream
    video.srcObject = stream;
  } catch (err) {
    console.error("Error accessing camera: ", err);
    alert("Error accessing camera: " + err.message);
  }
}

// Function to stop the camera
function stopCamera() {
  if (stream) {
    // Get all video tracks and stop them
    stream.getTracks().forEach((track) => track.stop());
    video.srcObject = null;
  }
}

// Add event listeners to the buttons
startButton.addEventListener("click", startCamera);
stopButton.addEventListener("click", stopCamera);
