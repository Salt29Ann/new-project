// ES Module import=> export
export const myValue = 'text TEXT'
                    //  012345678
console.log(myValue[5])
console.log(myValue.length)
console.log(myValue.toUpperCase())
let onlyUpperCaseText = myValue.substring(5, 9) 

let myNumber2 = 2
// глобальна область видимості змінних
export function addingNumbers(a, b) {
    let myNumber1 = 10
    myNumber2 = 22
    // локальна область видимості змінних
    return a + b
}
let result = addingNumbers(2, 2)

console.log(myNumber2)

// console.log(result)

// commonjs import => export
 /* const myValue2 = 'text TEST'
 module.exports = {myValue2} */

 let resultOfDividing = 5 % 2 // 1 повертає залишок від ділення одного операнда на інший
//  ++ збільшення на одиницю числа (використовується тільки для змінних)
let numberOne = 1
numberOne++ //інкрементує операнд на 1 (постфіксний тип)
++numberOne // префіксна форма повертає нове значення одразу
console.log(numberOne)
// -- зменшення числа на одиницю (використовується тільки для змінних)
numberOne-- // декрементує операнд на 1
console.log(numberOne)
let x = 5 // 6
let y = ++x // 6
console.log(x)
console.log(y)

let counter = 1
let counterText = '1'
let number1 = ++counter
console.log(number1)

let counter2 = 1
let number2 = counter++
console.log(counter2)
console.log(number2)

// a > b; a < b; 0 == null true;  0 === null false ; 
console.log(counter!== counterText) // Строга нерівність

// || or він буде шукати значення яке дорівнює true, коли він знаходить переривається виконання операції
console.log(true || false)
console.log(false || false) // якщо не знаходить true повертає false який він отримав у результаті пошуку
console.log(true || true)

// && and він повертає true якщо обидва оператори є неправдивими і false якщо не буде знаходити оператора правдивого 
console.log(false && false) 
console.log(true && true)
console.log(false && true)

// ! перетворення операнда на зворотній
console.log(!true)

let myNewValue  = 'testing Text'
let varF
let varX
let varR 

varF = varR = varX = 10 // присвоення змінним однакового значення
console.log(varX) 

varX = varX * 2
varX +=20
console.log(varX)
console.log(varX.toString()) // переводить у текстовий тип данних
// or переоголошення змінної щоб уникнути поломки коду
let varXupdated = varX * 2
console.log(varXupdated)

let javascriptName = 'JavaScript'
let newVariable = javascriptName + " " + myNewValue
console.log(newVariable)

let newVariableConcat = javascriptName.concat(" ", myNewValue)

let JStext = 'JavaScript   ' // trim() => 'JavaScript' обрізає пробіли по краям

console.log(String(varX)) // перетворити значення в стрінгу
console.log(Number(myValue)) // перетворити значення у числове

let myVarA = 'abc4e67hi9'
console.log(String(myVarA))
console.log(Number(myVarA))