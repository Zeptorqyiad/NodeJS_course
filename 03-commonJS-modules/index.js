const { myName, myHobbies, myFavoriteNumber } = require("./multiple-exports")
const { myName: myOtherName, myFriendsName, myGreatHobbies } = require("./export-and-import")
const greetingFn = require("./single-export")

console.log(myName)
console.log(myHobbies)
console.log(myFavoriteNumber)

myHobbies.push("climbing")

greetingFn(myName)

console.log(myOtherName)
console.log(myFriendsName)
console.log(myGreatHobbies)