var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  let products =[{
    name:"Mobile1",
    catagory:"mobile",
    description:"it is a mobile",
    image:"https://static.digit.in/product/thumb_160001_product_td_300.jpeg"
  },
  {
    name:"Mobile2",
    catagory:"mobile",
    description:"it is a mobile",
    image:"https://static.digit.in/product/thumb_160001_product_td_300.jpeg"
  },
  {
    name:"Mobile3",
    catagory:"mobile",
    description:"it is a mobile",
    image:"https://static.digit.in/product/thumb_160001_product_td_300.jpeg"
  },
  {
    name:"Mobile4",
    catagory:"mobile",
    description:"it is a mobile",
    image:"https://static.digit.in/product/thumb_160001_product_td_300.jpeg"
  }]

  res.render("admin/view-products",{products ,admin:true});
});

router.get('/add-product', function(req, res) {
  res.render("admin/add-product" )
})
router.post('/add-product', function(req, res) {
  console.log(req.body);
  console.log(req.files.Image)
  // res.render("admin/add-product" )
})

module.exports = router;
