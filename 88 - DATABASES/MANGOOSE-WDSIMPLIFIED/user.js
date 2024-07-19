const mongoose = require('mongoose')
const adressSchema = new mongoose.Schema({
    street : String,
    city : String
})

const userSchema = new mongoose.Schema({})

userSchema.methods.sayHi = function () {
    console.log(`Hi. My name is ${this.name}`)
}

userSchema.statics.findByName = function(name) {
    return this.find({name : new RegExp(name, 'i')})
}

userSchema.query.byName = function(name) {
    return this.where({name : new RegExp(name, 'i')})
}

userSchema.virtual('namedEmail').get(function() {
    return `${this.name} <${this.email}>`
})

userSchema.pre('save', function(next) {
    this.updateAt = Date.now()
    throw new Error("fail save")
})

userSchema.post('save', function(doc, next) {
    doc.sayHi()
    next()
})



/*
const userSchema = new mongoose.Schema({
    name : String,
    age: {
        type : Number,
        min : 1,
        max : 100,
        validate: {
            validator: v => v % 2 === 0,
            mesage : props => `${props.value} is not an even number`
        }
    },    
    email: {
        type : String,
        minLength : 10,
        required : true,
        lowercase: true
    },
    createdAt : {
        type : Date,
        immutable : true,
        default : () => Date.now(),
    },
    updateAt :{
        type : Date,
        default : () => Date.now(),
    },
    bestFriend : {
        type : mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    hobbies : [String],
    adress: adressSchema 
}) 
*/

module.exports = mongoose.model('User', userSchema)