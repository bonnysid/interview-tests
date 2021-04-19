const getMaxPathTree = (node) => {
    let distincts = [];

    const checkNode = (x, node) => node ? node.x > x : false;

    const roundTree = (node, length) => {
        let len = length;
        if (!node) return;
        if (checkNode(node.x, node.l)) {
            len = roundTree(node.l, ++length)
        }
        if (checkNode(node.x, node.r)) {
            len = roundTree(node.r, ++length)
        }

        distincts.push(len)

        return len - 1;
    }
    roundTree(node, 0)
    return Math.max(...distincts);
}

const tree = {
    x: 1,
    l:
        {
            x: 2,
            l: {x: 1, l: null, r: null},
            r: {x: 2, l: null, r: null}
        },
    r:
        {
            x: 2,
            l: {x: 4, l: {
                x:6,
                    r: null,
                    l:null
                }, r: null},
            r: {x: 1, l: null, r: null}
        }
}

console.log(getMaxPathTree(tree))