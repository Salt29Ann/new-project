// procedual programming

function calculateSUM(a, b) {
  return a + b;
}
const resultOFSUM = calculateSUM(5, 5);
console.log(resultOFSUM);

// functional programming

const calculateSUM2 = (a, b) => a + b;
console.log(calculateSUM2(5, 3));

const triple = (arr) => arr.map((num) => num * 3);

const filterEven = (arr) => arr.filter((num) => num % 2 == 0);

const calculateSum3 = (arr) =>
  arr.reduce((accumulator, num) => accumulator + num, 0);

const numbers = [1, 2, 3, 4, 5];
const resultOfTriple = triple(numbers);
console.log(filterEven(numbers));

console.log(calculateSum3(filterEven(triple(numbers)))); // функціональний підхід 
// результат однієї ф-ії передається для виконання в наступну ф-ію і потім передається в ф-ію №3

// OOP - Oriented Object Programming 

class MyClass {
  constructor() {}
  method() {}
  method1() {}
} 

class User {
  #timeout = 3000;  // приватний метод для основного базового класуб недоступні для класів наслідників
  static country = 'ua'; // оголошено тільки всередині батьківського класу
  constructor(name, age, url) {
    this.name = name;
    this.age = age;
    this._url = url; // захищенна властивість всередині класу
  }

  sayHi() { 
    console.log(this.name);
  }
  sendRequest() {
    console.log('request was send');
  }
  get showUrl() {      //get повернення данних 
    return this._url;
  }
  set showUrl(value) {   // set запис данних
    if (value.length <= 10) { // перевірка value значення 
      console.log('URL not approved');
      return;
    }
    this._url = value;
  }
  #addTimeout() {  // додавання приватного методу додатково
    this.#timeout++;
    return this.#timeout;
  }
  getTimeout() {
    return this.#timeout;
  }
  static walk(number) { // статичний метод
    return number + 1;
  }
}

let myUser = new User('Denys');
myUser.sayHi(); // виклик ф-ії class User
myUser.age = 2024;
myUser._url;
console.log('Timeout is: ' + myUser.getTimeout()); // виклик приватного методу

console.log(User.walk(300)); // виклик статичного методу з самого класу, не повязані з екземплярами 
console.log(User.country);

// myUser.#addTimeout() // виклик приватного методу
// myUser.#timeout = 10000
// console.log(typeof myUser)

class ApiController extends User {
  //_url = 'https/knknmnmm.com' // захищенна властивість - викор тільки всередині ApiController
  sendPostRequest() {
    console.log(`${this.age}, sksdkfjskdf`);
  }
  sendRequest() {
    super.sendRequest('httpdgdflgkldfkgld'); // виклик батьківського from User

    console.log('The field with http param correct');
  }
}

const newApiCall = new ApiController('axios-child', 3000, 'myURL');
newApiCall.sendPostRequest();

const objectBasedofUser = new User('axios-child', 3000, 'myURLABCDEF');
newApiCall.showUrl = 'my'; // виклик set 
console.log(newApiCall.showUrl); // виклик get 

// приватні методи позначені # ніхто крім автора не змінює, вони досупні тільки в оголошеномену класі 
// захищені методи позначені _ можна викор у классах нашадків і змінювати  значення 
