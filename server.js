const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
console.log('Loading Home....');
res.send('Hello World');
});

app.listen(port, () => {
console.log('Server is running on port ' + port)
});
