/**
 * tee() for async iterables
 * 
 * 
 * const [a, b] = tee(iter);
 * for await (const x of a) {
 *  console.log(x); // 1, 2, 3
 * }
 * for await (const x of b) {
 *   console.log(x); // 1, 2, 3
 * }
 * 
 */

const asyncIterable = {
    [Symbol.asyncIterator]() {
        return {
            i: 0,
            async next() {
                if (this.i >= 3) return { value: this.i, done: true };
                return { value: ++this.i, done: false };
            }
        };
    }
};

const tee = (iterable) => {
    const iter = iterable[Symbol.asyncIterator]();
    const results = new Array(2).fill([]);

    const copy = (state, idx) => {
        return {
            [Symbol.asyncIterator]() {
                return {
                    async next() {
                        const res = await iter.next();
                        state.push(res);
                        if (results[idx + 1]) results[idx + 1].push(res);
                        return res;
                    }
                }
            }
        };
    }

    return results.map(copy);
}

(async function main() {
    const [a, b] = tee(asyncIterable);
    for await (let num of a) {
        console.log(num);
    }
    for await (let num of b) {
        console.log(num);
    }
})();
