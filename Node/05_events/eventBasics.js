const EventEmitter = require("events"); // Import the 'events' module and instantiate an EventEmitter

const customEmitter = new EventEmitter();

// The 'on' method adds a listener for the specified event ('response' in this case).
// Listeners are functions that execute when the event is triggered.
customEmitter.on("response", () => {
  console.log("Data received");
}); // This listener simply logs "Data received" when the 'response' event occurs.

// Multiple listeners can be registered for the same event.
// This listener expects four arguments when the 'response' event is emitted.
customEmitter.on("response", (arg1, arg2, arg3, arg4) => {
  console.log("Executing additional logic with parameters:");
  console.log(arg1, arg2, arg3, arg4);
}); // It logs all arguments to demonstrate how event parameters are passed.

// Listeners do not need to use all provided arguments.
// Here, only the first argument is used.
customEmitter.on("response", (arg1) => {
  console.log("\n\nThird logic triggered:");
  console.log(arg1);
}); // Demonstrates selective argument usage in event listeners.

// The 'emit' method triggers the event, passing arguments to the listeners.
customEmitter.emit("response", "additional info", 123123, 222, "asds");
// This call to emit passes four arguments, which are received by the listeners above.

// Note: Order is crucial; listeners must be registered before emitting the event.
