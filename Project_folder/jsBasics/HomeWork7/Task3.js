const myArray = [ 31, 92, 1, 0, -5, 72, 45 ]
const SumOfmyArray = myArray.reduce (function (total, value ) {
    return total + value
}, 0 )

console.log(SumOfmyArray)