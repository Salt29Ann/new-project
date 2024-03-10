let users = [
  { name: "Travis", email: "Travis.email@gmail.com", age: 37 },
  { name: "David", email: "David.email@gmail.com", age: 44 },
  { name: "Antony", email: "Antony.email@gmail.com", age: 52 },
];

for (let WebsiteUser of users) {
  const { name, email, age } = WebsiteUser;
  console.log(`Name of user: ${name}, User email: ${email}, User age: ${age}`);
}
