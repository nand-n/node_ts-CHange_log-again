import {Router} from 'express';

const router = Router();
//Product 
router.get('/product',(req,res) =>{
    // res.send(200)
    res.json({message:'hellow Hellow '})
})
router.get('/product:id',()=>{

})
router.put('/product:id',()=>{

})
router.post('/product:id',()=>{

})
router.delete('/product:id',()=>{

})

//Update 
router.get('/update',(req,res) =>{

})
router.get('/update:id',()=>{

})
router.put('/update:id',()=>{

})
router.post('/update',()=>{

})
router.delete('/update:id',()=>{

})

//Update Point
router.get('/updatepoint',(req,res) =>{

})
router.get('/updatepoint:id',()=>{

})
router.put('/updatepoint:id',()=>{

})
router.post('/updatepoint',()=>{

})
router.delete('/updatepoint:id',()=>{

})

export default router;