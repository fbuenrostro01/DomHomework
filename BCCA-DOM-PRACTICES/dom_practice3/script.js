let showWindowBtn=document.getElementById('show-window')
let closeWindowBtn=document.getElementById('close-window')
let windowElement=document.querySelector('.window')
let overlay=document.querySelector('.overlay')


showWindowBtn.addEventListener('click', () => {
    windowElement.classList.remove('hidden')  
    overlay.classList.remove('hidden')  
})


closeWindowBtn.addEventListener('click', () => {
    windowElement.classList.add('hidden')  
    overlay.classList.add('hidden')  
})
