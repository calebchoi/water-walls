const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '../../client'));
app.use('/', router);

let port = 8000;

app.listen(port, () => {
  console.log('listening to port ' + port);
});
