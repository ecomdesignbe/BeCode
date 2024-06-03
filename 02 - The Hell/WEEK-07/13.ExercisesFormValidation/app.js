/* 
Here are some instructions :

You form should ask for :
username / email / password / confirmation of password

It should also have a button to submit the form.

Make it pretty ! Some styling in css will help. 
(That's a good opportunity to familiarize yourself with the styling of form inputs. 
It can be quite frustrating sometimes :()
Below each input, put a paragraph with class "msg". 
These paragraphs should only appear if there is an error or success on submit.
On submit, the text of a successful input should be green and red if there is an error.
The message should say something like : Must be at least 5 characters etc.

The validation should be as follow :
username must be only lowercase and at least 5 characters and at most 10 characters.
email should be a valid email adress 
(go learn about the concept of regex and find on google a regex that tests if a string is in a correct email format. Use the match method to test a string against a regex.)
password should be at least 8 characters and at most 15 characters.
password confirmation should be the same as password

After all the tests passed and everything is green, when you submit, the input values should be logged to the console.

Small tips..
In your HTML, try to put each label, input and .msg inside a parent div. 
This way, you can just give later to the parent div a class of "error" or "success" in order to have the proper styling.

In you css, create an "error" and "success" class styling that will make the input and the .msg paragraph a particular style.

In your js, think about using the delegation strategy we talked about. (an event listener to the parent, and targeting )

Don't worry about optimization for now. Do it with a bunch of if/else in the beggining and then try to refactor it later.

form.addEventListener("click", (event) => {
  event.preventDefault(); // Prevents the page to submit the form (and therefore refresh the page)

  // Run some code then...
*/



form.addEventListener("change", (event) => {
  event.preventDefault(); 
  let baliseNom = document.getElementById("nom")
  let nom = baliseNom.value
  console.log(nom); // affiche ce qui est contenu dans la balise name
})

/* 

const form = document.querySelector("form");

let username = document.getElementById("username")
let usernameMsg = document.querySelector('p')

if(username === '') {
  usernameMsg.style.color = 'red'
  usernameMsg.innerHTML = 'username are empty'
}
else {
  console.log(username.value)
  usernameMsg.style.color = 'green'
  usernameMsg.innerHTML = 'good'
}


form.addEventListener("submit", (event) => {
  event.preventDefault(); // evite le rechargement de la page

  let username = document.querySelector('#username').value

  let email = document.querySelector('#email').value
  let password = document.querySelector('#password').value
  let retypePassword = document.querySelector('#retypePassword').value
  
   let usernameMsg = document.querySelector('p')
  let emailMsg = document.querySelector('p')
  let passwordMsg = document.querySelector('p')
  let retypePasswordMsg = document.querySelector('p')
  

  if(username === '') {
    usernameMsg.style.color = 'red'
    usernameMsg.innerHTML = 'username are empty'
  }
  else {
    usernameMsg.style.color = 'green'
    usernameMsg.innerHTML = 'good'
  }
  

});
*/