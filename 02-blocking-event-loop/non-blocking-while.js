const fs = require("fs")
let isRunnig = true

setTimeout(() => (isRunnig = false), 10)
process.nextTick(() => console.log("Next tick"))

function setImmediatePromise() {
    return new Promise((resolve, reject) => {
        setImmediate(() => resolve())
    })
}

async function whileLoop() {
    while (isRunnig) {
        console.log("While loop is running...")
        await setImmediatePromise()
    }
}

whileLoop().then(() => console.log("While loop ended"))
