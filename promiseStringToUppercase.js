function promiseStringToUppercase(param) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof param === "string") {
                resolve(param.toUpperCase());
            } else {
                reject(param);
            }
        }, 500);
    });
}

promiseStringToUppercase("Hello there!")
    .then(result => `Resolved: ${result}`)
    .catch(error => `Rejected: ${error}`);

promiseStringToUppercase(123)
    .then(result => `Resolved: ${result}`)
    .catch(error => `Rejected: ${error}`);