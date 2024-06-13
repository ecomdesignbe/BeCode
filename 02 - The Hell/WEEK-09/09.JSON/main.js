const myObj = {
    firstname : "Steve",
    lastname: "Vandenbossche",
    age : 44,
    hasPets: true,
}

const myJson = JSON.stringify(myObj)

console.log(myJson)

console.log(JSON.parse(myJson))