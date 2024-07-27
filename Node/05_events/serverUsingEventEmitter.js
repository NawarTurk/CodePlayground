const { link } = require("fs");
const http = require("http");

// Using Event Emitter API
const server = http.createServer();

// The server emits the 'request' event behind the scenes.
// Subscribe to it, listen to it, and respond to it.
server.on("request", (req, res) => {
  res.end("Welcome!");
});

// Start the server and listen on port 5000
server.listen(5000);
