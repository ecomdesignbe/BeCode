/* 

Little Rainbow exercise
Write a program that gives the body background the color blue
1 second later it becomes yellow
1 second later it becomes red
1 second later it becomes cyan
1 second later it becomes violet
1 second later it becomes green
1 second later it becomes purple
Wait a minute... it's the same than the other one ?

Yes... but this time use promises to generate it. See the difference in the code !

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

*/
let background = document.body.style.backgroundColor = 'blue'

const changeBkg = (duration) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(duration)
        }, duration)
    })
}

changeBkg(1000) 
    .then(() => {
        background = document.body.style.backgroundColor = 'yellow'
        return changeBkg(1000)
    })

    .then(() => {
        background = document.body.style.backgroundColor = 'red'
        return changeBkg(1000)
    })

    .then(() => {
        background = document.body.style.backgroundColor = 'cyan'
        return changeBkg(1000)
    })

    .then(() => {
        background = document.body.style.backgroundColor = 'violet'
        return changeBkg(1000)
    })

    .then(() => {
        background = document.body.style.backgroundColor = 'green'
        return changeBkg(1000)
    })

    .then(() => {
        background = document.body.style.backgroundColor = 'purple'
        return changeBkg(1000)
    })

