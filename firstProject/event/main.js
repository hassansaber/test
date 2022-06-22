//rqr class from global obj
const { EventEmitter } = require("events");

// instance of class
const em = new EventEmitter();

console.log(em);

//add listener
em.addListener("EventFirst", (data) => {
  console.log(`first event: ${data}`);
});
//emit
em.emit("EventFirst", "hiiiiiii");

//on
em.on("EventSecond", (data) => {
  console.log(data);
});
em.emit("EventSecond", { hi: "hiiiiiiii", bye: "byeeeeeeeee" });
