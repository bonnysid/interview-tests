const solution = (str) => {
    let count = 0
    let swaps = 0;
    const first = str.indexOf('R');
    if (first === -1) return 0
    for (let i = 0; i < str.length; i++) {
        if(swaps >= 1e9 || swaps >= 100000) return -1;
        if (str[i] === 'R') {
            swaps++;
            count = i
        }
    }
    return count === first ? -1 : (count - first - swaps + 1)
}
const str = 'WRRWWR';

console.log(solution(str))