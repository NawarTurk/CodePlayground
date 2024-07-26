const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // This is a synchronous and non-blocking operation as it quickly sends a response and completes.
    res.end("Welcome Home!");
    return;
  }
  if (req.url === "/about") {
    // This is a synchronous and blocking operation. In a real scenario, if heavy processing was done here,
    // it would block other requests until it completes.
    res.end("About!");
    return;
  }
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});

// Scenario:
// 1. User 1 goes to /about - This request starts processing and is potentially time-consuming.
// 2. User 2 goes to /home - Although this request is quick to process, it must wait because
//    the Node.js server processes requests in a single-threaded manner. User 2's request will
//    not be processed until User 1's request to /about is fully completed.
