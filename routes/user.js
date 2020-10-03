var express = require('express');
var router = express.Router();
var productHelpers = require('../helpers/products-helper');


/* GET home page. */
router.get('/', function(req, res, next) {

  productHelpers.getAllProducts().then(products => {
    console.log(products)
    res.render("user/view-products", { products, admin: true });
  })
});

module.exports = router;
