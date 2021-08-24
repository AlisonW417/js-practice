const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const cats = [];

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM is Loaded");

    const plusButton = document.getElementById('plus');
    plusButton.addEventListener('click', plusClicked);

    const minusButton = document.getElementById('minus');
    minusButton.addEventListener('click', minusClicked);

    loadDays();

    getCats();

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

function getCats() {
    fetch("https://api.artic.edu/api/v1/artworks/search?q=cats&query[term][is_public_domain]=true"
        )
    .then(resp => resp.json())
    .then(resp => {
        console.log(resp)
        resp.data.forEach(cat => {
            new Cat(cat.title, cat.thumbnail)
            cats.push(cat)
        })
    })
    .catch(err => alert(err))
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