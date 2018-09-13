///// Problem 1 - Fun with Promises

function flip() {
    let p = new Promise(function (resolve, reject) {
        if (Math.random() > 0.5) resolve();
        else reject();
    });
    return p;
}

//// Add code here that will "flip" the coin ten times and write the 
//// result to the console (e.g. "Heads" or "Tails" for each flip).

for (let i = 0; i < 10; i++) {
    flip().then(
        () => {console.log("Heads!")}, 
        () => {console.log("Tails!")});
}


///// Problem 2 - More fun...

function countBig(bignum) {
    start = Date.now();
    let i = 0;
    while (i < bignum){
        i++;
    }
    let time_period = Date.now() - start
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve()}, time_period);
    });
    // Add code here that returns a Promise that will resolve after it has counted to bignum
}


start = Date.now();
bignum = 1000000000;
countBig(1000000000).then(()=> {
    console.log("It took " + (Date.now() - start) + " ms to count to " + bignum);
}, () => {
    console.log("A problem occurred while trying to count to " + bignum);
})