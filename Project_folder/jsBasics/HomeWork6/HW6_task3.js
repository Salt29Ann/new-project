function divide (numerator, denominator) {
if (typeof numerator !== "number" || typeof denominator !== "number") {
    console.error("Both numerator and denominator must be numbers")
    return
}

if (denominator === 0) {
    console.error("Denominator does not quale 0")
    return
}
return (numerator / denominator)
}

console.log(divide('text', 1))
