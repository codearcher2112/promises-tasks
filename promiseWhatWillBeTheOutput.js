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

Promise.resolve()
    .then(data => {
        throw new Error('Api Error');
        return 1;
    })
    .then(data => console.log('ok'))
    .catch(error => {
        console.log(error.message);
        return "2";
    })
    .then(data => {
        console.log(data);
    });

// Api Error
// 2

/* 3 */

console.log(1);

setTimeout(() => {
    console.log(2);
}, 20);

Promise.resolve()
    .then(() => {
        console.log(3);
        return 1;
    })
    .catch(e => console.log(e, 4))
    .finally(res => console.log(res, 5))
    .then((res) => console.log(res));

console.log(6);

// 1
// 6
// 3
// undefined 5
// 1
// 2 