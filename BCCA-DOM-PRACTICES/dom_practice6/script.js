let backgroundColorPicker=document.getElementById('backgroundColorPicker')
let bubblesColorPicker=document.getElementById('bubblesColorPicker')
let area=document.querySelector('.area')
let bubbles=document.querySelectorAll('.bubbles')

backgroundColorPicker.addEventListener('input', function () {
  area.style.backgroundColor=backgroundColorPicker.value
})


bubblesColorPicker.addEventListener('input', function () {
  bubbles.forEach(function (bubble) {
    bubble.style.backgroundColor=bubblesColorPicker.value
  })
})
