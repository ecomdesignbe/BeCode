const btnJob = document.getElementById('btn-job')

const githubForm = document.getElementById('github-form')

const githubResult = document.getElementById('github-result')

btnJob.addEventListener('click', applyToJob)
githubForm.addEventListener('submit', searchGithub)

const candidat = {
    isProgrammer : true,
    isCool : true,
}

/*
function applyToJob() {
    console.log('décision en cours')
    startDecisionProcess()
        .then((result) => {            
            console.log('result', result)
        })

        .catch((err) => {
            console.log('error', err)        
        })
    console.log('juste après startdecisionprocess')
} 
*/

async function applyToJob() {
    console.log('décision en cours')
    try {
        const result = await startDecisionProcess()
        console.log('juste après startdecisionprocess')
    } catch(err) {
        console.log('error', err)
    }
} 



function startDecisionProcess() {
    return new Promise((resolve, reject) => {
        console.log(`recruteur : Je recois d'autres candidats`)

        setTimeout(() => {
            if(candidat.isProgrammer && candidat.isCool) {
                resolve('recruteur : bienvenue dans notre entreprise')
            } else {
                reject('recruteur : votre candidature n a pas ete retenue')
            }
        }, 2000)
    })
}

console.log('Après la fonction applyToJob')

/*
function searchGithub(e) {
    e.preventDefault()
    const account = githubForm.elements[0].value
    
    fetch(`https://api.github.com/users/${account}`)
        .then((data) => data.json())

        .then((jsonData) => {
            console.log('jsonData', jsonData)
            githubResult.innerHTML = `<pre><code> ${JSON.stringify(jsonData, null, 4)} </code></pre>`
        })
}
*/

async function searchGithub(e) {
    e.preventDefault()
    const account = githubForm.elements[0].value
    
    const data = await fetch(`https://api.github.com/users/${account}`)

    const jsonData = await data.json()
    
    githubResult.innerHTML = `<pre><code> ${JSON.stringify(jsonData, null, 4)} </code></pre>`
}