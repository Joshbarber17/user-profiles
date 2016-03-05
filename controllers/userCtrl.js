var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];
module.exports = {
  login: function (req, res, next) {
    var found = false
    for (var i = 0; i < users.length; i++) {
      if (req.body.name === users[i].name) {
        if (req.body.password === users[i].password) {
          req.session.currentUser = users[i];
          found = true;
          res.send({userFound: true});
        }
      }
      else if ((req.body.name !== users[i].name) && (i = users.length - 1)) {
        if (!found)res.send({ userFound: false});
      }
    }
  }
}
