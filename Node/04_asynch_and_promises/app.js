const { readFile, writeFile } = require("fs");

// We can also use:
// const { readFile, writeFile } = require("fs").promises;
// This would allow us to use the promise-based versions directly
// and avoid using 'util' and 'promisify'.

const util = require("util");

// Convert 'readFile' and 'writeFile' to functions that return promises.
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

// The following commented-out code is an example of manually creating a promise:
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

const start = async () => {
  try {
    // Since 'start' is async, we need 'await' and 'try-catch' for proper error handling.
    // 'await' ensures we wait for the promise to resolve before continuing.

    // Read the first file, waiting for the promise to resolve.
    const first = await readFilePromise("./content/first.txt", "utf-8");
    // Alternatively, using the manually created promise:
    // const first = await getText("./content/first.txt");

    // Read the second file, waiting for the promise to resolve.
    const second = await readFilePromise("./content/second.txt", "utf-8");
    // Alternatively, using the manually created promise:
    // const second = await getText("./content/second.txt");

    // No nesting required. We await each promise to resolve in sequence.
    // This avoids callback hell and makes the code cleaner and more readable.

    // Write the result to a new file.
    await writeFilePromise(
      "./content/resultText.txt",
      `This is ${first} and ${second}`
    );

    // Log the contents of the first and second files.
    console.log(first, second);
  } catch (error) {
    // Catch and log any errors that occur during the async operations.
    console.log(error);
  }
};

start();

// The following commented-out code demonstrates the use of promises with 'then' and 'catch':
// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// Using async/await helps us avoid callbacks and nesting,
// making the code cleaner and easier to understand.
