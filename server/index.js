const express = require('express')
const connectDB = require('./config/db')

//Lets create the server
const app = express();

//connect to the db
connectDB();

app.use(express.json());
app.use('/api/users', require('./routes/users') ); 

app.listen(4000), () =>{
    console.log('el servidor esta corriendo papu')
}