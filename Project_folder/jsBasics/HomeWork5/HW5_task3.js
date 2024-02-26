const checkOrder = (available, ordered) => {
    if (ordered === 0) {
        return ("Your order is empty")
    } else if (available < ordered) {
        return ("Your order is too large, we do not have enough goods.")
    } else {
        return ("Your order is accepted")
    }
}

console.log(checkOrder(101, 99))
console.log(checkOrder(99, 101))
console.log(checkOrder(101, 0))
