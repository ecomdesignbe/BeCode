/*
const myFunc = async () => {
    const response = await getSomeData(); // getSomeData here returns a promise
    const data = await getAnotherData(response); // getAnotherData returns a promise as well
    console.log(data);
};

So... let's try to make sense of all of this in a very simple example. Let's get back to the rainbow exercise:

Create a function generateBG that takes two parameters (color, delay)
This function returns a promise that turns the background color of the body color after delay time. Then it resolves.
Now you create an async function that calls and wait generateBG for each color given in the exercise :
blue
yellow
red
cyan
violet
green
purple


function wait (duration) {
    return new Promise ((resolve, reject) => {
        setTimeout(()=> {
            resolve(duration)
        }, duration)
    })
}

function waitAndFail (duration) {
    return new Promise ((resolve, reject) => {
        setTimeout(()=> {
            reject(duration)
        }, duration)
    })
}

async function main() {
    await wait(2000)
    console.log('bonjour')
}

main()

/**************************************************/

function generateBG (color, delay) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(color,delay)
        }, delay)
    })
}

async function changeBkg() {
    await generateBG(color = 'blue', 1000)
    document.body.style.backgroundColor = `${color}`

    await generateBG(color = 'yellow', 1000)
    document.body.style.backgroundColor = `${color}`

    await generateBG(color = 'red', 1000)
    document.body.style.backgroundColor = `${color}`
    
    await generateBG(color = 'cyan', 1000)
    document.body.style.backgroundColor = `${color}`

    await generateBG(color = 'violet', 1000)
    document.body.style.backgroundColor = `${color}`

    await generateBG(color = 'green', 1000)
    document.body.style.backgroundColor = `${color}`

    await generateBG(color = 'purple', 1000)
    document.body.style.backgroundColor = `${color}`
}

changeBkg()