// // // sayHi2()
// // // sayHi1()
// // // another code
// // // another code
// // // another code

// // function sayHi1 () {
// //     console.log('Hi')
// // }
// // let sayHi2 = function() {
// //     console.log('Hello')
// // }
// // const sayHi3 = () => { console.log("Greatings")}

// // const newSayHi4 = sayHi3
// // const newSayHi5 = sayHi1
// // const newSayHi6 = sayHi2

// // console.log(newSayHi5.name)

// // // newSayHi4()
// // // sayHi2()

// // // зробити перетворення тіла функції в стрінгу
// // console.log(newSayHi6.toString())

// // const say = (funcParam) => { console.log (funcParam.name.length) }
// // say(sayHi1)



// const isOdd = (n) => {return n % 2 !==0 }

// let useAnotherFunc  = (callback, num) => {
//     const isNumOdd = callback(num)
//     console.log(`The number ${num} is odd number: ${isNumOdd}`)
// }

// useAnotherFunc(isOdd, 5)


// function fetchData(url, callback) {
//     fetch(url)
//         .then(response =>response.json())
//         .then(data => callback(data))
//         .catch(error => console.log(error))
// }

// fetchData('https://jsonplaceholder.typicode.com/todos/1', function(data) {
//     console.log(data)
// })

// const myCar = {type: "Ford", model: 'Kugo', wheels: 4, color: 'white', sound: 'beep',
// makeSignal: function() { console.log(`Car makes signal ${this.sound}`)}
// }
// myCar.makeSignal()

// const car2 = {type: "Nissan"}

// function showType () { console.log(this.type) }
// myCar.function1 = showType 
// car2.function2 = showType // function2: () { console.log(this.type) }

// car2.function2()
// myCar.function1()



// function Person(name) {
//     this.name = name
//     this.greet = function() {
//         console.log( ` Hello, ${this.name}! `)
//     }
// }

// const user = new Person('Samuel')
// user.greet()


// // call - виклик ф-ій з вказаним контекстом
// greet = function() {
//     console.log( ` Hello, ${this.name}! `)
// }
// const user2 = { name: 'Stepan' }
// greet.call(user2)

// // apply - працює з контекстом того де ми будемо її викликати, але може приймати масив аргументів для запуску ф-ії; 
// // зміна контексту з декількома аргументами або масивами аргументів
// function greet(timeOfday, weather) {
//     console.log(`Good ${timeOfday}, ${this.name}! It's ${weather} today.`)
// }
// const person = {name: 'Anna'}
// greet.apply(person, ['morning', 'sunny'])

// // bind - має певний контекст того обєкта, але не викликає всю функцію одразую Викор для записування в памяті JS код і в момент виклику вона буде викор цей код
// // створення нової ф-ії без її виклику

// function greet() {
//     console.log( `Hi, I am ${this.name} `)
// }
// const person2 = { name: 'Alice' }
// const greetPerson = greet.bind(person2)
// greetPerson ()


// // анонімні функції викор для викликання коду тут і зараз і в той момент де вона оголошена, в тій області видимості де будете викор
// (function(){
//     // function body 
//     //console.log
// }) ()


// closure
function master () {
    // console.log('Hi')
    let masterValue = 10 

    return function () {
        // console.log(masterValue)
        return ++masterValue
    }
    // return slave
}

let closureFunc = master()

console.log(closureFunc())
console.log(closureFunc())

// рекрусивні функції - виклик самої себе
function factorial(n) {
    if (n === 0) { // базовий випадок: факторіал 0 = 1
        return 1;
    } else {
        return n * factorial(n - 1); // рекурсивний виклик; множення на 5, 4, 3, 2, 1
    }
}

// console.log(factorial(5)); // Виведе: 120
const factorialRes = factorial(5)
console.log(factorialRes)


// Iterators - ф-ії які дозволяють послідовно перебирати дані в будь-яких коллекціях

// Generators - функціонал який дозволяє створ колекції даних тої довжини якої нам потрібно 
