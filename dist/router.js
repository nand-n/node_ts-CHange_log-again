"use strict";
exports.__esModule = true;
var express_1 = require("express");
var express_validator_1 = require("express-validator");
var product_1 = require("./handlers/product");
var update_1 = require("./handlers/update");
var middleware_1 = require("./modules/middleware");
var router = (0, express_1.Router)();
//Product 
router.get('/product', product_1.getProducts);
router.get('/product/:id', product_1.getOneProduct);
// router.put('/product:id', body('name').isString() ,handleInputErrors)
router.post('/product', (0, express_validator_1.body)('name').isString(), middleware_1.handleInputErrors, product_1.createProduct);
router.post('/product/:id', function (req, res) { });
router["delete"]('/product/:id', product_1.deleteProduct);
// Update 
router.get('/update', update_1.getUpdate);
router.get('/update/:id', update_1.getOneUpdate);
router.put('/update/:id', (0, express_validator_1.body)('title').optional(), (0, express_validator_1.body)('body').optional(), (0, express_validator_1.body)('status').isIn(['IN_PROGRESS', 'SHIPED', 'DEPERCATED']), (0, express_validator_1.body)('version').optional(), update_1.updateUpdate);
router.post('/update', (0, express_validator_1.body)('title').exists().isString(), (0, express_validator_1.body)('body').exists().isString(), (0, express_validator_1.body)('productId').exists().isString(), update_1.createUpdate);
router["delete"]('/update:id', update_1.deleteUpdate);
// //Update Point
// router.get('/updatepoint',(req,res) =>{
// })
// router.get('/updatepoint:id',()=>{
// })
// router.post('/updatepoint',
// body('name').isString(),
// body('description').isString(),
// body('updateId').exists().toString(),
//     ()=>{
// })
// router.put('/updatepoint:id',
// body('name').optional().isString(),
// body('description').optional().isString(),
//     ()=>{
// })
// router.delete('/updatepoint:id',()=>{
// })
router.use(function (err, req, res, next) {
    console.error(err);
    res.json({ message: 'in route hander ' });
});
exports["default"] = router;
//# sourceMappingURL=router.js.map