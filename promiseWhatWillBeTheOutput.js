/* 1 */

Promise.resolve()
    .then(() => console.log(1))
    .catch(() => console.log(3))
    .then(() => { console.log(2); throw new Error(); })
    .then(() => console.log(4))
    .then(() => console.log(4));

Promise.resolve()
    .then(() => console.log(11))
    .then(() => { console.log(12); throw new Error(); })
    .catch(() => console.log(13))
    .catch(() => console.log(14))
    .then(() => console.log(15));

// 1
// 11

// 12
// 2

// 13
// 15

/* 2 */