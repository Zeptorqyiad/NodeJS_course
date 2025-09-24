import { EventEmitter } from 'events'

const myEmitter = new EventEmitter()

const timeoutListenerFn = (secondsQty) => {
    console.log(`Timeout event in ${secondsQty} seconds!`)
}

myEmitter.on('timeout', timeoutListenerFn)

setTimeout(() => myEmitter.emit('timeout', 1), 1000)
setTimeout(() => myEmitter.emit('timeout', 2), 2000)

myEmitter.once('singleEvent', () => {
    console.log('Single event occured')
})

// Listener function will be called only once!
setTimeout(() => myEmitter.emit('singleEvent'), 500)
setTimeout(() => myEmitter.emit('singleEvent'), 1500)

// Remove listener from the 'timeout' event
setTimeout(() => myEmitter.off('timeout', timeoutListenerFn), 3000)
setTimeout(() => myEmitter.emit('timeout', 4), 4000)