// GrafikArt 

const buttonArt = document.querySelector('button')

buttonArt.addEventListener('click', function() {
    alert('Bonjour')
})

// BeCode

const buttonBe = document.querySelector("button");

buttonBe.addEventListener("click", () => {
  alert("the button has been clicked");
});

const alertBtn = () => {
    alert("the button has been clicked");
  };
  
  buttonBe.addEventListener("click", alertBtn);