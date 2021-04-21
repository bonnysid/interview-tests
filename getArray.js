const getArray = (root) => {
    let res = []
    while (root) {
        res.push(root.val)
        root = root.next
    }
    return res
}

const getArray = (root) => {
    let res = []
    while (root) {
        res.push(root.val)
        root = root.next
    }
    return res
}

console.log(getArray({
    val: 3, next: {
        val: 5, next: {
            val: 2, next: null
        }
    }
}))

console.log(getArray(null))