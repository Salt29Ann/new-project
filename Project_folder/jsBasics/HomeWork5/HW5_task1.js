
// Function declaration
function matchCalculation(width, height) {
    const rectangle = width * height
    return rectangle
}

let heightOfRectangle = 25 
let widthOfRectangle = 10
const rectangleMathCalculation = matchCalculation(widthOfRectangle, heightOfRectangle)
console.log("Rectangle area equal", rectangleMathCalculation)


// // // Arrow Functions
const matchCalculation = (width, height) => {
    const rectangle = width * height
    return rectangle;
}

let heightOfRectangle = 25
let widthOfRectangle = 10
const rectangleMathCalculation = matchCalculation(widthOfRectangle, heightOfRectangle)
console.log("Rectangle area equal", rectangleMathCalculation)


// Function expression
const matchCalculation = function(width, height) {
    const rectangle = width * height
    return rectangle;
}

let heightOfRectangle = 25
let widthOfRectangle = 10
const rectangleMathCalculation = matchCalculation(widthOfRectangle, heightOfRectangle)
console.log("Rectangle area equal", rectangleMathCalculation)
