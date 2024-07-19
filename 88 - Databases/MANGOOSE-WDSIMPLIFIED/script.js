const mongoose = require('mongoose')
const User = require('./User')

mongoose.connect('mongodb://localhost/testdb')

run()

async function run() {
    try {
        const user = await User.findOne({name : "Melanie", email: "test@test.com"})
        // const user = await User.findOne({name : "Melanie"})
        /*
        const user = await User.where("age")
            .gt("12")
            .where("name")
            .equals("Melanie")
            .populate("bestFriend")
            .limit(1)
        
        */
        /*
        const user = await User.create({ 
            name : "Steve", 
            age : 44,
            email : "test@test.com",
            hobbies: ["Football", "Gaming"],
            adress: {
                street: "Zeypstr",
                city: "Brussels"
            }
        })*/
        console.log(user)
        await user.save()
        console.log(user)
        // console.log(user.namedEmail)
        // user.sayHi()

    } catch (e) {

        console.log(e.message)

    }
}

