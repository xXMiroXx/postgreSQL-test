const express = require('express');
const PORT = 3000;
const app = express();
app.get("/", (req, res, next) => {
    res.send('<h1>Hello</h1>');
})
app.listen(PORT, () => {
    console.log('Server running on port' + PORT);
})