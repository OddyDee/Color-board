const board = document.querySelector('#board')
const colors = ['#60EFF0', '#ff9393', '#f2ff3c', '#ffffff', '#470CF7', '#E00105', '#F7A60C', '#8AED0C', '#F0A273', '#F7390C', '#E00004', '#F70CAD', '#C20CED']
const SQUARE_NUMBERS = 900

for (let i = 0; i < SQUARE_NUMBERS; i++) {
     const square = document.createElement('div')
     square.classList.add('square')

     square.addEventListener('mouseover', () => setColor(square))

     square.addEventListener('mouseleave', () => removeColor(square))
    
     board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `20px 20px 40px ${color}, 20px 20px 30px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1b192c'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
   const index = Math.floor(Math.random() * colors.length)
   return colors[index]
}