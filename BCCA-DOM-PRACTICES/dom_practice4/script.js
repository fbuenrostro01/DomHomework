let mainText=document.querySelector('[name="main-text"]')

document.querySelector('.font-size-down').addEventListener('click', function () {
  mainText.style.fontSize='2rem'
});

document.querySelector('.font-default-size').addEventListener('click', function () {
  mainText.style.fontSize='4rem'
});

document.querySelector('.font-size-up').addEventListener('click', function () {
  mainText.style.fontSize='6rem'
})
