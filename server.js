// server.js
const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.json({
        message: 'Hello, world!',
      })
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
