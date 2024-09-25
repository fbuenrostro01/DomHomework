let circleSlider=document.getElementById('circleSlider')
let wave=document.querySelector('.wave')


circleSlider.addEventListener('input', function () {
  let size=circleSlider.value
  wave.style.width=size+'vh'
  wave.style.height=size +'vh'
})
