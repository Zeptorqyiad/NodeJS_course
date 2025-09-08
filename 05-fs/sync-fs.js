const fs = require("fs")

// Не рекомендуется использовать этот вариант
try {
    fs.writeFileSync("./first.txt", "First file text")
    console.log("File first.txt was written")
    fs.appendFileSync("./first.txt", "\nOne more line")
    console.log("Append text to the first.txt file")
    fs.renameSync("./first.txt", "./renamed-first.txt")
    console.log("File was renamad")
} catch (error) {
    console.log(error)
}
