const solution = (msg, k) => {
    if (msg.length <= k) return msg;
    let length = 0;
    return msg
        .split(' ')
        .filter(word => {
            console.log(word, word.length, length, word.length + length)
            if ((word.length + length) > k) return false;
            else {
                length += word.length + 1;
                return true;
            }
        })
        .join(' ')
}

const msg = 'The quick brown fox jumps over the lazy dog';
const k = 39;

console.log(solution(msg, k))