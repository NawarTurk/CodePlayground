// Create a new Promise that executes an asynchronous operation after a delay
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a successful operation
      // Uncomment the line below to resolve the promise
      // resolve("Operation successful");
  
      // Simulate a failed operation
      reject(new Error("Operation rejected"));
    }, 2000); // Delay of 2000 milliseconds (2 seconds)
  });
  
  // Attach handlers to the promise using .then() for resolve and .catch() for reject
  promise
    .then((result) => {
      // This block executes when the promise is resolved successfully
      // 'result' contains the resolved value, which is passed by resolve()
      console.log(result);
    })
    .catch((err) => {
      // This block executes when the promise is rejected
      // 'err' contains the Error object passed by reject()
      console.error(err);
    });