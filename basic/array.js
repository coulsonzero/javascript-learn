set()


function init() {
    var arr1 = new Array("HTML", "CSS", "JS", "C++")
    let arr2 = ["HTML", "CSS", "JS", "C++"]
    let nums = [3, 6, 2, 1, 7]
}

function get() {
    let arr = [3, 6, 2, 1, 7]
    console.log(arr.length)         // 5
    console.log(arr.slice(-1))      // 7
    console.log(arr.indexOf(2))     // 2
    console.log(arr.includes(3))    // true
    arr = arr.concat([9, 4])        // [..., 9, 4]
}

function set() {
    let arr = [3, 6, 2, 1, 7]
    arr.push(8)           // [..., 8]
    arr.pop()             // [...]
    arr.unshift(9)  // [9, ...]
    arr.shift()           // [...]

    console.log(arr)
}


function sort() {
    let arr = [1, 5, 3, 9, 2, 10, 12]
    arr.reverse()
    arr.sort()      // [1, 10, 12, 2, 3,  5,  9]
    arr.sort((a, b) => a - b)
    arr.sort((a, b) => b - a)
    console.log(arr)
}


function isarray() {
    let arr = [1, 2, 3]
    console.log(Array.isArray(arr))		// true
    console.log(arr instanceof Array)	// true
    console.log(typeof(arr))            // object
}

function join_split() {
    let arr = [1, 2, 3]
    console.log(arr.join())          // "1, 2, 3"
    console.log(arr.join(" "))       // "1 2 3"
    console.log(arr.join("-"))       // "1-2-3"

    console.log("hello world".split(" "))   // [ 'hello', 'world' ]
}




