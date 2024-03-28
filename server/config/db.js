const mongoose = require('mongoose')
require('dotenv').config({ path: 'variables.env' });

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO)
        console.log('The data base has been correctly connected ^^ yippeeee');
        
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectDB;