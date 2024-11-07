function showInfo(name, age) {
	// code
	return `name: ${name}\nage: ${age}`
}

console.log(showInfo("coulson", 20))
/*
name: coulson
age: 20
*/


// undefined: 函数没有返回值
function check(name) {
	var res = "My name is " + name
}

console.log(check("coulson"))
// Output: undefined

// 闭包
const add = (function () {
    let counter = 0
    return function () {
        return (counter += 1)
    }
})()
