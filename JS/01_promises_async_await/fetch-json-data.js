// Use the fetch function to get data from a URL
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    return response.json();
    // response.json() returns a promise
    // The response.json() method parses the response body text as JSON
    // and returns a JavaScript object
  })
  .then((data) => {
    // This .then() is part of the chaining concept. It handles the parsed JavaScript object.
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
    console.log("There was an error with the request.");
  });
