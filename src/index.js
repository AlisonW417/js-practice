const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM is Loaded");

    const plusButton = document.getElementById('plus');
    plusButton.addEventListener('click', plusClicked);

    const minusButton = document.getElementById('minus');
    minusButton.addEventListener('click', minusClicked);

    loadDays();

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
    const select = document.getElementById('select');
    const option = document.createElement('option');
    option.innerText = 'Select a Day';
    select.appendChild(option)
    
    days.forEach(day => {
        const dayOption = document.createElement('option');
        dayOption.innerText = day;
        select.appendChild(dayOption)
    })

    select.addEventListener('input', triggerFilter)
}

function triggerFilter(event) {
    console.log("You selected", event.target.value)
    const filterDiv = document.getElementById('filter')
    const dayDiv = document.getElementById('day')
    dayDiv.innerHTML = ""
    const dayHeader = document.createElement('h3')
    const selectedDay = event.target.value
    dayHeader.innerText = selectedDay
    dayDiv.appendChild(dayHeader)
    filterDiv.appendChild(dayDiv)
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