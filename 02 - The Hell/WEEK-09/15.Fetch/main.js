/*
fetch("https://catfact.ninja/fact")
    .then((response) => {
        console.log(response);
    })
    
    .catch((error) => {
        console.log(error);
    });
*/

/*
const fetchData = async () => {
    const res = await fetch("https://catfact.ninja/fact")
    const data = await res.json()
    console.log(data)
}
fetchData()
*/


fetch("https://jsonplaceholder.typicode.com/users")
    .then(recoveryData => recoveryData.text())
    .then(body => console.log(body))

