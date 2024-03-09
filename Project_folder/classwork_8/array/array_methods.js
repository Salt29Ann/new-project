let fruits = ['apple', "banana", 'orange', `kivi`]
           // 0         1         2        3

// console.log(fruits[0])

// let elementNumber1 = fruits[0]
// console.log(`I like ${elementNumber1}`)

fruits[3] = 'peach'  // переприсвоєння елементу масиву
fruits[9] = 'lemon' // додавання нового елементу
// fruits[6] = function() {console.log('Hello from array')}

// оголошення масиву за допомогою літералів або new array 
let newFruits = [] // За допомогою літералу масиву
let myArrayFruits = new Array() // За допомогою конструктора Array

// console.log(fruits.length)
// console.log(fruits[fruits.length -9])

// function iterator(arr) {
//     let startIndex = 0
//     return {
//         next: function () {
//             if ( startIndex < arr.length) {
//                 return {
//                     value: arr[startIndex++],
//                     done: false
//                 }
//             }
//             return {
//                 value: undefined, 
//                 done: true
//             }
//         }
//     }
// }

// const arrayIterator = iterator(fruits)
// console.log(arrayIterator.next())


// for(let i = 0; i<fruits.length; i++) {
//     console.log('Index' + i + ' value of index:' + fruits[i] )
// }

let passwords = ['jjhk', 'bjbcj23', 738590,  '12345a', 'Sa234nkl', 3589, 'kkk_45_lk', '79900' ]
for (let element of passwords) {
    console.log(element)
}

// let a = 10
// let b = a

// a = 20

// console.log(a)
// console.log(b)

const fruitsUpdated = fruits
fruits.push('grape')

// console.log(fruits)
// console.log(fruitsUpdated)

fruitsUpdated.push('coconut') // add in the end new element
// console.log(fruits)
// console.log(fruitsUpdated)

fruits.pop() // remove the last element
fruits.unshift('manggis') // add the element at the start
fruits.shift() // remove the element at start


// const slicedFruits = fruits.slice(2, 4) // second elemet included, 4th element is not
// console.log(slicedFruits) // create a new array from the master array

fruits.splice(2, 0, 'pineapple') // 2 - index, 0 - к-сь елементів для видалення, pineapple - назва нового елемент

// console.log(fruits)

fruits.splice(2, 1, 'pineapple', 'melon')
// console.log(fruits)

fruits.splice(2, 2) // delete 2 elements and return back to previous structure
console.log(fruits)

fruits.reverse // повертає елементи в зворотньому порядку 

const newarrayFruitsandPAss = fruits.concat(passwords) // combine 2 arrays into one
console.log(newarrayFruitsandPAss)

// newarrayFruitsandPAss.forEach(element => {
//     console.log(typeof element === String)
// })

const evenPassfortest = newarrayFruitsandPAss.find((element) => element % 2 === 0)
console.log(evenPassfortest)

// const evenPassfortest = newarrayFruitsandPAss.find((element) => {
//     if (typeof element === 'number' && !isNaN(element)) { // перевірка, чи елемент є числом
//         return element % 2 === 0; // перевірка, чи є це число парним
//     }
//     return false; // якщо елемент не є числом, повертаємо false
// })
// console.log(evenPassfortest)

newarrayFruitsandPAss.sort()
console.log(newarrayFruitsandPAss)
console.log(fruits.includes('lemon')) // превіляє чи змінна присутня в масиві


// Set   список унікальних данних 
const emptyNewSet = new Set() // за допомогою літералів порожній масив 
const setNumberone = new Set([1, 1, 1, 2, 3, 4, 3, 4, 5, 5 ]) // за допомогою літералів з масиву

console.log(setNumberone)

setNumberone.add(6)
setNumberone.delete(3)
console.log(setNumberone)
