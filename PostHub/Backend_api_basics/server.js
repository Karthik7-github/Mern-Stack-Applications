const app = require('./src/app');
const Connection = require('./src/DB/db');

async function startServer() {
    await Connection();

    app.listen(2000, () => {
        console.log("Server listening on port 2000");
    });
}

startServer();