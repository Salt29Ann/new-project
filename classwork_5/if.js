// let ageCustomer = 21
// let isAdult = 18

// if (ageCustomer){
//     console.log('please fill in your age')
// } // перевірка на те що число не пусте
// else if (ageCustomer <18) {
//     console.log('Customer age under 18')
//     if (ageCustomer <10){
//         console.log('Customer age not valid, under 10')
//     }
// }
// else if (ageCustomer >= isAdult ) {
//     console.log('customer age valid, not more than 50')
// } else if ( ageCustomer >= 50 ) {
//     // code to do #2
// } else if (ageCustomer >= 80 ){
//     // code to do #3
// } else {
//     console.log('Patameter not alling to 1 and more' + ageCustomer)
// }

// let condition = 75
// if (condition >=1 && condition <=50 ){
//     console.log('Age accepted')
// } else if (condition >50 && condition <100){
//     console.log('Over aged')
// }

// if (ageCustomer > isAdult ) {
//     console.log('Good')
// } else {
//     console.log('Bad')
// }

// // const accessByAge = ageCustomer > isAdult ? console.log('Good') : console.log('Bad')   // тернарні оператори
// const accessByAge = (ageCustomer > isAdult) ? console.log('Good T') : 
//                     (ageCustomer >= 50) ? console.log('over 50 years T') : console.log('Bad T')

        

// switch(true) {
//     case ageCustomer > isAdult :
//         console.log('accept SW')
//         break;
//     case ageCustomer >= 50 :
//         console.log('accept SW')
//         break;
//     default:
//         // code will be executed if none values match
//         console.log('not accepted SW')
// }

for (let i=0; i<=5; ++i) {
    if (i==3) {
        // continue; // got to next iteration
        break // stop execution
    }
    console.log(i)
}  

const myCar = {type: "Ford", model: 'Kugo', wheels: 4, color: 'white'}
const mySecondCar = {
    type: "Audi", 
    model: 'Q6', 
    wheels: 4, 
    color: 'black',
    milleage: 112,
    engineSound: function() {console.log('brbrbr')}
}
console.log(mySecondCar.type)
console.log(mySecondCar["type"])
mySecondCar.engineSound() //функція викликаться через ()

let carObject = mySecondCar.type

let someText = ""
for (let value in mySecondCar) {
    // someText = mySecondCar[value]
    console.log(mySecondCar[value])
}

for (let value of mySecondCar.color) {
    console.log(value)
}

let count = 0 
while(count <= 5) {
    console.log(count)
    count++
}

do {
    console.log('counter from previous loop ' + count)
} while (count < 3)