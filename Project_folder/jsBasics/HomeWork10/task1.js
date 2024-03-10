function myFunc1(sometext, timer) {
  setTimeout(() => {
    console.log(sometext);
  }, timer);
  console.log("Hello User!");
}
myFunc1("Welcome on our website", 2000);
