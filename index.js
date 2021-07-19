// Write your solution here!

var drivers =  ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){return drivers.push(name)}
function destructivelyPrependDriver(name){return drivers.unshift(name)}
function destructivelyRemoveLastDriver(name){return drivers.pop(name)}
function destructivelyRemoveFirstDriver(name){return drivers.shift(name)}

function appendDriver(name){
    return [...drivers, name] 
}
function prependDriver(name){
    return [name, ...drivers] 
}

function removeLastDriver(){
    return drivers.slice(0,drivers.length-1)
}

function removeFirstDriver(){
    return drivers.slice(1)
}