const p1 = new Promise((resolve, reject) => {
    const didFail = false;
    if (didFail) {
        reject("something went wrong :(");
    }
    else {
        resolve(true);
    }
})


const p2 = new Promise((resolve, reject) => {
    const didFail = false;
    if (didFail) {
        reject("something went wrong :(");
    }
    else {
        resolve(true);
    }
})

Promise.race([p1,p2]).then((result) => {
    console.log(result)
}).catch(message => {

Promise.all([p1, p2]).then((results) => {
    console.log(results)
}).catch(message => {

})
p1.then((result) => {
    if (result) {
        console.log("cool");
    }
    else {
        console.log("not good");
    }
}).catch(errorMessage => {
    console.log("error", errorMessage);
})