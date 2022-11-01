import {Router} from 'express';
import { body,oneOf,validationResult } from 'express-validator';
import prisma from './db';
import { createProduct, deleteProduct, getOneProduct, getProducts } from './handlers/product';
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
router.get('/update',(req,res) =>{

})
router.get('/update:id',
body('title').optional(),
body('body').optional(),
body('status').isIn(['IN_PROGRESS','SHIPED','DEPERCATED']),
body('version').optional(),
    ()=>{

})

router.post('/update',
body('title').exists().isString(),
body('body').exists().isString(),
()=>{

})
// router.put('/update:id',()=>{

// })
// router.delete('/update:id',()=>{

// })

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

export default router;