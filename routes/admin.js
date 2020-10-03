var express = require('express');
var router = express.Router();
var productHelpers = require('../helpers/products-helper');

/* GET users listing. */
router.get('/', function (req, res, next) {

  productHelpers.getAllProducts().then(products => {
    console.log(products)
    res.render("admin/view-products", { products, admin: true });
  })
});

router.get('/add-product', function (req, res) {
  res.render("admin/add-product")
})
router.post('/add-product', function (req, res) {
  productHelpers.addProduct(req.body, id => {
    let image = req.files.Image;
    image.mv('./public/product-images/' + id + '.jpg', (err, done) => { //image.mv we get from file upload module
      if (!err)
        res.render('admin/add-product')
      else console.log(err);
    })
  });
})

module.exports = router;
