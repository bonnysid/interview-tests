const maxWidthRoad = (x, y) => {
    const xCopy = [...x].sort((a, b) => a - b);
    // const dumpX = [];
    const lengths = [];
    for(let i = 0; i < xCopy.length - 1; i++) {
        // if(dumpX.includes(xCopy[i])) continue;
        // dumpX.push(xCopy[i]);
        lengths.push(xCopy[i+1] - xCopy[i]);
    }

    return Math.max(...lengths);
}

const x = [1, 8, 7, 3, 4, 1, 8];
const y = [6, 4, 1, 8, 5, 1, 7];

console.log(maxWidthRoad(x,y));
