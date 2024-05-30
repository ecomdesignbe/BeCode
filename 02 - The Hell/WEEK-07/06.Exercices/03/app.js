/* 
Use javascript to inverse the highlighted list elements.
*/

let li = document.querySelectorAll('li')


for(let i = 0; i < li.length ; i++) {
  console.log(li[i]);
  li[i].classList.toggle("highlight");
}

