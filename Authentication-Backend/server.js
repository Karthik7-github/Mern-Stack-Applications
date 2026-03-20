const app = require('./src/app');
require('dotenv').config();
const ConnectionDB = require('./src/Database/db');




app.listen(5000,()=>{
    console.log("Server Listening on Port 5000...");
    ConnectionDB();
})