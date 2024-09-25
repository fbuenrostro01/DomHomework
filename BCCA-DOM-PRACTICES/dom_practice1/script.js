document.addEventListener("DOMContentLoaded", () => {
    let checkBoxDivs = document.querySelectorAll(".checkbox_div")

    checkBoxDivs.forEach((div) => {
        let checkBox = div.querySelector("input[type='checkbox']")
        let text = div.querySelector("p")

        checkBox.addEventListener("change", (event) => {
            if (event.target.checked) { 
                div.style.backgroundColor="black"
                text.style.color="white"
            } else {
                div.style.backgroundColor="transparent"
               
            }
        });
    });
});




