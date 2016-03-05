var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var config = require('./config.js');
var userCtrl = require('./controllers/userCtrl.js')
var profileCtrl = require('./controllers/profileCtrl.js')
var app = express();
app.listen(2020, function(){
  console.log('listening on 2020')
});
app.use(bodyParser.json());
app.use(cors());
var corsOptions = {
  origin: 'http://localhost:2020'
};
app.use(cors(corsOptions));
app.use(session({ secret: config.sessionSecret}));
app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getFriends);
