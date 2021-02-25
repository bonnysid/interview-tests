const solution = (array) => {
    let changes = 0;
    let isPrevTreeMore = false;

    for (let i = 0; i < array.length - 1; i++) {
        if (isPrevTreeMore && array[i] >= array[i + 1] || array[i] === array[i + 1]) {
            changes++;
            isPrevTreeMore = false;
            continue;
        }
        isPrevTreeMore = array[i] >= array[i + 1];
    }
    return changes
}

const arr = [5, 4, 3, 2, 6];

console.log(solution(arr));