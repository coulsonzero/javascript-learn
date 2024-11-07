function uniqueArr() {
    let arr = [3, 1, 5, 2, 3, 7, 2]
    ans = arr.filter((item, index) => arr.indexOf(item) === index)
    console.log(ans)    // [ 3, 1, 5, 2, 7 ]
}


