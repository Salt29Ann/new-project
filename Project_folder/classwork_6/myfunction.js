// function name (parameters) {
//     statements
// }

// function printToConsole (text) {
//     let TextToBrPrinted = "Your text: " + text
//     console.log(TextToBrPrinted)
// }
// printToConsole("Hello world!")

// function addNumbers (a,b = 5) {
//     return a + b
// }
// console.log(addNumbers(2))  //7


// // Function declaration
// function sum () {
//     console.log(2+2)  // call the function sum()
// } // ф-ія без використання параметрів 
// // sum()

// Function expression
const sum = function () {
    console,log(2+2)   // call the function sum()
}

// Arrow Functions
const sum = () => {
    console.log(2+2) // call the function sum()
}

const sum = () => console.log(2+2)  // call the function sum()

// Function declaration

function sum (param1, param2, param3) {
    const sum = (param1 + param2 + param3)
    return sum
} 
// const totalSum = sum(4, 4, 10)
// console.log(totalSum)

// const getSum = sum(5, 5, 5)
// console.log(getSum)

// function greeting(name, hello="Hello") {
//     console.log(`${hello} ` + name) // hello + " " + name / `${hello} ${name}` / hello.concat(' ',name)
// }
// greeting('John')

// function sum2 (...allNumbers) {
//     let sum = 0
//     for(let num of allNumbers) {
//         sum += num
//     } 
//     return sum
// }
// const resultOfFuncwithParams = sum2(10, 20, 30, 40)
// console.log(resultOfFuncwithParams)

// function sum3 (param1, param2, ...resNumbers) {
//     let sum = param1 + param2
//     return sum
// }

// function greatUser(name) {
//     let hellotext = 'Hello'
//     if (name) {
//         console.log(`${hellotext} ${name}`)
//         console.log(`The length of name is ${name.length}`)
//     }   else {
//         console.log("Need parameter name")
//     }
// }
// greatUser('Koala') // user name in ()

// function greatUser() {
//     const iname = prompt("What is your name? ") // work in browser
//     let hellotext = 'Hello'
//     if (iname) {
//         console.log(`${hellotext} ${iname}`)
//         console.log(`The length of name is ${iname.length}`)
//     }   else {
//         console.log("Need parameter name")
//     }
// }
// greatUser() 

// import readline from "readline";

// function greetUser() {
//     const input = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout,
//     })
//     input.question("What is your name?", function (iname) {
//     let Txt = "Hello"
//     if (iname) {
//         console.log(`${Txt} ${iname}`)
//         console.log(`The length of name is ${iname.length}`)
//     }   else {
//         console.log("Need parameter name")
//     }
//         input.close()
//     })
// }

// func sum (parametr1, parametr2, parametr3) {
//     if(parametr1 > parametr2) {
//         console.log("parameter number 1 is bigger than parameter number 2")
//         // return  переривається робота функції коли виконується умова 
//     } else if(parametr2 > parametr1) {
//         console.log("parameter number 2 is bigger than parameter number 1")
//         // return
//     } else{
//         console.log("parameters are the same value")
//     } // return
//     const sum = parametr1 + parametr2 + parametr3
//     return sum 
// }

// function hi() {
//     console.log('Hi')
//     bye()
// }

// function bye() {
//     console.log('bye')
// }

// hi()