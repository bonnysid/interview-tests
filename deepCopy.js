const isObject = obj => typeof obj === 'object'

const deepCopy = (object) => {

    if(Array.isArray(object)) {
        const copy = [...object]

        copy.forEach((item, i) => copy[i] = deepCopy(item))

        return copy
    }

    if(isObject(object)) {
        const copy = {...object}

        for(let key in copy) copy[key] = deepCopy(copy[key])

        return copy
    }

    return object
}

export default deepCopy;
