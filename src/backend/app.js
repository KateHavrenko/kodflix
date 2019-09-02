const express = require('express')
const shows = require('./shows')
const app = express()
const port = process.env.PORT || 3001

pp.use(express.static(path.join(__dirname, './backend/app.js')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './backend/app.js', 'index.html'));
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))