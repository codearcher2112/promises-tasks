function squarePromise(promise) {
    return new Promise((resolve, reject) => {
        promise.
            then(result => {
                if (typeof result === "number") {
                    resolve(result * result);
                } else if (typeof result === "string" && !isNaN(result)) {
                    resolve(Number(result) * Number(result));
                } else if (typeof result === "string" && isNaN(result)) {
                    reject(`Cannot convert '${result}' to a number!`);
                } else {
                    reject("Invalid input");
                }
            }).catch(error => reject(error));
    });
}

let promise1 = Promise.resolve(4);
let promise2 = Promise.resolve("1234");
let promise3 = Promise.resolve("Test");
let promise4 = Promise.resolve(true);

squarePromise(promise1);
squarePromise(promise2);
squarePromise(promise3);
squarePromise(promise4);