function mapPromise(promise, transformer) {
    return new Promise((resolve, reject) => {
        promise
            .then(value => resolve(transformer(value)))
            .catch(error => reject(error));
    })
}

const myPromise = new Promise((resolve, reject) => { resolve(2) });
const myPromiseRejected = new Promise((resolve, reject) => { reject("Some Error") });

const timesTwo = val => val * 2;

mapPromise(myPromise, timesTwo).then(result => console.log(result));
mapPromise(myPromiseRejected, timesTwo).then(result => console.log(result));