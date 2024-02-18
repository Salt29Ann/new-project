function handleNum (number, CallBackEvenNum, CallBackOddNum) {
    if (number % 2 ===0) {
        CallBackEvenNum ()
    } else {
    CallBackOddNum () }
}
function CallBackEvenNum () {
    console.log("Number type is even")
}
function CallBackOddNum () {
    console.log("Number type is odd")
}

handleNum(81.5, CallBackEvenNum, CallBackOddNum)

function handleEvenNum () {
    console.log("Number is even")
}
function handleOddNum () {
    console.log("Number is odd")
}

handleNum(2, handleEvenNum, handleOddNum )