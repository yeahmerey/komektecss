const redSlider = document.getElementById('redRangeSlider')
const greenSlider = document.getElementById('greenRangeSlider')
const blueSlider = document.getElementById('blueRangeSlider')

const redValue = document.getElementById('valueOfRedSlider')
const greenValue = document.getElementById('valueOfGreenSlider')
const blueValue = document.getElementById('valueOfBlueSlider')

const colorDisplay = document.getElementById('color-display')

function updateColor(){
    const red = redSlider.value ;
    const green = greenSlider.value ;
    const blue = blueSlider.value; 

    redValue.textContent = red ;
    greenValue.textContent = green; 
    blueValue.textContent = blue ; 

    colorDisplay.style.backgroundColor = `rgb(${red},${green},${blue})`; 
}

redSlider.addEventListener('input' , updateColor)
greenSlider.addEventListener('input', updateColor)
blueSlider.addEventListener('input', updateColor); 

updateColor() ; 