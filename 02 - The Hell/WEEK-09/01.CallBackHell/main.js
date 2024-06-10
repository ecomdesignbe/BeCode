/*
let str = "Initial"

setTimeout(() => {
    str = "end"
    console.log(str)
}, 1)
/* console.log(str) 

*************************************************************************************************

const retrieveAsyncData(()=>{
    doSomething(()=>{ // Depending on the data
        doSomethingMore(()=>{ // Depending on the function before
            thenDoAnotherThing() // Depending on the function before
            // Etc.
        })
    })
})

Write a program that gives the body background the color blue
1 second later it becomes yellow
1 second later it becomes red
1 second later it becomes cyan
1 second later it becomes violet
1 second later it becomes green
1 second later it becomes purple
Sounds pretty simple isn'it ?

But here are the restrictions :

You CAN'T use setInterval
You MUST set your setTimeout to 1 second for each color. (no doing maths counting 1,2,3,4,5 etc.)

*/

let background = document.body.style.backgroundColor = 'blue'

setTimeout(()=> {
    background = document.body.style.backgroundColor = 'yellow'
    
    setTimeout(()=> {
        background = document.body.style.backgroundColor = 'red'
        
        setTimeout(()=> {
            background = document.body.style.backgroundColor = 'cyan'

            setTimeout(()=> {
                background = document.body.style.backgroundColor = 'violet'

                setTimeout(()=> {
                    background = document.body.style.backgroundColor = 'green'

                    setTimeout(()=> {
                        background = document.body.style.backgroundColor = 'purple'
                    },1000)

                },1000)

            },1000) 

        },1000)   

    },1000)

},1000)

