

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM is Loaded");
    console.log(addUpTo(6));
    console.log(addUpTo2(6));
    
    /*
    var t1 = performance.now();
    addUpTo(100000000);
    var t2 = performance.now();
    console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

    var t3 = performance.now();
    addUpTo2(100000000);
    var t4 = performance.now();
    console.log(`Time Elapsed: ${(t4 - t3) / 1000} seconds.`);
    */
})

function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

function addUpTo2(n) {
    return n * (n + 1) / 2;
}
