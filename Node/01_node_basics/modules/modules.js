// ________ OS

// Importing the built-in 'os' module. Note that we do not need './' for built-in modules.
const os = require("os");

// Retrieve information about the current user.
console.log(os.userInfo);

// Retrieve the system uptime in seconds.
console.log(`The system uptime is ${os.uptime()} seconds`);

// Create an object to hold current OS information and log it to the console.
const currentOS = {
  name: os.type(), // OS type (e.g., Linux, Darwin, Windows_NT)
  release: os.release(), // OS release version
  totalMem: os.totalmem(), // Total system memory in bytes
  freeMem: os.freemem(), // Free system memory in bytes
};
console.log(currentOS);

// ________ PATH

const path = require("path");

// Log the platform-specific path segment separator (e.g., '\' on Windows, '/' on POSIX).
console.log(path.sep);

// Join multiple path segments into a single path and log the result.
const filePath = path.join("content", "subfolder", "test.txt");
console.log(filePath); // Output: 'content\subfolder\test.txt' (Windows) or 'content/subfolder/test.txt' (POSIX)

// Get the base name (the last portion) of a path and log it.
const base = path.basename(filePath);
console.log(base); // Output: 'test.txt'

// Get the absolute path of the current directory.
const absolute1 = path.resolve(__dirname);
console.log(absolute1);

// Get the absolute path of 'test.txt' within the 'content/subfolder' directory and log it.
const absolute2 = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute2);

//____FS

const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

writeFileSync(
  "./content/result-synch.txt",
  `here is the result ${first} ${second} \n`
);
// This creates the file if it doesn't exist,
// and overwrites it if it does exist.

writeFileSync(
  "./content/result-synch.txt",
  `here is the result ${first} ${second} \n`,
  { flag: "a" }
);
// This creates the file if it doesn't exist,
// and appends to it if it does exist.

// ________ FS Asynchronous

const { readFile, writeFile } = require("fs");

// Asynchronously read the contents of 'first.txt'.
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;

  // Asynchronously read the contents of 'second.txt'.
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;

    // Asynchronously write the combined contents to 'result-asynch.txt'.
    writeFile(
      "./content/result-asynch.txt",
      `Here is the result: ${first}, ${second}\n`,
      (err) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("File written successfully");
      }
    );
  });
});

// NOTE:

// Non-blocking Execution:
// While the asynchronous readFile
// and writeFile operations are happening, other code can continue executing.

// Callback Execution:
// The callbacks for readFile and writeFile are executed once the respective I/O operations are completed.
// They happen sequentially in the order they were registered.
