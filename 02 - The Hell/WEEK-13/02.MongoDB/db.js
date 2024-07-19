const { MongoClient } = require('mongodb')

let dbConnection
let uri = 'mongodb+srv://ecomdesign:hnaBiX7QZRodnl1M@cluster0.yciakep.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(uri)
            .then ((client) => {
                dbConnection = client.db()
                return cb()
            })
            .catch (err => {
                console.log(err)
                return cb(err)
            })
    },
    getDb: () => dbConnection
}
