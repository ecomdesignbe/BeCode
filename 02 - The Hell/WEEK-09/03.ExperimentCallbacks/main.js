const fakeCallToAnAPI = (url, success, failure) => {
    // Creates a random number of seconds it will take.
    const delay = Math.floor(Math.random() * 4500) + 500;

    // After the random time, it checks if it's greater than 4 seconds, in which case it's a timeout failure. Otherwise, if it's sooner, it returns the data.
    setTimeout(() => {
        if (delay > 4000) {
            failure("Connection Timeout ! :(");
        } else {
            success(`Here is your fake data from ${url}`);
        }
    }, delay);
};

/*

It simulates a call to an api at the url url that takes a random amount of time to be concluded. 
If it's too much time (greater than 4 seconds), we run the callback failure. 
If it's ok, we run de callback success.

fakeCallToAnAPI(
    // The fake url of the fake API
    "api/movies",
    // The callback if it's a success
    (data) => {
        console.log("SUCCESS");
        console.log(data);
    }, // The callback if there was an error
    (data) => {
        console.log("ERROR");
        console.log(data);
    }
);
*/

/* 
Now, let's say that after you called the API and it was successfull, 
you need to call another url to get the info of a particular movie you discovered in your list (let's say the movie with ID 7). 


fakeCallToAnAPI(
    "api/movies",
    // The callback if it's a success
    (msg) => {
        console.log("SUCCESS (1)");
        console.log(msg);
        
        fakeCallToAnAPI(
            "api/movies/7",
            // The callback if it's a success
            (msg) => {
                console.log("SUCCESS (2)");
                console.log(msg);
            }, // The callback if there was an error
            (msg) => {
                console.log("ERROR (2)");
                console.log(msg);
            }
        );
    }, // The callback if there was an error
    (msg) => {
        console.log("ERROR (1)");
        console.log(msg);
    }
);

*/

/*
And then we want to retrieve the pictures of the movie 7 :
*/

fakeCallToAnAPI(
    "api/movies",
    // The callback if it's a success
    (msg) => {
        console.log("SUCCESS (1)");
        console.log(msg);
        
        fakeCallToAnAPI(
        "api/movies/7",
        // The callback if it's a success
        (msg) => {
            console.log("SUCCESS (2)");
            console.log(msg);
            fakeCallToAnAPI(
            "api/pictures/7",
            // The callback if it's a success
            (msg) => {
                console.log("SUCCESS (3)");
                console.log(msg);
            }, // The callback if there was an error
            (msg) => {
                console.log("ERROR (3)");
                console.log(msg);
            }
            );
        }, // The callback if there was an error
        (msg) => {
            console.log("ERROR (2)");
            console.log(msg);
        }
        );
    }, // The callback if there was an error
    (msg) => {
        console.log("ERROR (1)");
        console.log(msg);
    }
);
