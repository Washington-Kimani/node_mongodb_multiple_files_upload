const mongoose = require('mongoose');
require('dotenv').config()

const Connect = async()=>{
    try {
        // MongoDb Cloud Connection
        mongoose.connect(process.env.dbUrl,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(()=>{
            console.log(`Mongodb connected`);
        })
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = Connect()