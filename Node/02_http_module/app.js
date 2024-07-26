const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // res.write("Hello, World! a message from the server!");
    res.end("Hello, World! a message from the server! :)"); // ending the request}
    return;
  }

  if (req.url === "/about") {
    res.end("here is our short about us page");
    return;
  }

  res.end(`
    <h1> Wrong URL </h1>
    <p> return to homepage </p>
    <a href='/'>homepage</a>
    
    `);
});

server.listen(3000);

// we can send only one response per request
