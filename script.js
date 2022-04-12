const gridContainer = document.getElementById('grid-container');
const radioSizeSmall = document.getElementById('radio-size-small');
const radioSizeMed = document.getElementById('radio-size-med');
const radioSizeLarge = document.getElementById('radio-size-large');
const radioColorSmall = document.getElementById('radio-color-small');
const radioColorMed = document.getElementById('radio-color-med');
const radioColorLarge = document.getElementById('radio-color-large');

const smallNumDivs = 64;
const medNumDivs = 121;
const largeNumDivs = 225;

let numDivs = medNumDivs;
let generatedDivs = []; // When divs are created they will be placed in this array

initDivs(numDivs);
radioSizeMed.checked = true; // Default value
radioColorMed.checked = true; // Default value

let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);
let rUp = true;
let gUp = false;
let bUp = true;


radioSizeSmall.addEventListener('change', function() {
    clearGeneratedDivs();
    initDivs(smallNumDivs);
});

radioSizeMed.addEventListener('change', function() {
    clearGeneratedDivs();
    initDivs(medNumDivs);
});

radioSizeLarge.addEventListener('change', function() {
    clearGeneratedDivs();
    initDivs(largeNumDivs);
});

window.addEventListener('resize', function() {
    clearGeneratedDivs();
    initDivs(numDivs)
})

function initDivs(numberOfDivs) {
    const divSize = (gridContainer.clientHeight) / Math.sqrt(numberOfDivs);
    console.log(gridContainer.clientWidth);
    console.log(divSize)
    for (let i = 0; i < numberOfDivs; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-div');
        div.style.width = `${divSize}px`;
        div.style.height = `${divSize}px`;
        div.style.borderRight = '1px solid gray';
        div.style.borderTop = '1px solid gray';
        div.addEventListener('pointerenter', function() {
            updateRGB(15, 10, 20);
            div.style.backgroundColor = `rgb(${r},${g},${b})`;
        })
        generatedDivs.push(div);
        gridContainer.appendChild(div);
    }
}


function clearGeneratedDivs() {
    for (let i = 0; i < generatedDivs.length; i++) {
        generatedDivs[i].remove();
    }
    generatedDivs = [];
}



function updateRGB(redDelta, greenDelta, blueDelta) {
    let rDelta;
    let gDelta;
    let bDelta;

    if (radioColorSmall.checked) {
        rDelta = Math.floor(redDelta / 5);
        gDelta = Math.floor(greenDelta / 5);
        bDelta = Math.floor(blueDelta / 5);
    } else if (radioColorMed.checked) {
        rDelta = redDelta;
        gDelta = greenDelta;
        bDelta = blueDelta;
    } else if (radioColorLarge.checked) {
        rDelta = redDelta * 2;
        gDelta = greenDelta * 2;
        bDelta = blueDelta * 2;
    }

    if (rUp) {
        if (r < 255 - rDelta) {
            r += rDelta;
        } else {
            r -= rDelta;
            rUp = false
        }
    } else {
        if (r > 0 + rDelta) {
            r -= rDelta;
        } else {
            r += rDelta;
            rUp = true;
        }
    }

    if (gUp) {
        if (g < 255 - gDelta) {
            g += gDelta;
        } else {
            g -= gDelta;
            gUp = false
        }
    } else {
        if (g > 0 + gDelta) {
            g -= gDelta;
        } else {
            g += gDelta;
            gUp = true;
        }
    }
    
    if (bUp) {
        if (b < 255 - bDelta) {
            b += bDelta;
        } else {
            b -= bDelta;
            bUp = false
        }
    } else {
        if (b > 0 + bDelta) {
            b -= bDelta;
        } else {
            b += bDelta;
            bUp = true;
        }
    }    
}