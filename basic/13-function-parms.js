const func = () => ...

const func = x => ...

const func = (x, y) => {}

const func = (nums) => {}

const func = (...nums) => {}

// default param value
function test(a, b = 3, c = 42) {
	return a + b + c
}

const test = (a, b = 3, c = 42) => a + b + c
