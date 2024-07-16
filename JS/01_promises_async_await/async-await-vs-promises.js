function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

async function fetchDataAsync() {
  try {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await promise.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

fetchDataAsync();
fetchData();

/* 
Differences between the two methods:

1. fetchData (Promises):
   - Uses .then() and .catch() for handling asynchronous operations.
   - Promises are async by nature, allowing non-blocking code execution.
   - More nested structure.

2. fetchDataAsync (async/await):
   - Uses async/await for handling asynchronous operations.
   - More readable and sequential.
   - Error handling with try/catch.
*/
