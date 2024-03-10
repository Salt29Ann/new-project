const person = {
  firstName: "Taylor",
  lastName: "Swift",
  age: 34,
};

person.emailAddress = "taylorSwift@gmail.com";

delete person.age;

console.log(person);
