/* 
Practically, what we've done is something like this :

We called api/movies
If it's a success, we receive then the response as parameter of the callback
If it's failure, we go directly to the catch callback

Let's say it's a success..

We received back the list of movies (it's where there is the SUCCESS (1) log)
From this list, we want the movie with ID 7. So we called the API one more time. (returning a promise in the callback)
Same thing: we got back the infos of the movie 7
And then we called the api one more time to get the pictures of this movie.
*/

const fakeCallToAnAPIPromises = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        
        setTimeout(() => {
            if (delay > 4000) {
                reject("Connection Timeout ! :(");
            } else {
                resolve(`Here is your fake data from ${url}`);
            }
        } , delay);
    });
};

fakeCallToAnAPIPromises("api/movies")
    .then((data) => {
        console.log("SUCCESS (1)");
        console.log(data);
        return fakeCallToAnAPIPromises("api/movies/7");
    })

    .then((data) => {
        console.log("SUCCESS (2)");
        console.log(data);
        return fakeCallToAnAPIPromises("api/pictures/7");
    })

    .then((data) => {
        console.log("SUCCESS (3)");
        console.log(data);
    })

    .catch((error) => {
        console.log(error);
});


/* DECLARATION */

const calcul = (num1, num2) => {
    return new Promise((resolve, reject) => {
        //...

        const result = num1 * num2

        if(result < 1000) {
            resolve(result)
        } else {
            reject("resultat trop petit")
        }
    })
}

/* UTILISATION */

calcul(300,900).then((result) => {
    console.log('Resultat:' + result)
}).catch((err) => {
    console.log('Error ' + err)
})