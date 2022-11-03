import prisma from "../db";
import { comparePassword, createJwt, hashPassword } from "../modules/auth";

export const createNewUser = async (req,res,next) =>{
    try {
        const user =await prisma.user.create(

            {
                data:{
                    username:req.body.username,
                    password:await hashPassword(req.body.password)
                }
            }
        )
        const token = createJwt(user)
    if(!token){
        res.status(401)
        res.json({message:'Error generating the token'})
    }
    res.json({ token })
    } catch (e) {
        e.type='input'
        next(e)
        
    }
    
    
}

export const signin =async(req,res)=>{
    const user = await prisma.user.findUnique({
        where:{
            username:req.body.username
        }
    })

    const isValid =await comparePassword(req.body.password,user.password)
    if(!isValid){
        res.status(401)
        res.json({message:'nope'})
        return 
    }
    const token =createJwt(user)
    res.json({token})
}