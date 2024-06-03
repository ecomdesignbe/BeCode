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

form.addEventListener("change", (event) => {
  event.preventDefault(); 
  let baliseNom = document.getElementById("nom")
  let nom = baliseNom.value
  console.log(nom); // affiche ce qui est contenu dans la balise name
})

*/

const form = document.querySelector("form");


form.addEventListener("submit", (event) => {
  event.preventDefault(); // evite le rechargement de la page

  let lowercaseOnly  = /^[a-z]+$/g
  let validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g 

  let username = document.getElementById("username")
  let usernameMsg = document.getElementById('usernameMsg')
  
  if(username.value === '' || // not empty
    !lowercaseOnly.test(username.value) || // must be only lowercase
    username.value.length < 5 || username.value.length > 10) { //most 10 characters
      usernameMsg.classList = "error"
      usernameMsg.innerHTML = 'Must be only lowercase and at least 5 characters and at most 10 characters.'
    } else {
      usernameMsg.classList = "success"
      usernameMsg.innerHTML = 'Passed'
      console.log(username.value)
    }
  
  let email = document.getElementById("email")
  let emailMsg = document.getElementById('emailMsg')
  
  if(email.value === '' || // not empty
    !validEmail.test(email.value)) { // valid email 
      emailMsg.classList = "error"
      emailMsg.innerHTML = 'Email should be a valid email adress'
    } else {
      emailMsg.classList = "success"
      emailMsg.innerHTML = 'Passed'
      console.log(email.value)
    }

      
  let password = document.getElementById("password")
  let passwordMsg = document.getElementById('passwordMsg')
  
  if(password.value === '' || // not empty
    password.value.length < 8 || password.value.length > 15) { //most 15 characters
      passwordMsg.classList = "error"
      passwordMsg.innerHTML = 'Must be at least 8 characters and at most 15 characters.'
    } else {
      passwordMsg.classList = "success"
      passwordMsg.innerHTML = 'Passed'
      console.log(password.value)
    }

    let retypePassword = document.getElementById("retypePassword")
    let retypePasswordMsg = document.getElementById('retypePasswordMsg')

    if(retypePassword.value === '' || // not empty
    !retypePassword.value === password.value) { 
      retypePasswordMsg.classList = "error"
      retypePasswordMsg.innerHTML = 'Password confirmation should be the same as password'
    } else {
      retypePasswordMsg.classList = "success"
      retypePasswordMsg.innerHTML = 'Passed'
      console.log(retypePassword.value)
    } 
});


