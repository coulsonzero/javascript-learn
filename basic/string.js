let s = "hello world"
let str2 = new String("Hello, World !")

// 查询
console.log(s)
console.log(typeof s)              // string
console.log(typeof s === "string") // true
console.log(s instanceof String)   // false
console.log(str2 instanceof String)// true
console.log(s.length)              // 11
console.log(s.charAt(0))           // h
console.log(s.indexOf("w"))        // 6 (不存在返回-1)
console.log(s.substring(3, 5))     // lo
console.log(s.slice(3, 5))         // lo
// 修改
console.log(s.concat("!"))         // hello world!
console.log(s.split(" "))          // ["hello", "world"]
console.log(s.replace("world", "earth"))   // "hello earth"
console.log(" hello world ".trim())   // "hello world"
console.log("7".padStart(2, "0"))     // "07"
console.log("3.14".padEnd(5, "0"))    // "3.140"
str2 = "hello3306world8080pop"
console.log(str2.match(/\d+/g))       // [ '3306', '8080' ]
// 判断
console.log(s.includes("world"))    // true
console.log(s.startsWith("hello"))  // true
console.log(s.endsWith("world"))    // true
console.log(s.toUpperCase())        // HELLO WORLD
console.log(s.toLowerCase())        // hello world

let name = "john"
console.log(`hello ${name}`)          // hello john
console.log(typeof(Number("12")))     // number: 12
