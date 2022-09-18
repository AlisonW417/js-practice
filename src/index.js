

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM is Loaded");
    console.log(addUpTo(6));


})

function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}