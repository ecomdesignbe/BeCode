/*
Write some JS code to :

When a button is clicked
the paragraph after it is displayed.
the text of the button is no longer "Open tab" but "Close tab"

If we click the button again, the paragraph disappears and the text of the button should be back to "Open tab"


*/
let button = document.querySelectorAll('button')
let paragraph = document.querySelectorAll('p') 

for(let i = 0; i < button.length ; i++) {
      
    button[i].addEventListener('click', () => {    
        paragraph[i].classList.toggle('hidden')

        if (paragraph[i].className === "hidden") {
            button[i].innerHTML = "Open tab" 
        } else {
            button[i].innerHTML = "Close tab" 
        }   
    })  
}
