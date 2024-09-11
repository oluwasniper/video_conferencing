const express = require("express");
const path = require("path");
const http = require("http");

const app = express();
const io = socketIo(server);
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

io.on("connection", (socket) => {
  console.log("New WebSocket connection");
});

app.post("/send", (req, res) => {
  navigator.mediaDevices
    .getUserMedia({ audio: true, video: true })
    .then((stream) => {
      const video = document.querySelector("video");
      video.srcObject = stream;
      video.onloadedmetadata = (e) => {
        video.play();
      };
    });
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
