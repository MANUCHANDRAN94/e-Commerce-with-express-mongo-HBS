var express = require('express');
var router = express.Router();

/* GET home page. */
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

  res.render('index', { products , admin:true });
});

module.exports = router;
