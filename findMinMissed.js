const findMinMissed = (A) => {

    // only positive values, sorted
    A = A.filter(x => x >= 1).sort((a, b) => a - b)

    let x = 1

    for (let i = 0; i < A.length; i++) {
        // if we find a smaller number no need to continue, cause the array is sorted
        if (x < A[i]) {
            return x
        }
        x = A[i] + 1
    }

    return x

}

const arr = [1, 2, 3, 4, 5, 7];

export default findMinMissed;

