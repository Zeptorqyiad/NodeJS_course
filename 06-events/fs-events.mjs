import { EventEmitter } from "events"
import fs from "fs"

const fileEmitter = new EventEmitter()

const filePath = './first.txt'

fileEmitter.on("writeComplete", () => {
    console.log(`File ${filePath} was written`)
    fs.appendFile(filePath, "\ntest-2", () => {
        fileEmitter.emit("appendComplete")
    })
})

fileEmitter.on("appendComplete", () => {
    console.log(`Append text to the ${filePath} file`)
    fs.rename(filePath, "./renamed-first.txt", () => {
        fileEmitter.emit("renameComplete")
    })
})

fileEmitter.on("renameComplete", () => {
    console.log("File was renamad")
})

fs.writeFile(filePath, "test-1", () => {
    fileEmitter.emit("writeComplete")
})