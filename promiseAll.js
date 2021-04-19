const promiseAll = promises => new Promise((resolve, reject) => {
    const arr = [...promises]
    const res = []
    let count = promises.length

    arr
        .map(Promise.resolve, Promise)
        .map((p, i) => p.then(data => {
            res[i] = data
            if(--count === 0) resolve(res)
        }, reject))
})

promiseAll([
    new Promise(resolve => setTimeout(() => resolve(42), 3000)),
    new Promise(resolve => setTimeout(() => resolve(41), 1000)),
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error()), 5000)
    })]
)
    .catch(e => console.log(e))
    .then(data => console.log(data))
