document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM is Loaded");

    const plusButton = document.getElementById('plus');
    plusButton.addEventListener('click', plusClicked);

    const minusButton = document.getElementById('minus');
    minusButton.addEventListener('click', minusClicked);

    // loadButton();
})

function plusClicked() {
    console.log("I clicked plus!")

}

function minusClicked() {
    console.log("I clicked minus!")

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