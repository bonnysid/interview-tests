const groupBy = <T>(data: T[], callback: (item: T) => string | number) :{[key: string]: T[] } => {
    return data.reduce((res, item) => {
        const key = callback(item)
        return {
            ...res,
            [key]: res[key] ? [...res[key], item] : [item]
        }
    }, {})
}

const resNum = groupBy<number>([1.2, 1.1, 2.3, 0.4], Math.floor)
const expectResNum = {
    "0": [0.4],
    "1": [1.2, 1.1],
    "2": [2.3],
}
console.log(resNum)

const resLength = groupBy<string>(["one", "two", "three"], (el) => el.length)
const expectResLength = {
    "3": ["one", "two"],
    "5": ["three"],
}

console.log(resLength)

enum Gender {
    Male,
    Female,
}

interface IGenderObj {
    g: Gender,
    n: string
}

const resGender = groupBy<IGenderObj>(
    [
        {g: Gender.Male, n: "A"},
        {g: Gender.Female, n: "B"},
        {g: Gender.Female, n: "C"},
    ],
    (el) => el.g
)

let expectResGender = {
    [Gender.Male]: [{g: Gender.Male, n: "A"}],
    [Gender.Female]: [
        {g: Gender.Female, n: "B"},
        {g: Gender.Female, n: "C"},
    ],
}

console.log(resGender)


