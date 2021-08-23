const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM is Loaded");

    const plusButton = document.getElementById('plus');
    plusButton.addEventListener('click', plusClicked);

    const minusButton = document.getElementById('minus');
    minusButton.addEventListener('click', minusClicked);

    loadDays();

    const input = document.getElementById('input');
    input.addEventListener('change', triggerFilter)

    // loadButton();
})

function plusClicked() {
    console.log("I clicked plus!")
    const counter = document.getElementById('count');
    let currentCount = parseInt(counter.innerText);
    counter.innerText = currentCount += 1;
}

function minusClicked() {
    console.log("I clicked minus!")
    const counter = document.getElementById('count');
    let currentCount = parseInt(counter.innerText);
    if (currentCount > 0) {
        counter.innerText = currentCount -= 1;
    }
}

function loadDays() {
    const filterDiv = document.getElementById('filter');
    
    days.forEach(day => {
        const dayDiv = document.createElement('div');
        dayDiv.innerText = day;
        filterDiv.append(dayDiv)
    })
}

function triggerFilter(event) {
    console.log("I triggered the filter")
}


// function loadButton() {
//     // debugger
//     const mainDiv = document.getElementById('main');
//     const button = document.createElement('button');
//     button.innerText = "Click me!";
//     mainDiv.append(button);
//     button.addEventListener('click', initiateCounter)
// }

// function initiateCounter() {
//     const mainDiv = document.getElementById('main');
//     const counter = document.createElement('p');
//     counter.innerText = "0";
//     mainDiv.append(counter);
// }