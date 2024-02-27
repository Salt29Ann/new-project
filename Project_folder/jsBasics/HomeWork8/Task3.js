const Car1 = {
    brand: 'Tesla',
    model: 'model Y',
    year: '2022'
}

const Car2 = {
    brand: 'BMW',
    model: '328i',
    owner: 'Ismail Nafisi'
}

const Car3 = { ...Car1, ...Car2 }
console.log(Car3)