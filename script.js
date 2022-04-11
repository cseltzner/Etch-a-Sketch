const gridContainer = document.getElementById('grid-container');

let numDivs = 121;

initDivs(numDivs);


let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);
let rUp = true;
let gUp = false;
let bUp = true;






function initDivs(numberOfDivs) {
    const divSize = gridContainer.clientHeight / Math.sqrt(numDivs);
    for (let i = 0; i < numberOfDivs; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-div');
        div.style.width = `${divSize}px`;
        div.style.height = `${divSize}px`;
        div.style.border = '1px solid gray';
        div.addEventListener('pointerenter', function() {
            updateRGB(10, 20, 10);
            div.style.backgroundColor = `rgb(${r},${g},${b})`;
        })
        gridContainer.appendChild(div);
    }
}



function updateRGB(rDelta, gDelta, bDelta) {
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