let emphasizedWord=document.querySelector('.emphasized-word')
let buttons=document.querySelectorAll('.button-color')


buttons.forEach(button => {
  button.addEventListener('click', function () {
   
    const color=button.textContent.toLowerCase()
    
    
    emphasizedWord.style.color=color
  })
})
