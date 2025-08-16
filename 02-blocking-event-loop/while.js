let isRunnig = true

setTimeout(() => (isRunnig = false), 10)
process.nextTick(() => console.log("Next tick"))

while (isRunnig) {
    console.log("While loop is running...")
}
