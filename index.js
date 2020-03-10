const express = require('express');
const shortid = require('shortid');
const server = express();

let users = [];

server.use(express.json());

server.get('/hello', (req, res) => {
    res.status(200).json({ hello: "Web 27" })
});

const PORT = 5000;
server.listen(PORT, () =>
console.log(`\n  ** API on http://localhost:${PORT} **\n`)
);
//not working
