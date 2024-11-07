let map = new Map([["k1", "v1"], ["k2", "v2"]])

// console.log(map)            // { 'k1' => 'v1', 'k2' => 'v2' }
// console.log(map.size)       // 2
// console.log(map.has("k1"))  // true
// console.log(map.get("k1"))  // 'v1'
// map["k3"] = 'v3'            // {.., 'k3': 'v3'}
map.set('k4', 'v4')         // {..., 'k4' => 'v4'}
// map.delete("k3")            // 无效
map.delete("k4")            // {..., 'k1': 'v1'}
console.log(map)
console.log(map.size)       // 3