const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const cats = [];
const monday = "monday";
function reverseString(str) {
    // debugger
    const strAry = str.split("")
    const rev = strAry.reverse().join("")
    console.log(rev)
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM is Loaded");

    const plusButton = document.getElementById('plus');
    plusButton.addEventListener('click', plusClicked);

    const minusButton = document.getElementById('minus');
    minusButton.addEventListener('click', minusClicked);

    loadDays();

    getCats();

    reverseString(monday);
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
    renderCats();
    })
    .catch(err => alert(err))
}

function renderCats() {
    cats.forEach(cat => {
        const mainDiv = document.getElementById('main')
        const catDiv = document.createElement('div')
        const catTitle = document.createElement('h4')
        const catPic = document.createElement('img')
        catTitle.innerText = cat.title;
        catPic.setAttribute('src', cat.thumbnail.lqip)
        catPic.setAttribute('alt', cat.thumbnail.alt_text)
        // catPic.setAttribute('width', cat.thumbnail.width)
        // catPic.setAttribute('height', cat.thumbnail.height)
        catDiv.append(catTitle)
        catDiv.append(catPic)
        mainDiv.append(catDiv)
    })
}

// alt_text: "A work made of lithograph in 6 colors (red, ochre, yellow, black, gray-brown, brown) from two stones, with scraping on stone, on ivory wove paper."
// height: 2250
// lqip: "data:image/gif;base64,R0lGODlhBgAFAPQAAEI9JFFFLV5QPWVaOn1VR31rUHhpV3BnXHprWYBhRpJgUIdyU6VqW6pxXKR5WId9b458bcBvZcdwaM14btR3b9V8c9F/eI6Dc6uHeqKSfcORhtiVjdmWjt6ZkAAAAAAAACH5BAAAAAAALAAAAAAGAAUAAAUY4GUgxZI9QgAk2jE4CrNBhFVRHdZMkcSFADs="
// width: 2928
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