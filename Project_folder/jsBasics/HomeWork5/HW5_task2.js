function AgeFunc (age) {
    if (age >= 18) {
        console.log("Person is adult " + true)
    } else {
        console.log("Person is not adult " + false)
    }
    return
}
let ageOfAdult = 25
let ageOfTeen = 15
console.log("Age 25 ")
AgeFunc(ageOfAdult)

console.log("Age 15 ")
AgeFunc(ageOfTeen)