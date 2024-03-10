const myArray = [1, 2, 3, 4, 5];
const anotherArray = myArray.map(function (elem, index) {
  return elem * index;
});

console.log(anotherArray);
