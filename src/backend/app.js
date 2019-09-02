// const express = require('express');
// const path = require('path');
// const app = express();
// const port = process.env.PORT || 3001;
// const shows = require('./shows');
// app.get('/rest/shows', (req, res) => res.send(shows()));
// app.listen(3001, () => console.log('Example app listening on port 3000!'));
// app.use(express.static(path.join(__dirname, '../../build')));
// app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname, '../../build', 'index.html'));
// });


// app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;
const getShows = require('./shows');
app.use(express.static(path.join(__dirname, '../../build')));
// Handle React routing, return all requests to React app
app.get('/rest/shows', (req, res) => res.send(getShows()));
//app.listen(3001, () => console.log('Example app listening on port 3000!'));
// Serve any static files
app.get('*', function (req, res) {
   res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});
app.listen(port, () => console.log(`Listening on port ${port}`));