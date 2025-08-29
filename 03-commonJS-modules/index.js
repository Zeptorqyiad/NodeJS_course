const { myName, myHobbies, myFavoriteNumber } = require("./multiple-exports")
const greetingFn = require("./single-export")

console.log(myName)
console.log(myHobbies)
console.log(myFavoriteNumber)

greetingFn(myName)
