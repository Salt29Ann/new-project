const myArray = [ 1, 3, 9, 4, 8, 32, 71, 99, 0 ]
const evenNumbersOfmyArray = myArray.filter (function (evenNumber) {
    return evenNumber % 2 === 0
} )

console.log(evenNumbersOfmyArray)