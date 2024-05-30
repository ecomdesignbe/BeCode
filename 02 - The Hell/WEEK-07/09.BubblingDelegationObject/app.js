/*
document.querySelector("button").addEventListener("click", () => {
    alert("button was clicked");
  });

  document.querySelector("button").addEventListener("click", (event) => {
    console.log(event);
  });
*/

const button = document.querySelector("button");
const p = document.querySelector("p");

button.addEventListener("click", (e) => {
    e.stopPropagation();
    alert("button was clicked");
});

p.addEventListener("click", () => {
    alert("paragraph was clicked");
});

parent.addEventListener("click", (e) => {
    console.log(e.target);
});

parent.addEventListener("click", (e) => {
    if (e.target.innerText === "One") {
      alert("You clicked the first button");
    }
  
    if (e.target.innerText === "Two") {
      alert("Elodie loves cats");
    }
  
    if (e.target.innerText === "Three") {
      alert("I am so happy !");
    }
    // etc...
  });

  document.addEventListener("click", (e) => {
    if (e.target.matches(".my-class")) {
      // Handle clicks on the elements with "my-class" class
    }
    if (e.target.matches("li")) {
      // Handle clicks on all li in the page
    }
    // etc
  });