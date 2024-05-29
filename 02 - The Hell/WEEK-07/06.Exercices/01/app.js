/* 

Make the following arrangements with only JavaScript : (each line of code should start with the variable bold... The code will be discusting, but.. hey ! it's an exercise)

the body should have a background color of beige
the bold itself should be red
the part-2 div should have a darkblue background and a white color.
The anchor tag in part-2 should be pink
all li in part-1 should be orange
All a inside the lis should be green
Finally, the h1 should be uppercase.

*/

const bold = document.querySelector("b");

document.body.style.backgroundColor = "beige"

bold.style.color = "red"

const part2 = document.querySelector(".part-2")

part2.style.backgroundColor = "darkBlue"
part2.style.color = "white"
part2.querySelector(".myBtn").style.color = "pink"

const lisPart1 = document.querySelectorAll('.part-1 li')

for(let i = 0; i < lisPart1.length; i++) {
    lisPart1[i].style.color = "orange"
}

const anchorPart1 = document.querySelectorAll('.part-1 a')

for(let j = 0; j < anchorPart1.length; j++) {
    anchorPart1[j].style.color = "green"
}

const UpperH1part1 = document.querySelector("h1")

UpperH1part1.style.textTransform = "Uppercase"







