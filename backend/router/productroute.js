const express = require('express')
const router = express.Router()
const { getallproduct, addproduct, getbyid, DeleteProduct, updateproduct } = require('../controller/productcontroller')

router.post('/add-product', addproduct)
router.get('/get-All-product/:id', getallproduct)
router.get('/get-by-id/', getbyid)
router.delete('/delete-product/:id', DeleteProduct)
router.post('/update-product', updateproduct)
module.exports = router;