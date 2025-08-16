const fs = require("fs")
const DNS = require("dns")

function info(text) {
    console.log(text, performance.now().toFixed(2))
}

console.log("Program start")

// CLose events
fs.writeFile("./test.txt", "Hello Node.js", () => info("File written"))

// Promises
Promise.resolve().then(() => info("Promise 1"))

// Next tick
process.nextTick(() => info("Next tick 1"))

// setImmediate (Check)
setImmediate(() => info("Immediate 1"))

// Timeouts
setTimeout(() => info("Timeout 1"), 0)
setTimeout(() => {
    process.nextTick(() => info("Next tick 2"))
    info("Timeout 2")
}, 100)

// SetInterval
let intervalCount = 0
const intercalId = setInterval(() => {
    info(`Interval ${(intervalCount += 1)}`)
    if (intervalCount === 2) clearInterval(intercalId)
}, 50)

// I/0 Events
DNS.lookup("localhost", (err, address, family) => {
    info("DNS 1 localhost", address)
    Promise.resolve().then(() => info("Promise 2"))
    process.nextTick(() => info("Next tick 3"))
})

info("Program end")
