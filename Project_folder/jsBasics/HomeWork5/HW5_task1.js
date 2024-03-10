// Function declaration
function matchCalculation1(width, height) {
  const rectangle = width * height;
  return rectangle;
}

let heightOfRectangle1 = 25;
let widthOfRectangle1 = 10;
const rectangleMathCalculation1 = matchCalculation1(
  widthOfRectangle1,
  heightOfRectangle1,
);
console.log("Rectangle area equal", rectangleMathCalculation1);

// // // Arrow Functions
const matchCalculation2 = (width, height) => {
  const rectangle = width * height;
  return rectangle;
};

let heightOfRectangle2 = 25;
let widthOfRectangle2 = 10;
const rectangleMathCalculation2 = matchCalculation2(
  widthOfRectangle2,
  heightOfRectangle2,
);
console.log("Rectangle area equal", rectangleMathCalculation2);

// Function expression
const matchCalculation3 = function (width, height) {
  const rectangle = width * height;
  return rectangle;
};

let heightOfRectangle3 = 25;
let widthOfRectangle3 = 10;
const rectangleMathCalculation3 = matchCalculation3(
  widthOfRectangle3,
  heightOfRectangle3,
);
console.log("Rectangle area equal", rectangleMathCalculation3);
