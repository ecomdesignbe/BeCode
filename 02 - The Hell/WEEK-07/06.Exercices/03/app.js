/* 
Use javascript to inverse the highlighted list elements.

for(let i = 0; i < li.length; i++) {
    // li.classList.remove('highlight')    
    console.log(li[i])
}


if (li.className === "highlight") {
    li.className = "none";
  } else {
    li.className = "highlight";
  }
*/

let li = document.querySelectorAll('li')

li.forEach(li => {
  li.classList.remove('highlight') 
});


