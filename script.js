

// set word from api


// grid functionality
let wordGrid = document.querySelector(`.board`)
let rowOne = document.querySelector(`.row1`)
let boxOne = document.querySelector(`.box1`)

// keyboard functionality
let keyBoard = document.querySelector(`.keyboard`);
let indKey = document.querySelectorAll(`.button`);
let indKeys = document.querySelector(`.button`)

keyBoard.addEventListener(`click`, (event) => {
    if (event.target.classList.contains(`button`)) {
        var letter = ``;
        letter = indKeys.id
        console.log(indKeys.id)
        boxOne.appendChild(boxOne.createTextNode(letter))
    }
})
console.log(indKeys.id)
// first row, insert values from keyboard
// once enter, lock row and compare inserted values to word and light up applicable letters
// move onto next row and repeat
