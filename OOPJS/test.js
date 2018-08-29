const snail = {
    // _name: "snail",
    get name() {
        return this._name
    },
    set name(val) {
        this._name = val
    }
}

console.log(snail.name)
snail.name = "snail0001"
console.log(snail.name)

function add(num1 = 1, num2 = 2, fun1 = (a, b) => {
    console.log("a, b:", a, b)
}) {
    fun1(num1, num2)
    return num1 + num2
}
// console.log("add:", add(10, 11, (a, b) => {
//     console.log("a * b:", a * b)
// }))



function delay() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove()
        }, 2000)
    })
}

async function add1(num, num2) {
    await delay()
    console.log("num1 + num2:", num + num2)
}

function returnPromise() {
    return function promiseFunc() {
        return Promise.resolve(add1(10, 11))
    }
}

let p1 = returnPromise()
p1()
console.log("Test!!!")