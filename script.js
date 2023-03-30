let container = document.querySelector(".container");
// make reference to main container inside of the html doc

const containersWidth = document.querySelector('.container').clientWidth;
const containersHeight = document.querySelector('.container').clientHeight;
// store the containers size inside of variables.


function turnBoxBlack() {
    this.style.backgroundColor = 'black';
    this.style.borderColor = 'black';
}; // function to link with the mouseover listener

function makeBoxesDown(howManyBoxes, boxHeight, boxWidth, containerForBoxes) { //
    for (let x = 0; x < howManyBoxes; x++) {
        let box = document.createElement("div")
        let boxId = "boxId" + x;
        // give each box a separate id
        box.setAttribute("id", boxId)
        box.style.height = boxHeight - 2 + "px"
        box.style.width = boxWidth - 2 + "px"
        // -2 because the borders of each box add on to the size.
        box.style.border = "1px solid red";
        box.addEventListener('mouseover', turnBoxBlack)
        containerForBoxes.appendChild(box)
        // puts each box in the separate containers made for the boxes
    }};
    
function makeContainer (howManyBoxes, boxHeight, boxWidth) {
    for (let z = 0; z < howManyBoxes; z++) {
        let containerForBoxes = document.createElement("div")
        // creates another div to separate the container the columns of boxes are in.
        let containerB = "containerB" + z
        // different class.
        containerForBoxes.setAttribute("class", containerB)
        container.appendChild(containerForBoxes)
        // puts these separate containers inside of the main one
        makeBoxesDown(howManyBoxes, boxHeight, boxWidth, containerForBoxes)
        
    }};

function createBox() {
    let howManyBoxes = +prompt("How many boxes? (x * x grid)");
    let boxHeight = containersHeight / howManyBoxes
    let boxWidth = containersWidth / howManyBoxes
    makeContainer(howManyBoxes, boxHeight, boxWidth);

};    

    
createBox()