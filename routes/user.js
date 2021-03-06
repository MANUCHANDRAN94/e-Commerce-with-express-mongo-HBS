var express = require('express');
var router = express.Router();
var productHelpers = require('../helpers/products-helper');
var userHelpers = require('../helpers/user-helper');

/* GET home page. */
router.get('/', function (req, res, next) {
  let user = req.session.user;
  console.log(user);
  productHelpers.getAllProducts().then(products => {
    res.render("user/view-products", { products, user });
  })
});

router.get('/login', function (req, res) {
  res.render('user/login')
})
router.post('/login', function (req, res) {
  userHelpers.doLogin(req.body).then(response => {
    if (response.status) {
      req.session.loggedIn = true;
      req.session.user = response.user;
      res.redirect('/');
    } else {
      res.redirect('/login');
    }
  })
})
router.get('/signup', (req, res) => {
  res.render('user/signup');
})
router.post('/signup', (req, res) => {
  userHelpers.doSignup(req.body).then(response => {
  })
})
router.get('/logout' , (req, res)=> {
  req.session.destroy();
  res.redirect('/');
})

module.exports = router;
