import {Router} from 'express';
import { body,oneOf,validationResult } from 'express-validator';
import prisma from './db';
import { createProduct, deleteProduct, getOneProduct, getProducts } from './handlers/product';
import { createUpdate, deleteUpdate, getOneUpdate, getUpdate, updateUpdate } from './handlers/update';
import { handleInputErrors } from './modules/middleware';

const router = Router();
//Product 
router.get('/product',getProducts)

router.get('/product/:id',getOneProduct)

// router.put('/product:id', body('name').isString() ,handleInputErrors)


router.post('/product',body('name').isString(),handleInputErrors,createProduct)

router.post('/product/:id',(req,res)=>{})

router.delete('/product/:id',deleteProduct)

// Update 
router.get('/update',getUpdate)
router.get('/update/:id',getOneUpdate)

router.put('/update/:id',
body('title').optional(),
body('body').optional(),
body('status').isIn(['IN_PROGRESS','SHIPED','DEPERCATED']),
body('version').optional(),
updateUpdate
)

router.post('/update',
body('title').exists().isString(),
body('body').exists().isString(),
body('productId').exists().isString(),
createUpdate
)

router.delete('/update:id',deleteUpdate)

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
router.use((err,req,res,next)=>{
    console.error(err);
    res.json({message:'in route hander '})
    
})

export default router;