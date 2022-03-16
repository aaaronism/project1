// set word from api


// grid functionality
let wordGrid = document.querySelector(`.board`)
let rowOne = document.querySelector(`#row1`)
let rowTwo = document.querySelector(`#row2`)
let rowThree = document.querySelector(`#row3`)
let rowFour = document.querySelector(`#row4`)
let rowFive = document.querySelector(`#row5`)
let rowSix = document.querySelector(`#row6`)
let boxOne = document.querySelector(`#box1`)
let boxTwo = document.querySelector(`#box2`)
let boxThree = document.querySelector(`#box3`)
let boxFour = document.querySelector(`#box4`)
let boxFive = document.querySelector(`#box5`)
let boxSix = document.querySelector(`#box6`)
let boxSeven = document.querySelector(`#box7`)
let boxEight = document.querySelector(`#box8`)
let boxNine = document.querySelector(`#box9`)
let boxTen = document.querySelector(`#box10`)
let boxEleven = document.querySelector(`#box11`)
let boxTwelve = document.querySelector(`#box12`)
let boxThirteen = document.querySelector(`#box13`)
let boxFourteen = document.querySelector(`#box14`)
let boxFifteen = document.querySelector(`#box15`)
let boxSixteen = document.querySelector(`#box16`)
let boxSeventeen = document.querySelector(`#box17`)
let boxEighteen = document.querySelector(`#box18`)
let boxNineteen = document.querySelector(`#box19`)
let boxTwenty = document.querySelector(`#box20`)
let boxTwoOne = document.querySelector(`#box21`)
let boxTwoTwo = document.querySelector(`#box22`)
let boxTwoThree = document.querySelector(`#box23`)
let boxTwoFour = document.querySelector(`#box24`)
let boxTwoFive = document.querySelector(`#box25`)
let boxTwoSix = document.querySelector(`#box26`)
let boxTwoSeven = document.querySelector(`#box27`)
let boxTwoEight = document.querySelector(`#box28`)
let boxTwoNine = document.querySelector(`#box29`)
let boxThirty = document.querySelector(`#box30`)


let wholeBoard = {
    firstRow: [boxOne, boxTwo, boxThree, boxFour, boxFive],
    secondRow: [boxSix, boxSeven, boxEight, boxNine, boxTen],
    thirdRow: [boxEleven, boxTwelve, boxThirteen, boxFourteen, boxFifteen],
    fourthRow: [boxSixteen, boxSeventeen, boxEighteen, boxNineteen, boxTwenty],
    fifthRow: [boxTwoOne, boxTwoTwo, boxTwoThree, boxTwoFour, boxTwoFive],
    sixthRow: [boxTwoSix, boxTwoSeven, boxTwoEight, boxTwoNine, boxThirty]
}

const firstArr = []
const secondArr = []
const thirdArr = []
const fourthArr = []
const fifthArr = []
const sixthArr = []
const testArr = [`P`, `E`, `A`, `R`, `S`]

let currentBox = boxOne;
let currentRow = wholeBoard.firstRow;
let word = [`P`, `O`, `O`, `P`, `S`];

let submit = false;

function equalArr(a, b) {
    return Array.isArray(a) && Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}

// function coloring(a, b) {
//     return Array.isArray(a) && Array.isArray(b) &&
//     a.every((val, index) => {val === b[index] 
//     }
//     )}
// coloring(word, testArr)
// let intersection = arr.filter(element => !word.includes(element)).filter((element, index, self) => self.indexOf(element) === index);


// compare second array to master word array, first if any words are in the right spot, highlight green, else if any letters are in the array highlight yellow, else grey
// check at the end of the row if array is a legitimate word


function moveNext() {
    for(let j = 0; j < 5; j++) {
        if(currentRow === wholeBoard.firstRow) {
            if(currentBox.hasChildNodes()) {
                if(currentBox === wholeBoard.firstRow[4]) {
                    if(submit === true) {
                    if(equalArr(word, firstArr)) {
                            greenBoard()
                            greenLight()
                    } else {
                        rowOneCheck()
                        // matchGreen(firstArr)
                        yellowLight(firstArr)
                        greyLight(firstArr)    
                        currentRow = wholeBoard.secondRow
                        submit = false
                    }
                }
                }
                currentBox = wholeBoard.firstRow[j]; 
            }
        }
    for(let j = 0; j < 5; j++) {
        if(currentRow === wholeBoard.secondRow) {
            if(currentBox.hasChildNodes()) {
                if(currentBox === wholeBoard.secondRow[4]) {
                    if(submit === true) {
                    if(equalArr(word, secondArr)) {
                            boxSix.style.backgroundColor = `green`;
                            boxSeven.style.backgroundColor = `green`;
                            boxEight.style.backgroundColor = `green`;
                            boxNine.style.backgroundColor = `green`;
                            boxTen.style.backgroundColor = `green`;
                            greenLight()
                    } else {
                        rowTwoCheck()
                        // matchGreen(secondArr)
                        greyLight(secondArr)  
                        currentRow = wholeBoard.thirdRow
                        submit = false
                    }
                }
                }
                currentBox = wholeBoard.secondRow[j];
            }
        } 
    for(let j = 0; j < 5; j++) {
        if(currentRow === wholeBoard.thirdRow) {
            if(currentBox.hasChildNodes()) {
                if(currentBox === wholeBoard.thirdRow[4]) {
                    if(submit === true) {
                    if(equalArr(word, thirdArr)) {
                            boxEleven.style.backgroundColor = `green`;
                            boxTwelve.style.backgroundColor = `green`;
                            boxThirteen.style.backgroundColor = `green`;
                            boxFourteen.style.backgroundColor = `green`;
                            boxFifteen.style.backgroundColor = `green`;
                            greenLight()
                    } else {
                        rowThreeCheck()
                        // yellowLight(thirdArr)
                        greyLight(thirdArr)    
                        currentRow = wholeBoard.fourthRow
                        submit = false
                    }
                }
                }
                currentBox = wholeBoard.thirdRow[j];
            }
        }
    for(let j = 0; j < 5; j++) {
        if(currentRow === wholeBoard.fourthRow) {
            if(currentBox.hasChildNodes()) {
                if(currentBox === wholeBoard.fourthRow[4]) {
                    if(submit === true) {
                    if(equalArr(word, fourthArr)) {
                            boxSixteen.style.backgroundColor = `green`;
                            boxSeventeen.style.backgroundColor = `green`;
                            boxEighteen.style.backgroundColor = `green`;
                            boxNineteen.style.backgroundColor = `green`;
                            boxTwenty.style.backgroundColor = `green`;
                            greenLight()
                    } else {
                        rowFourCheck()
                        // yellowLight(fourthArr)
                        greyLight(fourthArr)    
                        currentRow = wholeBoard.fifthRow
                        submit = false
                    }
                }
                }
                currentBox = wholeBoard.fourthRow[j];
            }
        }
    for(let j = 0; j < 5; j++) {
        if(currentRow === wholeBoard.fifthRow) {
            if(currentBox.hasChildNodes()) {
                if(currentBox === wholeBoard.fifthRow[4]) {
                    if(submit === true) {
                    if(equalArr(word, fifthArr)) {
                            boxTwoOne.style.backgroundColor = `green`;
                            boxTwoTwo.style.backgroundColor = `green`;
                            boxTwoThree.style.backgroundColor = `green`;
                            boxTwoFour.style.backgroundColor = `green`;
                            boxTwoFive.style.backgroundColor = `green`;
                            greenLight()
                    } else {
                        rowFiveCheck()
                        // yellowLight(fifthArr)
                        greyLight(fifthArr)    
                        currentRow = wholeBoard.sixthRow
                        submit = false
                    }
                }
                }
                currentBox = wholeBoard.fifthRow[j];
            }
        }
    for(let j = 0; j < 5; j++) {
        if(currentRow === wholeBoard.sixthRow) {
            if(currentBox.hasChildNodes()) {
                if(currentBox === wholeBoard.sixthRow[4]) {
                    if(submit === true) {
                    if(equalArr(word, sixthArr)) {
                            boxTwoSix.style.backgroundColor = `green`;
                            boxTwoSeven.style.backgroundColor = `green`;
                            boxTwoEight.style.backgroundColor = `green`;
                            boxTwoNine.style.backgroundColor = `green`;
                            boxThirty.style.backgroundColor = `green`;
                            greenLight()
                    } else {
                        rowSixCheck()
                        // yellowLight(sixthArr)
                        greyLight(sixthArr)    
                        alert(`you lose`)
                    }
                }
                }
                currentBox = wholeBoard.sixthRow[j];
            }
        }
    }
}
    }
}
    }
}
}



// keyboard functionality
let keyBoard = document.querySelector(`.keyboard`);
let indKeys = document.querySelectorAll(`.button`)
let aKey = document.querySelector(`#A`)
let bKey = document.querySelector(`#B`)
let cKey = document.querySelector(`#C`)
let dKey = document.querySelector(`#D`)
let eKey = document.querySelector(`#E`)
let fKey = document.querySelector(`#F`)
let gKey = document.querySelector(`#G`)
let hKey = document.querySelector(`#H`)
let iKey = document.querySelector(`#I`)
let jKey = document.querySelector(`#J`)
let kKey = document.querySelector(`#K`)
let lKey = document.querySelector(`#L`)
let mKey = document.querySelector(`#M`)
let nKey = document.querySelector(`#N`)
let oKey = document.querySelector(`#O`)
let pKey = document.querySelector(`#P`)
let qKey = document.querySelector(`#Q`)
let rKey = document.querySelector(`#R`)
let sKey = document.querySelector(`#S`)
let tKey = document.querySelector(`#T`)
let uKey = document.querySelector(`#U`)
let vKey = document.querySelector(`#V`)
let wKey = document.querySelector(`#W`)
let xKey = document.querySelector(`#X`)
let yKey = document.querySelector(`#Y`)
let zKey = document.querySelector(`#Z`)
let deleteBut = document.querySelector(`.delete`)
let enterBut = document.querySelector(`.enter`)

// function keyColor(key) {
//     if(a is in the array) {
//         if(a is in the correct spot) {
//             light up a key green
//         } else if(a is not in the correct spot) {
//             light up a key yellow
//         }
//     } else if(b is in the array) {
//         if(b is in the correct spot) {
//             light up b key green
//         } else if(b is not in teh correct spot) {
//             light up b key yellow
//         }
//     }
// }

// let intersection = word.filter(element => !firstArr.includes(element))
// console.log(intersection)
// function keyColor() {
// let intersection = word.filter(element => firstArr.includes(element)).filter((element, index, self) => self.indexOf(element) === index);
// console.log(intersection)
// }


function greyLight(arr) {
    let intersection = arr.filter(element => !word.includes(element)).filter((element, index, self) => self.indexOf(element) === index);
    for(let x = 0; x < 5; x++) {
        if(aKey.id === intersection[x]) {
            aKey.style.backgroundColor = `rgb(80, 80, 80)`
        } else if(bKey.id === intersection[x]) {
            bKey.style.backgroundColor = `rgb(80, 80, 80)`
        } else if(cKey.id === intersection[x]) {
            cKey.style.backgroundColor = `rgb(80, 80, 80)`
        } else if(dKey.id === intersection[x]) {
            dKey.style.backgroundColor = `rgb(80, 80, 80)`
        } else if(eKey.id === intersection[x]) {
            eKey.style.backgroundColor = `rgb(80, 80, 80)`
        } else if(fKey.id === intersection[x]) {
            fKey.style.backgroundColor = `rgb(80, 80, 80)`
        } else if(gKey.id === intersection[x]) {
            gKey.style.backgroundColor = `rgb(80, 80, 80)`
        } else if(hKey.id === intersection[x]) {
            hKey.style.backgroundColor = `rgb(80, 80, 80)`
        } else if(iKey.id === intersection[x]) {
            iKey.style.backgroundColor = `rgb(80, 80, 80)`
        } else if(jKey.id === intersection[x]) {
            jKey.style.backgroundColor = `rgb(80, 80, 80)`
        } else if(kKey.id === intersection[x]) {
            kKey.style.backgroundColor = `rgb(80, 80, 80)`
        } else if(lKey.id === intersection[x]) {
            lKey.style.backgroundColor = `rgb(80, 80, 80)`
        } else if(mKey.id === intersection[x]) {
            mKey.style.backgroundColor = `rgb(80, 80, 80)`
        } else if(nKey.id === intersection[x]) {
            nKey.style.backgroundColor = `rgb(80, 80, 80)`
        } else if(oKey.id === intersection[x]) {
            oKey.style.backgroundColor = `rgb(80, 80, 80)`
        } else if(pKey.id === intersection[x]) {
            pKey.style.backgroundColor = `rgb(80, 80, 80)`
        } else if(qKey.id === intersection[x]) {
            qKey.style.backgroundColor = `rgb(80, 80, 80)`
        } else if(rKey.id === intersection[x]) {
            rKey.style.backgroundColor = `rgb(80, 80, 80)`
        } else if(sKey.id === intersection[x]) {
            sKey.style.backgroundColor = `rgb(80, 80, 80)`
        } else if(tKey.id === intersection[x]) {
            tKey.style.backgroundColor = `rgb(80, 80, 80)`
        } else if(uKey.id === intersection[x]) {
            uKey.style.backgroundColor = `rgb(80, 80, 80)`
        } else if(vKey.id === intersection[x]) {
            vKey.style.backgroundColor = `rgb(80, 80, 80)`
        } else if(wKey.id === intersection[x]) {
            wKey.style.backgroundColor = `rgb(80, 80, 80)`
        } else if(xKey.id === intersection[x]) {
            xKey.style.backgroundColor = `rgb(80, 80, 80)`
        } else if(yKey.id === intersection[x]) {
            yKey.style.backgroundColor = `rgb(80, 80, 80)`
        } else if(zKey.id === intersection[x]) {
            zKey.style.backgroundColor = `rgb(80, 80, 80)`
        }
    }
}

function yellowLight(arr) {
    let intersection = word.filter(element => arr.includes(element)).filter((element, index, self) => self.indexOf(element) === index);
    for(let x = 0; x < 5; x++) {
        if(aKey.id === intersection[x]) {
            aKey.style.backgroundColor = `rgb(227, 201, 26)`
        } else if(bKey.id === intersection[x]) {
            bKey.style.backgroundColor = `rgb(227, 201, 26)`
        } else if(cKey.id === intersection[x]) {
            cKey.style.backgroundColor = `rgb(227, 201, 26)`
        } else if(dKey.id === intersection[x]) {
            dKey.style.backgroundColor = `rgb(227, 201, 26)`
        } else if(eKey.id === intersection[x]) {
            eKey.style.backgroundColor = `rgb(227, 201, 26)`
        } else if(fKey.id === intersection[x]) {
            fKey.style.backgroundColor = `rgb(227, 201, 26)`
        } else if(gKey.id === intersection[x]) {
            gKey.style.backgroundColor = `rgb(227, 201, 26)`
        } else if(hKey.id === intersection[x]) {
            hKey.style.backgroundColor = `rgb(227, 201, 26)`
        } else if(iKey.id === intersection[x]) {
            iKey.style.backgroundColor = `rgb(227, 201, 26)`
        } else if(jKey.id === intersection[x]) {
            jKey.style.backgroundColor = `rgb(227, 201, 26)`
        } else if(kKey.id === intersection[x]) {
            kKey.style.backgroundColor = `rgb(227, 201, 26)`
        } else if(lKey.id === intersection[x]) {
            lKey.style.backgroundColor = `rgb(227, 201, 26)`
        } else if(mKey.id === intersection[x]) {
            mKey.style.backgroundColor = `rgb(227, 201, 26)`
        } else if(nKey.id === intersection[x]) {
            nKey.style.backgroundColor = `rgb(227, 201, 26)`
        } else if(oKey.id === intersection[x]) {
            oKey.style.backgroundColor = `rgb(227, 201, 26)`
        } else if(pKey.id === intersection[x]) {
            pKey.style.backgroundColor = `rgb(227, 201, 26)`
        } else if(qKey.id === intersection[x]) {
            qKey.style.backgroundColor = `rgb(227, 201, 26)`
        } else if(rKey.id === intersection[x]) {
            rKey.style.backgroundColor = `rgb(227, 201, 26)`
        } else if(sKey.id === intersection[x]) {
            sKey.style.backgroundColor = `rgb(227, 201, 26)`
        } else if(tKey.id === intersection[x]) {
            tKey.style.backgroundColor = `rgb(227, 201, 26)`
        } else if(uKey.id === intersection[x]) {
            uKey.style.backgroundColor = `rgb(227, 201, 26)`
        } else if(vKey.id === intersection[x]) {
            vKey.style.backgroundColor = `rgb(227, 201, 26)`
        } else if(wKey.id === intersection[x]) {
            wKey.style.backgroundColor = `rgb(227, 201, 26)`
        } else if(xKey.id === intersection[x]) {
            xKey.style.backgroundColor = `rgb(227, 201, 26)`
        } else if(yKey.id === intersection[x]) {
            yKey.style.backgroundColor = `rgb(227, 201, 26)`
        } else if(zKey.id === intersection[x]) {
            zKey.style.backgroundColor = `rgb(227, 201, 26)`
        }
    }
}

function matchGreen(arr) {
let intersection = word.filter(element => arr.includes(element)).filter((element, index, self) => self.indexOf(element) === index)
    for(let y = 0; y < 5; y++) {
        if(arr[y] === word[y]) {
            if(arr = firstArr) {
                checkBoxy(boxOne)
                checkBoxy(boxTwo)
                checkBoxy(boxThree)
                checkBoxy(boxFour)
                checkBoxy(boxFive)
            }
        } else if (word.includes(arr[y])) {
            yellowLight(arr)
        } else {
            greyLight(arr)
        }  
        console.log(arr[y].indexOf() === word[y].indexOf())
    }
}

function checkBoxy(box) {
    for(let f = 0; f < 5; f++) {
        if(box.textContent === word[f]) {
            box.style.backgroundColor = `green`
            greenLight(firstArr)
        }
    }
}

// function greenLit(key) {
//     for(let l = 0; l < 5; l++) {
//         if()
//     }
// }

function greenBoard() {
    boxOne.style.backgroundColor = `green`;
    boxTwo.style.backgroundColor = `green`;
    boxThree.style.backgroundColor = `green`;
    boxFour.style.backgroundColor = `green`;
    boxFive.style.backgroundColor = `green`;
    }

function greenLight(arr) {
for(let z = 0; z < 5; z++) {
    if(aKey.id === arr[z] && word[z]) {
        aKey.style.backgroundColor = `green`
    } else if(bKey.id === arr[z] && word[z]) {
        bKey.style.backgroundColor = `green`
    } else if(cKey.id === arr[z] && word[z]) {
        cKey.style.backgroundColor = `green`
    } else if(dKey.id === arr[z] && word[z]) {
        dKey.style.backgroundColor = `green`
    } else if(eKey.id === arr[z] && word[z]) {
        eKey.style.backgroundColor = `green`
    } else if(fKey.id === arr[z] && word[z]) {
        fKey.style.backgroundColor = `green`
    } else if(gKey.id === arr[z] && word[z]) {
        gKey.style.backgroundColor = `green`
    } else if(hKey.id === arr[z] && word[z]) {
        hKey.style.backgroundColor = `green`
    } else if(iKey.id === arr[z] && word[z]) {
        iKey.style.backgroundColor = `green`
    } else if(jKey.id === arr[z] && word[z]) {
        jKey.style.backgroundColor = `green`
    } else if(kKey.id === arr[z] && word[z]) {
        kKey.style.backgroundColor = `green`
    } else if(lKey.id === arr[z] && word[z]) {
        lKey.style.backgroundColor = `green`
    } else if(mKey.id === arr[z] && word[z]) {
        mKey.style.backgroundColor = `green`
    } else if(nKey.id === arr[z] && word[z]) {
        nKey.style.backgroundColor = `green`
    } else if(oKey.id === arr[z] && word[z]) {
        oKey.style.backgroundColor = `green`
    } else if(pKey.id === arr[z] && word[z]) {
        pKey.style.backgroundColor = `green`
    } else if(qKey.id === arr[z] && word[z]) {
        qKey.style.backgroundColor = `green`
    } else if(rKey.id === arr[z] && word[z]) {
        rKey.style.backgroundColor = `green`
    } else if(sKey.id === arr[z] && word[z]) {
        sKey.style.backgroundColor = `green`
    } else if(tKey.id === arr[z] && word[z]) {
        tKey.style.backgroundColor = `green`
    } else if(uKey.id === arr[z] && word[z]) {
        uKey.style.backgroundColor = `green`
    } else if(vKey.id === arr[z] && word[z]) {
        vKey.style.backgroundColor = `green`
    } else if(wKey.id === arr[z] && word[z]) {
        wKey.style.backgroundColor = `green`
    } else if(xKey.id === arr[z] && word[z]) {
        xKey.style.backgroundColor = `green`
    } else if(yKey.id === arr[z] && word[z]) {
        yKey.style.backgroundColor = `green`
    } else if(zKey.id === arr[z] && word[z]) {
        zKey.style.backgroundColor = `green`
    }
}
}


deleteBut.addEventListener(`click`, event => { 
    moveBack()
})

function moveBack() {
    if(currentBox.hasChildNodes()) {
        if(currentBox === wholeBoard.firstRow[4]) {
            currentBox.removeChild(currentBox.firstChild)
            firstArr.pop()
        } else if(currentBox === wholeBoard.firstRow[3]) {
            currentBox.removeChild(currentBox.firstChild)
            firstArr.pop()
        } else if(currentBox === wholeBoard.firstRow[2]) {
            currentBox.removeChild(currentBox.firstChild)
            firstArr.pop()
        } else if(currentBox === wholeBoard.firstRow[1]) {
            currentBox.removeChild(currentBox.firstChild)
            firstArr.pop()
        } else if(currentBox === wholeBoard.secondRow[4]) {
            currentBox.removeChild(currentBox.firstChild)
            sixthArr.pop()
        } else if(currentBox === wholeBoard.secondRow[3]) {
            currentBox.removeChild(currentBox.firstChild)
            sixthArr.pop()
        } else if(currentBox === wholeBoard.secondRow[2]) {
            currentBox.removeChild(currentBox.firstChild)
            sixthArr.pop()
        } else if(currentBox === wholeBoard.secondRow[1]) {
            currentBox.removeChild(currentBox.firstChild)
            sixthArr.pop()
        } else if(currentBox === wholeBoard.thirdRow[4]) {
            currentBox.removeChild(currentBox.firstChild)
            thirdArr.pop()
        } else if(currentBox === wholeBoard.thirdRow[3]) {
            currentBox.removeChild(currentBox.firstChild)
            thirdArr.pop()
        } else if(currentBox === wholeBoard.thirdRow[2]) {
            currentBox.removeChild(currentBox.firstChild)
            thirdArr.pop()
        } else if(currentBox === wholeBoard.thirdRow[1]) {
            currentBox.removeChild(currentBox.firstChild)
            thirdArr.pop()
        } else if(currentBox === wholeBoard.fourthRow[4]) {
            currentBox.removeChild(currentBox.firstChild)
            fourthArr.pop()
        } else if(currentBox === wholeBoard.fourthRow[3]) {
            currentBox.removeChild(currentBox.firstChild)
            fourthArr.pop()
        } else if(currentBox === wholeBoard.fourthRow[2]) {
            currentBox.removeChild(currentBox.firstChild)
            fourthArr.pop()
        } else if(currentBox === wholeBoard.fourthRow[1]) {
            currentBox.removeChild(currentBox.firstChild)
            fourthArr.pop()
        } else if(currentBox === wholeBoard.fifthRow[4]) {
            currentBox.removeChild(currentBox.firstChild)
            fifthArr.pop()
        } else if(currentBox === wholeBoard.fifthRow[3]) {
            currentBox.removeChild(currentBox.firstChild)
            fifthArr.pop()
        } else if(currentBox === wholeBoard.fifthRow[2]) {
            currentBox.removeChild(currentBox.firstChild)
            fifthArr.pop()
        } else if(currentBox === wholeBoard.fifthRow[1]) {
            currentBox.removeChild(currentBox.firstChild)
            fifthArr.pop()
        } else if(currentBox === wholeBoard.sixthRow[4]) {
            currentBox.removeChild(currentBox.firstChild)
            sixthArr.pop()
        } else if(currentBox === wholeBoard.sixthRow[3]) {
            currentBox.removeChild(currentBox.firstChild)
            sixthArr.pop()
        } else if(currentBox === wholeBoard.sixthRow[2]) {
            currentBox.removeChild(currentBox.firstChild)
            sixthArr.pop()
        } else if(currentBox === wholeBoard.sixthRow[1]) {
            currentBox.removeChild(currentBox.firstChild)
            sixthArr.pop()
        } 
    } else {
        if(currentBox === wholeBoard.firstRow[4]) {
            currentBox = wholeBoard.firstRow[4-1]
            currentBox.removeChild(currentBox.firstChild)
            firstArr.pop()
        } else if(currentBox === wholeBoard.firstRow[3]) {
            currentBox = wholeBoard.firstRow[3-1]
            currentBox.removeChild(currentBox.firstChild)
            firstArr.pop()
        } else if(currentBox === wholeBoard.firstRow[2]) {
            currentBox = wholeBoard.firstRow[2-1]
            currentBox.removeChild(currentBox.firstChild)
            firstArr.pop()
        } else if(currentBox === wholeBoard.firstRow[1]) {
            currentBox = wholeBoard.firstRow[1-1]
            currentBox.removeChild(currentBox.firstChild)
            firstArr.pop()
        } else if(currentBox === wholeBoard.secondRow[4]) {
            currentBox = wholeBoard.secondRow[4-1]
            currentBox.removeChild(currentBox.firstChild)
            sixthArr.pop()
        } else if(currentBox === wholeBoard.secondRow[3]) {
            currentBox = wholeBoard.secondRow[3-1]
            currentBox.removeChild(currentBox.firstChild)
            sixthArr.pop()
        } else if(currentBox === wholeBoard.secondRow[2]) {
            currentBox = wholeBoard.secondRow[2-1]
            currentBox.removeChild(currentBox.firstChild)
            sixthArr.pop()
        } else if(currentBox === wholeBoard.secondRow[1]) {
            currentBox = wholeBoard.secondRow[1-1]
            currentBox.removeChild(currentBox.firstChild)
            sixthArr.pop()
        } else if(currentBox === wholeBoard.thirdRow[4]) {
            currentBox = wholeBoard.thirdRow[4-1]
            currentBox.removeChild(currentBox.firstChild)
            thirdArr.pop()
        } else if(currentBox === wholeBoard.thirdRow[3]) {
            currentBox = wholeBoard.thirdRow[3-1]
            currentBox.removeChild(currentBox.firstChild)
            thirdArr.pop()
        } else if(currentBox === wholeBoard.thirdRow[2]) {
            currentBox = wholeBoard.thirdRow[2-1]
            currentBox.removeChild(currentBox.firstChild)
            thirdArr.pop()
        } else if(currentBox === wholeBoard.thirdRow[1]) {
            currentBox = wholeBoard.thirdRow[1-1]
            currentBox.removeChild(currentBox.firstChild)
            thirdArr.pop()
        } else if(currentBox === wholeBoard.fourthRow[4]) {
            currentBox = wholeBoard.fourthRow[4-1]
            currentBox.removeChild(currentBox.firstChild)
            fourthArr.pop()
        } else if(currentBox === wholeBoard.fourthRow[3]) {
            currentBox = wholeBoard.fourthRow[3-1]
            currentBox.removeChild(currentBox.firstChild)
            fourthArr.pop()
        } else if(currentBox === wholeBoard.fourthRow[2]) {
            currentBox = wholeBoard.fourthRow[2-1]
            currentBox.removeChild(currentBox.firstChild)
            fourthArr.pop()
        } else if(currentBox === wholeBoard.fourthRow[1]) {
            currentBox = wholeBoard.fourthRow[1-1]
            currentBox.removeChild(currentBox.firstChild)
            fourthArr.pop()
        } else if(currentBox === wholeBoard.fifthRow[4]) {
            currentBox = wholeBoard.fifthRow[4-1]
            currentBox.removeChild(currentBox.firstChild)
            fifthArr.pop()
        } else if(currentBox === wholeBoard.fifthRow[3]) {
            currentBox = wholeBoard.fifthRow[3-1]
            currentBox.removeChild(currentBox.firstChild)
            fifthArr.pop()
        } else if(currentBox === wholeBoard.fifthRow[2]) {
            currentBox = wholeBoard.fifthRow[2-1]
            currentBox.removeChild(currentBox.firstChild)
            fifthArr.pop()
        } else if(currentBox === wholeBoard.fifthRow[1]) {
            currentBox = wholeBoard.sixthRow[1-1]
            currentBox.removeChild(currentBox.firstChild)
            fifthArr.pop()
        } else if(currentBox === wholeBoard.sixthRow[4]) {
            currentBox = wholeBoard.sixthRow[4-1]
            currentBox.removeChild(currentBox.firstChild)
            sixthArr.pop()
        } else if(currentBox === wholeBoard.sixthRow[3]) {
            currentBox = wholeBoard.sixthRow[3-1]
            currentBox.removeChild(currentBox.firstChild)
            sixthArr.pop()
        } else if(currentBox === wholeBoard.sixthRow[2]) {
            currentBox = wholeBoard.sixthRow[2-1]
            currentBox.removeChild(currentBox.firstChild)
            sixthArr.pop()
        } else if(currentBox === wholeBoard.sixthRow[1]) {
            currentBox = wholeBoard.sixthRow[1-1]
            currentBox.removeChild(currentBox.firstChild)
            sixthArr.pop()
        } 
    }
}


enterBut.addEventListener(`click`, event => {
    enterFunc(wholeBoard.firstRow)
    enterFunc(wholeBoard.secondRow)
    enterFunc(wholeBoard.thirdRow)
    enterFunc(wholeBoard.fourthRow)
    enterFunc(wholeBoard.fifthRow)
    enterFunc(wholeBoard.sixthRow)
    moveNext()
})

function enterFunc(row) {
    if(currentBox === row[4]) {
    submit = true
    }
}

function letA(box) {
    if (!box.hasChildNodes()) {
        box.insertAdjacentHTML(`beforeend`, aKey.id)
        if (box.parentNode == rowOne) {
            firstArr.push(aKey.id)
        } else if(box.parentNode == rowTwo) {
            secondArr.push(aKey.id)
        } else if(box.parentNode == rowThree) {
            thirdArr.push(aKey.id)
        } else if(box.parentNode == rowFour) {
            fourthArr.push(aKey.id)
        } else if(box.parentNode == rowFive) {
            fifthArr.push(aKey.id)
        } else if(box.parentNode == rowSix) {
            sixthArr.push(aKey.id)
        }
        moveNext()
    }
}

aKey.addEventListener(`click`, event => {
    letA(currentBox)
})

function letB(box) {
    if (!box.hasChildNodes()) {
        box.insertAdjacentHTML(`beforeend`, bKey.id)
        if (box.parentNode == rowOne) {
            firstArr.push(bKey.id)
        } else if(box.parentNode == rowTwo) {
            secondArr.push(bKey.id)
        } else if(box.parentNode == rowThree) {
            thirdArr.push(bKey.id)
        } else if(box.parentNode == rowFour) {
            fourthArr.push(bKey.id)
        } else if(box.parentNode == rowFive) {
            fifthArr.push(bKey.id)
        } else if(box.parentNode == rowSix) {
            sixthArr.push(bKey.id)
        }
        moveNext()
    }
}

bKey.addEventListener(`click`, event => {
    letB(currentBox)
})

function letC(box) {
    if (!box.hasChildNodes()) {
        box.insertAdjacentHTML(`beforeend`, cKey.id)
        if (box.parentNode == rowOne) {
            firstArr.push(cKey.id)
        } else if(box.parentNode == rowTwo) {
            secondArr.push(cKey.id)
        } else if(box.parentNode == rowThree) {
            thirdArr.push(cKey.id)
        } else if(box.parentNode == rowFour) {
            fourthArr.push(cKey.id)
        } else if(box.parentNode == rowFive) {
            fifthArr.push(cKey.id)
        } else if(box.parentNode == rowSix) {
            sixthArr.push(cKey.id)
        }
        moveNext()
    }
}

cKey.addEventListener(`click`, event => {
    letC(currentBox)
})

function letD(box) {
    if (!box.hasChildNodes()) {
        box.insertAdjacentHTML(`beforeend`, dKey.id)
        if (box.parentNode == rowOne) {
            firstArr.push(dKey.id)
        } else if(box.parentNode == rowTwo) {
            secondArr.push(dKey.id)
        } else if(box.parentNode == rowThree) {
            thirdArr.push(dKey.id)
        } else if(box.parentNode == rowFour) {
            fourthArr.push(dKey.id)
        } else if(box.parentNode == rowFive) {
            fifthArr.push(dKey.id)
        } else if(box.parentNode == rowSix) {
            sixthArr.push(dKey.id)
        }
        moveNext()
    }
}

dKey.addEventListener(`click`, event => {
    letD(currentBox)
})

function letE(box) {
    if (!box.hasChildNodes()) {
        box.insertAdjacentHTML(`beforeend`, eKey.id)
        if (box.parentNode == rowOne) {
            firstArr.push(eKey.id)
        } else if(box.parentNode == rowTwo) {
            secondArr.push(eKey.id)
        } else if(box.parentNode == rowThree) {
            thirdArr.push(eKey.id)
        } else if(box.parentNode == rowFour) {
            fourthArr.push(eKey.id)
        } else if(box.parentNode == rowFive) {
            fifthArr.push(eKey.id)
        } else if(box.parentNode == rowSix) {
            sixthArr.push(eKey.id)
        }
        moveNext()
    }
}

eKey.addEventListener(`click`, event => {
    letE(currentBox)
})

function letF(box) {
    if (!box.hasChildNodes()) {
        box.insertAdjacentHTML(`beforeend`, fKey.id)
        if (box.parentNode == rowOne) {
            firstArr.push(fKey.id)
        } else if(box.parentNode == rowTwo) {
            secondArr.push(fKey.id)
        } else if(box.parentNode == rowThree) {
            thirdArr.push(fKey.id)
        } else if(box.parentNode == rowFour) {
            fourthArr.push(fKey.id)
        } else if(box.parentNode == rowFive) {
            fifthArr.push(fKey.id)
        } else if(box.parentNode == rowSix) {
            sixthArr.push(fKey.id)
        }
        moveNext()
    }
}

fKey.addEventListener(`click`, event => {
    letF(currentBox)
})

function letG(box) {
    if (!box.hasChildNodes()) {
        box.insertAdjacentHTML(`beforeend`, gKey.id)
        if (box.parentNode == rowOne) {
            firstArr.push(gKey.id)
        } else if(box.parentNode == rowTwo) {
            secondArr.push(gKey.id)
        } else if(box.parentNode == rowThree) {
            thirdArr.push(gKey.id)
        } else if(box.parentNode == rowFour) {
            fourthArr.push(gKey.id)
        } else if(box.parentNode == rowFive) {
            fifthArr.push(gKey.id)
        } else if(box.parentNode == rowSix) {
            sixthArr.push(gKey.id)
        }
        moveNext()
    }
}

gKey.addEventListener(`click`, event => {
    letG(currentBox)
})

function letH(box) {
    if (!box.hasChildNodes()) {
        box.insertAdjacentHTML(`beforeend`, hKey.id)
        if (box.parentNode == rowOne) {
            firstArr.push(hKey.id)
        } else if(box.parentNode == rowTwo) {
            secondArr.push(hKey.id)
        } else if(box.parentNode == rowThree) {
            thirdArr.push(hKey.id)
        } else if(box.parentNode == rowFour) {
            fourthArr.push(hKey.id)
        } else if(box.parentNode == rowFive) {
            fifthArr.push(hKey.id)
        } else if(box.parentNode == rowSix) {
            sixthArr.push(hKey.id)
        }
        moveNext()
    }
}

hKey.addEventListener(`click`, event => {
    letH(currentBox)
})

function letI(box) {
    if (!box.hasChildNodes()) {
        box.insertAdjacentHTML(`beforeend`, iKey.id)
        if (box.parentNode == rowOne) {
            firstArr.push(iKey.id)
        } else if(box.parentNode == rowTwo) {
            secondArr.push(iKey.id)
        } else if(box.parentNode == rowThree) {
            thirdArr.push(iKey.id)
        } else if(box.parentNode == rowFour) {
            fourthArr.push(iKey.id)
        } else if(box.parentNode == rowFive) {
            fifthArr.push(iKey.id)
        } else if(box.parentNode == rowSix) {
            sixthArr.push(iKey.id)
        }
        moveNext()
    }
}

iKey.addEventListener(`click`, event => {
    letI(currentBox)
})

function letJ(box) {
    if (!box.hasChildNodes()) {
        box.insertAdjacentHTML(`beforeend`, jKey.id)
        if (box.parentNode == rowOne) {
            firstArr.push(jKey.id)
        } else if(box.parentNode == rowTwo) {
            secondArr.push(jKey.id)
        } else if(box.parentNode == rowThree) {
            thirdArr.push(jKey.id)
        } else if(box.parentNode == rowFour) {
            fourthArr.push(jKey.id)
        } else if(box.parentNode == rowFive) {
            fifthArr.push(jKey.id)
        } else if(box.parentNode == rowSix) {
            sixthArr.push(jKey.id)
        }
        moveNext()
    }
}

jKey.addEventListener(`click`, event => {
    letJ(currentBox)
})

function letK(box) {
    if (!box.hasChildNodes()) {
        box.insertAdjacentHTML(`beforeend`, kKey.id)
        if (box.parentNode == rowOne) {
            firstArr.push(kKey.id)
        } else if(box.parentNode == rowTwo) {
            secondArr.push(kKey.id)
        } else if(box.parentNode == rowThree) {
            thirdArr.push(kKey.id)
        } else if(box.parentNode == rowFour) {
            fourthArr.push(kKey.id)
        } else if(box.parentNode == rowFive) {
            fifthArr.push(kKey.id)
        } else if(box.parentNode == rowSix) {
            sixthArr.push(kKey.id)
        }
        moveNext()
    }
}

kKey.addEventListener(`click`, event => {
    letK(currentBox)
})

function letL(box) {
    if (!box.hasChildNodes()) {
        box.insertAdjacentHTML(`beforeend`, lKey.id)
        if (box.parentNode == rowOne) {
            firstArr.push(lKey.id)
        } else if(box.parentNode == rowTwo) {
            secondArr.push(lKey.id)
        } else if(box.parentNode == rowThree) {
            thirdArr.push(lKey.id)
        } else if(box.parentNode == rowFour) {
            fourthArr.push(lKey.id)
        } else if(box.parentNode == rowFive) {
            fifthArr.push(lKey.id)
        } else if(box.parentNode == rowSix) {
            sixthArr.push(lKey.id)
        }
        moveNext()
    }
}

lKey.addEventListener(`click`, event => {
    letL(currentBox)
})

function letM(box) {
    if (!box.hasChildNodes()) {
        box.insertAdjacentHTML(`beforeend`, mKey.id)
        if (box.parentNode == rowOne) {
            firstArr.push(mKey.id)
        } else if(box.parentNode == rowTwo) {
            secondArr.push(mKey.id)
        } else if(box.parentNode == rowThree) {
            thirdArr.push(mKey.id)
        } else if(box.parentNode == rowFour) {
            fourthArr.push(mKey.id)
        } else if(box.parentNode == rowFive) {
            fifthArr.push(mKey.id)
        } else if(box.parentNode == rowSix) {
            sixthArr.push(mKey.id)
        }
        moveNext()
    }
}

mKey.addEventListener(`click`, event => {
    letM(currentBox)
})

function letN(box) {
    if (!box.hasChildNodes()) {
        box.insertAdjacentHTML(`beforeend`, nKey.id)
        if (box.parentNode == rowOne) {
            firstArr.push(nKey.id)
        } else if(box.parentNode == rowTwo) {
            secondArr.push(nKey.id)
        } else if(box.parentNode == rowThree) {
            thirdArr.push(nKey.id)
        } else if(box.parentNode == rowFour) {
            fourthArr.push(nKey.id)
        } else if(box.parentNode == rowFive) {
            fifthArr.push(nKey.id)
        } else if(box.parentNode == rowSix) {
            sixthArr.push(nKey.id)
        }
        moveNext()
    }
}

nKey.addEventListener(`click`, event => {
    letN(currentBox)
})

function letO(box) {
    if (!box.hasChildNodes()) {
        box.insertAdjacentHTML(`beforeend`, oKey.id)
        if (box.parentNode == rowOne) {
            firstArr.push(oKey.id)
        } else if(box.parentNode == rowTwo) {
            secondArr.push(oKey.id)
        } else if(box.parentNode == rowThree) {
            thirdArr.push(oKey.id)
        } else if(box.parentNode == rowFour) {
            fourthArr.push(oKey.id)
        } else if(box.parentNode == rowFive) {
            fifthArr.push(oKey.id)
        } else if(box.parentNode == rowSix) {
            sixthArr.push(oKey.id)
        }
        moveNext()
    }
}

oKey.addEventListener(`click`, event => {
    letO(currentBox)
})

function letP(box) {
    if (!box.hasChildNodes()) {
        box.insertAdjacentHTML(`beforeend`, pKey.id)
        if (box.parentNode == rowOne) {
            firstArr.push(pKey.id)
        } else if(box.parentNode == rowTwo) {
            secondArr.push(pKey.id)
        } else if(box.parentNode == rowThree) {
            thirdArr.push(pKey.id)
        } else if(box.parentNode == rowFour) {
            fourthArr.push(pKey.id)
        } else if(box.parentNode == rowFive) {
            fifthArr.push(pKey.id)
        } else if(box.parentNode == rowSix) {
            sixthArr.push(pKey.id)
        }
        moveNext()
    }
}

pKey.addEventListener(`click`, event => {
    letP(currentBox)
})

function letQ(box) {
    if (!box.hasChildNodes()) {
        box.insertAdjacentHTML(`beforeend`, qKey.id)
        if (box.parentNode == rowOne) {
            firstArr.push(qKey.id)
        } else if(box.parentNode == rowTwo) {
            secondArr.push(qKey.id)
        } else if(box.parentNode == rowThree) {
            thirdArr.push(qKey.id)
        } else if(box.parentNode == rowFour) {
            fourthArr.push(qKey.id)
        } else if(box.parentNode == rowFive) {
            fifthArr.push(qKey.id)
        } else if(box.parentNode == rowSix) {
            sixthArr.push(qKey.id)
        }
        moveNext()
    }
}

qKey.addEventListener(`click`, event => {
    letQ(currentBox)
})

function letR(box) {
    if (!box.hasChildNodes()) {
        box.insertAdjacentHTML(`beforeend`, rKey.id)
        if (box.parentNode == rowOne) {
            firstArr.push(rKey.id)
        } else if(box.parentNode == rowTwo) {
            secondArr.push(rKey.id)
        } else if(box.parentNode == rowThree) {
            thirdArr.push(rKey.id)
        } else if(box.parentNode == rowFour) {
            fourthArr.push(rKey.id)
        } else if(box.parentNode == rowFive) {
            fifthArr.push(rKey.id)
        } else if(box.parentNode == rowSix) {
            sixthArr.push(rKey.id)
        }
        moveNext()
    }
}

rKey.addEventListener(`click`, event => {
    letR(currentBox)
})

function letS(box) {
    if (!box.hasChildNodes()) {
        box.insertAdjacentHTML(`beforeend`, sKey.id)
        if (box.parentNode == rowOne) {
            firstArr.push(sKey.id)
        } else if(box.parentNode == rowTwo) {
            secondArr.push(sKey.id)
        } else if(box.parentNode == rowThree) {
            thirdArr.push(sKey.id)
        } else if(box.parentNode == rowFour) {
            fourthArr.push(sKey.id)
        } else if(box.parentNode == rowFive) {
            fifthArr.push(sKey.id)
        } else if(box.parentNode == rowSix) {
            sixthArr.push(sKey.id)
        }
        moveNext()
    }
}

sKey.addEventListener(`click`, event => {
    letS(currentBox)
})

function letT(box) {
    if (!box.hasChildNodes()) {
        box.insertAdjacentHTML(`beforeend`, tKey.id)
        if (box.parentNode == rowOne) {
            firstArr.push(tKey.id)
        } else if(box.parentNode == rowTwo) {
            secondArr.push(tKey.id)
        } else if(box.parentNode == rowThree) {
            thirdArr.push(tKey.id)
        } else if(box.parentNode == rowFour) {
            fourthArr.push(tKey.id)
        } else if(box.parentNode == rowFive) {
            fifthArr.push(tKey.id)
        } else if(box.parentNode == rowSix) {
            sixthArr.push(tKey.id)
        }
        moveNext()
    }
}

tKey.addEventListener(`click`, event => {
    letT(currentBox)
})

function letU(box) {
    if (!box.hasChildNodes()) {
        box.insertAdjacentHTML(`beforeend`, uKey.id)
        if (box.parentNode == rowOne) {
            firstArr.push(uKey.id)
        } else if(box.parentNode == rowTwo) {
            secondArr.push(uKey.id)
        } else if(box.parentNode == rowThree) {
            thirdArr.push(uKey.id)
        } else if(box.parentNode == rowFour) {
            fourthArr.push(uKey.id)
        } else if(box.parentNode == rowFive) {
            fifthArr.push(uKey.id)
        } else if(box.parentNode == rowSix) {
            sixthArr.push(uKey.id)
        }
        moveNext()
    }
}

uKey.addEventListener(`click`, event => {
    letU(currentBox)
})

function letV(box) {
    if (!box.hasChildNodes()) {
        box.insertAdjacentHTML(`beforeend`, vKey.id)
        if (box.parentNode == rowOne) {
            firstArr.push(vKey.id)
        } else if(box.parentNode == rowTwo) {
            secondArr.push(vKey.id)
        } else if(box.parentNode == rowThree) {
            thirdArr.push(vKey.id)
        } else if(box.parentNode == rowFour) {
            fourthArr.push(vKey.id)
        } else if(box.parentNode == rowFive) {
            fifthArr.push(vKey.id)
        } else if(box.parentNode == rowSix) {
            sixthArr.push(vKey.id)
        }
        moveNext()
    }
}

vKey.addEventListener(`click`, event => {
    letV(currentBox)
})

function letW(box) {
    if (!box.hasChildNodes()) {
        box.insertAdjacentHTML(`beforeend`, wKey.id)
        if (box.parentNode == rowOne) {
            firstArr.push(wKey.id)
        } else if(box.parentNode == rowTwo) {
            secondArr.push(wKey.id)
        } else if(box.parentNode == rowThree) {
            thirdArr.push(wKey.id)
        } else if(box.parentNode == rowFour) {
            fourthArr.push(wKey.id)
        } else if(box.parentNode == rowFive) {
            fifthArr.push(wKey.id)
        } else if(box.parentNode == rowSix) {
            sixthArr.push(wKey.id)
        }
        moveNext()
    }
}

wKey.addEventListener(`click`, event => {
    letW(currentBox)
})

function letX(box) {
    if (!box.hasChildNodes()) {
        box.insertAdjacentHTML(`beforeend`, xKey.id)
        if (box.parentNode == rowOne) {
            firstArr.push(xKey.id)
        } else if(box.parentNode == rowTwo) {
            secondArr.push(xKey.id)
        } else if(box.parentNode == rowThree) {
            thirdArr.push(xKey.id)
        } else if(box.parentNode == rowFour) {
            fourthArr.push(xKey.id)
        } else if(box.parentNode == rowFive) {
            fifthArr.push(xKey.id)
        } else if(box.parentNode == rowSix) {
            sixthArr.push(xKey.id)
        }
        moveNext()
    }
}

xKey.addEventListener(`click`, event => {
    letX(currentBox)
})

function letY(box) {
    if (!box.hasChildNodes()) {
        box.insertAdjacentHTML(`beforeend`, yKey.id)
        if (box.parentNode == rowOne) {
            firstArr.push(yKey.id)
        } else if(box.parentNode == rowTwo) {
            secondArr.push(yKey.id)
        } else if(box.parentNode == rowThree) {
            thirdArr.push(yKey.id)
        } else if(box.parentNode == rowFour) {
            fourthArr.push(yKey.id)
        } else if(box.parentNode == rowFive) {
            fifthArr.push(yKey.id)
        } else if(box.parentNode == rowSix) {
            sixthArr.push(yKey.id)
        }
        moveNext()
    }
}

yKey.addEventListener(`click`, event => {
    letY(currentBox)
})

function letZ(box) {
    if (!box.hasChildNodes()) {
        box.insertAdjacentHTML(`beforeend`, zKey.id)
        if (box.parentNode == rowOne) {
            firstArr.push(zKey.id)
        } else if(box.parentNode == rowTwo) {
            secondArr.push(zKey.id)
        } else if(box.parentNode == rowThree) {
            thirdArr.push(zKey.id)
        } else if(box.parentNode == rowFour) {
            fourthArr.push(zKey.id)
        } else if(box.parentNode == rowFive) {
            fifthArr.push(zKey.id)
        } else if(box.parentNode == rowSix) {
            sixthArr.push(zKey.id)
        }
        moveNext()
    }
}

zKey.addEventListener(`click`, event => {
    letZ(currentBox)
})


function rowOneCheck() {
    // if (letter is in the array already)
    if (firstArr[0] === word[0]) {
        boxOne.style.background = 'green'
    } else if (firstArr[1] === word[1]) {
        boxTwo.style.background = 'green'
    } else if (firstArr[2] === word[2]) {
        boxThree.style.background = 'green'
    } else if (firstArr[3] === word[3]) {
        boxFour.style.background = 'green'
    } else if (firstArr[4] === word[4]) {
        boxFive.style.background = 'green'
    }
    if (firstArr[0] === word[0]) {
        boxOne.style.background = 'green'
    } else if (firstArr[0] === word[1]) {
         boxOne.style.background = 'yellow'
    } else if (firstArr[0] === word[2]) {
        boxOne.style.background = 'yellow'
    } else if (firstArr[0] === word[3]) {
        boxOne.style.background = 'yellow'
    } else if (firstArr[0] === word[4]) {
        boxOne.style.background = 'yellow'
    } else {
         boxOne.style.background = `rgb(80, 80, 80)`
    }
    if (firstArr[1] === word[1]) {
        boxTwo.style.background = 'green'
    } else if (firstArr[1] === word[0] && boxOne.style.background === 'green') {
         boxTwo.style.background = `rgb(80, 80, 80)`
         if (firstArr[1] === word[0] && boxOne.style.background !== 'green') {
             boxTwo.style.background = 'yellow'
         }
    } else if (firstArr[1] === word[2]) {
        boxTwo.style.background = 'yellow'
    } else if (firstArr[1] === word[3]) {
       boxTwo.style.background = 'yellow'
    } else if (firstArr[1] === word[4]) {
       boxTwo.style.background = 'yellow'
    } else {
         boxTwo.style.background = `rgb(80, 80, 80)`
    }
    if (firstArr[2] === word[2]) {
        boxThree.style.background = 'green'
    } else if (firstArr[2] === word[0] && boxOne.style.background === 'green') {
        boxThree.style.background = `rgb(80, 80, 80)`
    } else if (firstArr[2] === word[0] && firstArr[2] === firstArr[1]) {
            boxThree.style.background = `rgb(80, 80, 80)`
            if (firstArr[2] === word[0] && boxOne.style.background !== 'green' && firstArr[2] !== firstArr[1]) {
                boxThree.style.background = 'yellow'
            }
    } else if (firstArr[2] === word[1] && boxTwo.style.background === 'green') {
        boxThree.style.background = `rgb(80, 80, 80)`
        if (firstArr[2] === word[1] && boxTwo.style.background !== 'green') {
            boxThree.style.background = 'yellow'
        }
    } else if (firstArr[2] === word[3]) {
        boxThree.style.background = 'yellow'
    } else if (firstArr[2] === word[4]) {
        boxThree.style.background = 'yellow'
    } else {
        boxThree.style.background = `rgb(80, 80, 80)`
    }
    if (firstArr[3] === word[3]) {
        boxFour.style.background = 'green'
    } else if (firstArr[3] === word[0] && boxOne.style.background === 'green') {
        boxFour.style.background = `rgb(80, 80, 80)`
    } else if (firstArr[3] === word[0] && firstArr[3] === firstArr[1]) {
        boxFour.style.background = `rgb(80, 80, 80)`
    } else if (firstArr[3] === word[0] && firstArr[3] === firstArr[2]) {
        boxFour.style.background = `rgb(80, 80, 80)`
        if (firstArr[3] === word[0] && boxOne.style.background !== 'green' && firstArr[3] !== firstArr[1] && firstArr[3] !== firstArr[2]) {
            boxThree.style.background = 'yellow'
        }
    } else if (firstArr[3] === word[1] && boxTwo.style.background === 'green') {
        boxFour.style.background = `rgb(80, 80, 80)`
    } else if (firstArr[3] === word[1] && firstArr[3] === firstArr[2]) {
        boxFour.style.background = `rgb(80, 80, 80)`
        if(firstArr[3] === word[1] && boxTwo.style.background !== 'green' && firstArr[3] !== firstArr[2]) {
            boxFour.style.background = 'yellow'
        }
    } else if (firstArr[3] === word[2] && boxThree.style.background !== 'green') {
        boxFour.style.background = `rgb(80, 80, 80)`
        
    } else if (firstArr[3] === word[4]) {
        boxFour.style.background = 'yellow'
    } else {
        boxFour.style.background = `rgb(80, 80, 80)`
    }
    if (firstArr[4] === word[4]) {
        boxFive.style.background = 'green'
    } else if (firstArr[4] === word[0] && boxOne.style.background === 'green') {
        boxFive.style.background = `rgb(80, 80, 80)`
    } else if (firstArr[4] === word[0] && firstArr[4] === firstArr[1]) {
        boxFive.style.background = `rgb(80, 80, 80)`
    } else if (firstArr[4] === word[0] && firstArr[4] === firstArr[2]) {
        boxFive.style.background = `rgb(80, 80, 80)`
    } else if (firstArr[4] === word[0] && firstArr[4] === firstArr[3]) {
        boxFive.style.background = `rgb(80, 80, 80)`
        if (firstArr[4] === word[0] && boxOne.style.background !== 'green' && firstArr[4] !== firstArr[1] && firstArr[4] !== firstArr[2] && firstArr[4] !== firstArr[3]) {
            boxFive.style.background = `rgb(80, 80, 80)`
        } 
    } else if (firstArr[4] === word[1] && boxTwo.style.background === 'green') {
        boxFive.style.background = `rgb(80, 80, 80)`
    } else if (firstArr[4] === word[1] && firstArr[4] === firstArr[2]) {
        boxFive.style.background = `rgb(80, 80, 80)`
    } else if (firstArr[4] === word[1] && firstArr[4] === firstArr[3]) {
        boxFive.style.background = `rgb(80, 80, 80)`
        if (firstArr[4] === word[1] && firstArr[4] !== firstArr[2] && firstArr[4] !== firstArr[3]) {
            boxFive.style.background = 'yellow'
        }
    } else if (firstArr[4] === word[2]) {
        boxFive.style.background = 'yellow'
    } else if (firstArr[4] === word[3]) {
        boxFive.style.background = 'yellow'
    } else {
        boxFive.style.background = `rgb(80, 80, 80)`
    }
}
    //     if (firstArr[0] === word[0]) {
//         boxOne.style.background = 'green'
//     } else if (firstArr[0] === word[1]) {
//          boxOne.style.background = 'yellow'
//     } else if (firstArr[0] === word[2]) {
//         boxOne.style.background = 'yellow'
//     } else if (firstArr[0] === word[3]) {
//         boxOne.style.background = 'yellow'
//     } else if (firstArr[0] === word[4]) {
//         boxOne.style.background = 'yellow'
//     } else {
//          boxOne.style.background = `rgb(80, 80, 80)`
//     }
//     if (firstArr[1] === word[1]) {
//         boxTwo.style.background = 'green'
//     } else if (firstArr[1] === word[0]) {
//          boxTwo.style.background = 'yellow'
//     } else if (firstArr[1] === word[2]) {
//         boxTwo.style.background = 'yellow'
//     } else if (firstArr[1] === word[3]) {
//        boxTwo.style.background = 'yellow'
//     } else if (firstArr[1] === word[4]) {
//        boxTwo.style.background = 'yellow'
//     } else {
//          boxTwo.style.background = `rgb(80, 80, 80)`
//     }
//     if (firstArr[2] === word[2]) {
//         boxThree.style.background = 'green'
//     } else if (firstArr[2] === word[0]) {
//         boxThree.style.background = 'yellow'
//     } else if (firstArr[2] === word[1]) {
//         boxThree.style.background = 'yellow'
//     } else if (firstArr[2] === word[3]) {
//         boxThree.style.background = 'yellow'
//     } else if (firstArr[2] === word[4]) {
//         boxThree.style.background = 'yellow'
//     } else {
//         boxThree.style.background = `rgb(80, 80, 80)`
//     }
//     if (firstArr[3] === word[3]) {
//         boxFour.style.background = 'green'
//     } else if (firstArr[3] === word[0]) {
//         boxFour.style.background = 'yellow'
//     } else if (firstArr[3] === word[1]) {
//         boxFour.style.background = 'yellow'
//     } else if (firstArr[3] === word[2]) {
//         boxFour.style.background = 'yellow'
//     } else if (firstArr[3] === word[4]) {
//         boxFour.style.background = 'yellow'
//     } else {
//         boxFour.style.background = `rgb(80, 80, 80)`
//     }
//     if (firstArr[4] === word[4]) {
//         boxFive.style.background = 'green'
//     } else if (firstArr[4] === word[0]) {
//         boxFive.style.background = 'yellow'
//     } else if (firstArr[4] === word[1]) {
//         boxFive.style.background = 'yellow'
//     } else if (firstArr[4] === word[2]) {
//         boxFive.style.background = 'yellow'
//     } else if (firstArr[4] === word[3]) {
//         boxFive.style.background = 'yellow'
//     } else {
//         boxFive.style.background = `rgb(80, 80, 80)`
//     }
// }
function rowTwoCheck() {
    if (secondArr[0] === word[0]) {
        boxSix.style.background = 'green'
    } else if (secondArr[0] === word[1]) {
         boxSix.style.background = 'yellow'
    } else if (secondArr[0] === word[2]) {
        boxSix.style.background = 'yellow'
    } else if (secondArr[0] === word[3]) {
        boxSix.style.background = 'yellow'
    } else if (secondArr[0] === word[4]) {
        boxSix.style.background = 'yellow'
    } else {
         boxSix.style.background = `rgb(80, 80, 80)`
    }
    if (secondArr[1] === word[1]) {
        boxSeven.style.background = 'green'
    } else if (secondArr[1] === word[0]) {
         boxSeven.style.background = 'yellow'
    } else if (secondArr[1] === word[2]) {
        boxSeven.style.background = 'yellow'
    } else if (secondArr[1] === word[3]) {
       boxSeven.style.background = 'yellow'
    } else if (secondArr[1] === word[4]) {
       boxSeven.style.background = 'yellow'
    } else {
         boxSeven.style.background = `rgb(80, 80, 80)`
    }
    if (secondArr[2] === word[2]) {
        boxEight.style.background = 'green'
    } else if (secondArr[2] === word[0]) {
        boxEight.style.background = 'yellow'
    } else if (secondArr[2] === word[1]) {
        boxEight.style.background = 'yellow'
    } else if (secondArr[2] === word[3]) {
        boxEight.style.background = 'yellow'
    } else if (secondArr[2] === word[4]) {
        boxEight.style.background = 'yellow'
    } else {
        boxEight.style.background = `rgb(80, 80, 80)`
    }
    if (secondArr[3] === word[3]) {
        boxNine.style.background = 'green'
    } else if (secondArr[3] === word[0]) {
        boxNine.style.background = 'yellow'
    } else if (secondArr[3] === word[1]) {
        boxNine.style.background = 'yellow'
    } else if (secondArr[3] === word[2]) {
        boxNine.style.background = 'yellow'
    } else if (secondArr[3] === word[4]) {
        boxNine.style.background = 'yellow'
    } else {
        boxNine.style.background = `rgb(80, 80, 80)`
    }
    if (secondArr[4] === word[4]) {
        boxTen.style.background = 'green'
    } else if (secondArr[4] === word[0]) {
        boxTen.style.background = 'yellow'
    } else if (secondArr[4] === word[1]) {
        boxTen.style.background = 'yellow'
    } else if (secondArr[4] === word[2]) {
        boxTen.style.background = 'yellow'
    } else if (secondArr[4] === word[3]) {
        boxTen.style.background = 'yellow'
    } else {
        boxTen.style.background = `rgb(80, 80, 80)`
    }
}
function rowThreeCheck() {
    if (thirdArr[0] === word[0]) {
        boxEleven.style.background = 'green'
    } else if (thirdArr[0] === word[1]) {
         boxEleven.style.background = 'yellow'
    } else if (thirdArr[0] === word[2]) {
        boxEleven.style.background = 'yellow'
    } else if (thirdArr[0] === word[3]) {
        boxEleven.style.background = 'yellow'
    } else if (thirdArr[0] === word[4]) {
        boxEleven.style.background = 'yellow'
    } else {
         boxEleven.style.background = `rgb(80, 80, 80)`
    }
    if (thirdArr[1] === word[1]) {
        boxTwelve.style.background = 'green'
    } else if (thirdArr[1] === word[0]) {
         boxTwelve.style.background = 'yellow'
    } else if (thirdArr[1] === word[2]) {
        boxTwelve.style.background = 'yellow'
    } else if (thirdArr[1] === word[3]) {
       boxTwelve.style.background = 'yellow'
    } else if (thirdArr[1] === word[4]) {
       boxTwelve.style.background = 'yellow'
    } else {
         boxTwelve.style.background = `rgb(80, 80, 80)`
    }
    if (thirdArr[2] === word[2]) {
        boxThirteen.style.background = 'green'
    } else if (thirdArr[2] === word[0]) {
        boxThirteen.style.background = 'yellow'
    } else if (thirdArr[2] === word[1]) {
        boxThirteen.style.background = 'yellow'
    } else if (thirdArr[2] === word[3]) {
        boxThirteen.style.background = 'yellow'
    } else if (thirdArr[2] === word[4]) {
        boxThirteen.style.background = 'yellow'
    } else {
        boxThirteen.style.background = `rgb(80, 80, 80)`
    }
    if (thirdArr[3] === word[3]) {
        boxFourteen.style.background = 'green'
    } else if (thirdArr[3] === word[0]) {
        boxFourteen.style.background = 'yellow'
    } else if (thirdArr[3] === word[1]) {
        boxFourteen.style.background = 'yellow'
    } else if (thirdArr[3] === word[2]) {
        boxFourteen.style.background = 'yellow'
    } else if (thirdArr[3] === word[4]) {
        boxFourteen.style.background = 'yellow'
    } else {
        boxFourteen.style.background = `rgb(80, 80, 80)`
    }
    if (thirdArr[4] === word[4]) {
        boxFifteen.style.background = 'green'
    } else if (thirdArr[4] === word[0]) {
        boxFifteen.style.background = 'yellow'
    } else if (thirdArr[4] === word[1]) {
        boxFifteen.style.background = 'yellow'
    } else if (thirdArr[4] === word[2]) {
        boxFifteen.style.background = 'yellow'
    } else if (thirdArr[4] === word[3]) {
        boxFifteen.style.background = 'yellow'
    } else {
        boxFifteen.style.background = `rgb(80, 80, 80)`
    }
}
function rowFourCheck() {
    if (fourthArr[0] === word[0]) {
        boxSixteen.style.background = 'green'
    } else if (fourthArr[0] === word[1]) {
         boxSixteen.style.background = 'yellow'
    } else if (fourthArr[0] === word[2]) {
        boxSixteen.style.background = 'yellow'
    } else if (fourthArr[0] === word[3]) {
        boxSixteen.style.background = 'yellow'
    } else if (fourthArr[0] === word[4]) {
        boxSixteen.style.background = 'yellow'
    } else {
         boxSixteen.style.background = `rgb(80, 80, 80)`
    }
    if (fourthArr[1] === word[1]) {
        boxSeventeen.style.background = 'green'
    } else if (fourthArr[1] === word[0]) {
         boxSeventeen.style.background = 'yellow'
    } else if (fourthArr[1] === word[2]) {
        boxSeventeen.style.background = 'yellow'
    } else if (fourthArr[1] === word[3]) {
       boxSeventeen.style.background = 'yellow'
    } else if (fourthArr[1] === word[4]) {
       boxSeventeen.style.background = 'yellow'
    } else {
         boxSeventeen.style.background = `rgb(80, 80, 80)`
    }
    if (fourthArr[2] === word[2]) {
        boxEighteen.style.background = 'green'
    } else if (fourthArr[2] === word[0]) {
        boxEighteen.style.background = 'yellow'
    } else if (fourthArr[2] === word[1]) {
        boxEighteen.style.background = 'yellow'
    } else if (fourthArr[2] === word[3]) {
        boxEighteen.style.background = 'yellow'
    } else if (fourthArr[2] === word[4]) {
        boxEighteen.style.background = 'yellow'
    } else {
        boxEighteen.style.background = `rgb(80, 80, 80)`
    }
    if (fourthArr[3] === word[3]) {
        boxNineteen.style.background = 'green'
    } else if (fourthArr[3] === word[0]) {
        boxNineteen.style.background = 'yellow'
    } else if (fourthArr[3] === word[1]) {
        boxNineteen.style.background = 'yellow'
    } else if (fourthArr[3] === word[2]) {
        boxNineteen.style.background = 'yellow'
    } else if (fourthArr[3] === word[4]) {
        boxNineteen.style.background = 'yellow'
    } else {
        boxNineteen.style.background = `rgb(80, 80, 80)`
    }
    if (fourthArr[4] === word[4]) {
        boxTwenty.style.background = 'green'
    } else if (fourthArr[4] === word[0]) {
        boxTwenty.style.background = 'yellow'
    } else if (fourthArr[4] === word[1]) {
        boxTwenty.style.background = 'yellow'
    } else if (fourthArr[4] === word[2]) {
        boxTwenty.style.background = 'yellow'
    } else if (fourthArr[4] === word[3]) {
        boxTwenty.style.background = 'yellow'
    } else {
        boxTwenty.style.background = `rgb(80, 80, 80)`
    }
}
function rowFiveCheck() {
    if (fifthArr[0] === word[0]) {
        boxTwoOne.style.background = 'green'
    } else if (fifthArr[0] === word[1]) {
         boxTwoOne.style.background = 'yellow'
    } else if (fifthArr[0] === word[2]) {
        boxTwoOne.style.background = 'yellow'
    } else if (fifthArr[0] === word[3]) {
        boxTwoOne.style.background = 'yellow'
    } else if (fifthArr[0] === word[4]) {
        boxTwoOne.style.background = 'yellow'
    } else {
         boxTwoOne.style.background = `rgb(80, 80, 80)`
    }
    if (fifthArr[1] === word[1]) {
        boxTwoTwo.style.background = 'green'
    } else if (fifthArr[1] === word[0]) {
         boxTwoTwo.style.background = 'yellow'
    } else if (fifthArr[1] === word[2]) {
        boxTwoTwo.style.background = 'yellow'
    } else if (fifthArr[1] === word[3]) {
       boxTwoTwo.style.background = 'yellow'
    } else if (fifthArr[1] === word[4]) {
       boxTwoTwo.style.background = 'yellow'
    } else {
         boxTwoTwo.style.background = `rgb(80, 80, 80)`
    }
    if (fifthArr[2] === word[2]) {
        boxTwoThree.style.background = 'green'
    } else if (fifthArr[2] === word[0]) {
        boxTwoThree.style.background = 'yellow'
    } else if (fifthArr[2] === word[1]) {
        boxTwoThree.style.background = 'yellow'
    } else if (fifthArr[2] === word[3]) {
        boxTwoThree.style.background = 'yellow'
    } else if (fifthArr[2] === word[4]) {
        boxTwoThree.style.background = 'yellow'
    } else {
        boxTwoThree.style.background = `rgb(80, 80, 80)`
    }
    if (fifthArr[3] === word[3]) {
        boxTwoFour.style.background = 'green'
    } else if (fifthArr[3] === word[0]) {
        boxTwoFour.style.background = 'yellow'
    } else if (fifthArr[3] === word[1]) {
        boxTwoFour.style.background = 'yellow'
    } else if (fifthArr[3] === word[2]) {
        boxTwoFour.style.background = 'yellow'
    } else if (fifthArr[3] === word[4]) {
        boxTwoFour.style.background = 'yellow'
    } else {
        boxTwoFour.style.background = `rgb(80, 80, 80)`
    }
    if (fifthArr[4] === word[4]) {
        boxTwoFive.style.background = 'green'
    } else if (fifthArr[4] === word[0]) {
        boxTwoFive.style.background = 'yellow'
    } else if (fifthArr[4] === word[1]) {
        boxTwoFive.style.background = 'yellow'
    } else if (fifthArr[4] === word[2]) {
        boxTwoFive.style.background = 'yellow'
    } else if (fifthArr[4] === word[3]) {
        boxTwoFive.style.background = 'yellow'
    } else {
        boxTwoFive.style.background = `rgb(80, 80, 80)`
    }
}
function rowSixCheck() {
    if (sixthArr[0] === word[0]) {
        boxTwoSix.style.background = 'green'
    } else if (sixthArr[0] === word[1]) {
         boxTwoSix.style.background = 'yellow'
    } else if (sixthArr[0] === word[2]) {
        boxTwoSix.style.background = 'yellow'
    } else if (sixthArr[0] === word[3]) {
        boxTwoSix.style.background = 'yellow'
    } else if (sixthArr[0] === word[4]) {
        boxTwoSix.style.background = 'yellow'
    } else {
         boxTwoSix.style.background = `rgb(80, 80, 80)`
    }
    if (sixthArr[1] === word[1]) {
        boxTwoSeven.style.background = 'green'
    } else if (sixthArr[1] === word[0]) {
         boxTwoSeven.style.background = 'yellow'
    } else if (sixthArr[1] === word[2]) {
        boxTwoSeven.style.background = 'yellow'
    } else if (sixthArr[1] === word[3]) {
       boxTwoSeven.style.background = 'yellow'
    } else if (sixthArr[1] === word[4]) {
       boxTwoSeven.style.background = 'yellow'
    } else {
         boxTwoSeven.style.background = `rgb(80, 80, 80)`
    }
    if (sixthArr[2] === word[2]) {
        boxTwoEight.style.background = 'green'
    } else if (sixthArr[2] === word[0]) {
        boxTwoEight.style.background = 'yellow'
    } else if (sixthArr[2] === word[1]) {
        boxTwoEight.style.background = 'yellow'
    } else if (sixthArr[2] === word[3]) {
        boxTwoEight.style.background = 'yellow'
    } else if (sixthArr[2] === word[4]) {
        boxTwoEight.style.background = 'yellow'
    } else {
        boxTwoEight.style.background = `rgb(80, 80, 80)`
    }
    if (sixthArr[3] === word[3]) {
        boxTwoNine.style.background = 'green'
    } else if (sixthArr[3] === word[0]) {
        boxTwoNine.style.background = 'yellow'
    } else if (sixthArr[3] === word[1]) {
        boxTwoNine.style.background = 'yellow'
    } else if (sixthArr[3] === word[2]) {
        boxTwoNine.style.background = 'yellow'
    } else if (sixthArr[3] === word[4]) {
        boxTwoNine.style.background = 'yellow'
    } else {
        boxTwoNine.style.background = `rgb(80, 80, 80)`
    }
    if (sixthArr[4] === word[4]) {
        boxThirty.style.background = 'green'
    } else if (sixthArr[4] === word[0]) {
        boxThirty.style.background = 'yellow'
    } else if (sixthArr[4] === word[1]) {
        boxThirty.style.background = 'yellow'
    } else if (sixthArr[4] === word[2]) {
        boxThirty.style.background = 'yellow'
    } else if (sixthArr[4] === word[3]) {
        boxThirty.style.background = 'yellow'
    } else {
        boxThirty.style.background = `rgb(80, 80, 80)`
    }
}

// first row, insert values from keyboard
// once enter, lock row and compare inserted values to word and light up applicable letters
// move onto next row and repeat