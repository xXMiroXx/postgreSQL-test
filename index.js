const app = require('./src/app.js');

const pool = require('./src/pool');

pool.connect({
    host: 'localhost',
    port: 5432,
    database: 'socialnetwork',
    user: 'amir',
    password: 'E7sassa3b'
}).then(() => { console.log('database connected successfully') }).catch((e) => {
    console.log(`database not connected and thorw an error ${e.message}`);
})

const PORT = 3000;

app().listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});