const main = () => {
	// code
}

main()


// 单例模式
const getDate = (() => {
	const d = new Date()
	const year = d.getFullYear()
	const month = d.getMonth() + 1
	const day = d.getDate()
	const date = `${year}-${month}-${day}`
	console.log(date)
})()