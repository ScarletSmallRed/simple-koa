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