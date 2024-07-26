//____Synch

const { readFileSync, writeFileSync } = require("fs");
console.log("start synch");

const first = readFileSync("./modules/content/first.txt", "utf-8");
const second = readFileSync("./modules/content/second.txt", "utf-8");

writeFileSync(
  "./modules/content/result-sync.txt",
  `Here are your stuff: ${first} and ${second}`,
  { flag: "a" }
);

console.log("done with synch task");
console.log("starting the next one");

// Explanation of Synchronous Operations:
// - The 'readFileSync' and 'writeFileSync' methods block the entire process until they complete.
// - This ensures that the operations are completed in exact sequence
//   but can lead to inefficient utilization of resources if the file operations take long.
// - The main thread does not move to the next line of code until the current operation finishes,
//   thus delaying any subsequent operations.

//___Asynch
const { readFile, writeFile } = require("fs");

readFile("./modules/content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const firstText = result;
  readFile("./modules/content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const secondText = result;
    writeFile(
      "./modules/content/result-asynch2.txt",
      `The result is ${firstText} and then ${secondText}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with asynch one");
      }
    );
  });
});

console.log("starting next task");

//
// Explanation of Asynchronous Operations:
// - The 'readFile' and 'writeFile' methods are non-blocking and do not wait for the file operation to complete
//   before moving to the next line of code.
// - This allows the main process to continue running and perform other tasks while waiting for the file operations to finish.
// - Errors are handled within each callback, and
//   operations can overlap in execution, which can improve performance in I/O-bound tasks.
// - The order of output can vary because 'starting next task' might get logged before 'done with asynch one'
//   due to the non-blocking nature of asynchronous operations.

// Output
// start synch
// done with synch task
// starting the next one
// starting next task
// done with asynch one
