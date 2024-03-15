let ObjectNum1 = {
    name: "Kris",
    lastName: "Moon",
    age: 28,
    address: "Odessa",
    phone: {
        mobile: "380994561178",
        fax: "23451",
        ' Whatsup, Telegram': "380634546723"
    } // вкладенний обєкт
}
console.log(ObjectNum1.phone.fax)
console.log(ObjectNum1.phone[' Whatsup, Telegram'])

let anotherObj = ObjectNum1
console.log(anotherObj.age)

anotherObj.age = 21 // змінна також стосуеться батьківського обєкта

console.log(ObjectNum1.age) 

const emptyObj = {}
emptyObj.name = "NameofObj" //додавання властивості до обєкта

const namePanda = "Panda"
const age2000 = 2000

const objectValuesPoint = {
    name: namePanda,
    age: age2000
}

const selectorHeader = 'h1.main.pointer'
const textinHeader = "Hello User"

const combinedSelectors = { selectorHeader, textinHeader}

console.log(combinedSelectors.selectorHeader)

const prop = 'age'
const selectorForFooter = {
    [prop]: 3000
}

const ageFromObj = selectorForFooter.age // => 3000
console.log(ageFromObj)

const objectValuesPointPlus = {
    name: namePanda,
    age: age2000, 
    sayHi: function() {
        console.log("Hello from method, not function")
    },
    showname: function () {
        console.log(`My name is ${this.name}`)
    },
    gender: null
}

const genderFromOBJ1 = objectValuesPointPlus.gender ?? 'default_value' // nullish coalescing operator

objectValuesPointPlus.sayHi()
objectValuesPointPlus.showname()
console.log(genderFromOBJ1)

// оператор опціонального доступу - ?
const resultOfFunc = objectValuesPointPlus.showAge?.()
console.log(resultOfFunc) // undefined

// for in used for objects
for (let iterKey in objectValuesPointPlus) {
    // console.log(iterKey)
    console.log(iterKey + ': ' + objectValuesPointPlus[iterKey])
}

const newObjPlus = Object.create(objectValuesPointPlus) // перевіряє в обєкті чи присутня властивість
newObjPlus.legs = 2

console.log(objectValuesPointPlus.hasOwnProperty("legs")) // false
console.log(newObjPlus.hasOwnProperty("legs")) // true

const objBasedArray = [ 
    {name: 'John', lastname: 'Doe'},
    {name: 'Alice', lastname: 'Smith'},
    {name: 'Sony', lastname: 'Taylor'}
]

// for Each only for array, not object 
objBasedArray.forEach(function(objBasedArray) {
    if (!objBasedArray.legs) {
        console.log('no property')
    } 
    // another action
})

const keys = Object.keys(objectValuesPointPlus) // вивести список ключів із оєкта
const valuesObj = Object.values(objectValuesPointPlus) // вивести список значень 
console.log(keys)
console.log(valuesObj)

// деструктуризація обєкта 
combinedSelectors.footerElement = 'link.div.imput'
combinedSelectors.linkToHomePage = 'link.home.page'

// console.log(combinedSelectors)
const { footerElement: newFooter, linkToHomePage: newLinkHome } = combinedSelectors // 2  вибрані зміні та переіменовані, які посилаються на властивості обєкта combinedSelectors
console.log(newFooter, newLinkHome)

const elementsArray = [ 'input', 'button', 'button.Send']
const [ firstElement, secondElement, thirdElement] = elementsArray
const [, , thirdElement2] = elementsArray

// spread operator ... (створює копію яка не впливає на батьківський)
const copiedSelectors = { ...combinedSelectors }
copiedSelectors.selectorHeader = 'ABC'
console.log(combinedSelectors.selectorHeader)

// assign method (working same way as spread operator)
const copiedSelectors2 = Object.assign({}, combinedSelectors)
copiedSelectors2.selectorHeader = 'NNN'


function clickAndVerifyDatainFooter (obj){
    console.log("Click on the element:" + obj.footerElement)
}
clickAndVerifyDatainFooter(copiedSelectors)

// Map (будь-який тип данних)
const simpleMap = new Map()
simpleMap.set('keyNum1', 'valueNum1')
console.log(simpleMap.get('keyNum1'))
console.log(simpleMap.has('keyNum2')) // перевіряє чи присутний ключ в Мар
simpleMap.delete('keyNum3') // видалення ключа (якщо він існує)
// simpleMap.clear() // вичистит всі дані




