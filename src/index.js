// Include app css via style loader
require('./style.css')

const widthInput = document.querySelector('#imgwidth')
const heightInput = document.querySelector('#imgheight')
const colorInput = document.querySelector('#imgcolor')
const submitBtn = document.querySelector('#imgsubmit')

const canvas = document.querySelector('#imgcanvas')
const ctx = canvas.getContext('2d')

const updateCanvas = function () {
  // Read form
  const w = parseInt(widthInput.value)
  const h = parseInt(heightInput.value)
  const c = colorInput.value
  // Reset canvas size
  canvas.width = w
  canvas.height = h
  // Fill canvas with color
  ctx.fillStyle = c
  ctx.fillRect(0, 0, w, h)
}

submitBtn.addEventListener('click', updateCanvas)

// Initial reset
updateCanvas()
