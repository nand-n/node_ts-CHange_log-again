import express from 'express';

const app=express();

app.get('/',(req,res)=>{
    console.log('hellow from express');
    res.status(200).json({ message:'hellow '})
})

export default app