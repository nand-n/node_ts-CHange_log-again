import * as user from '../user'

describe('user handler',()=>{
    it('it should create a new  user', async()=>{
        const req = {body: {usename:'hello' , password:'hi'}}
        const res = {json({token}) {
            expect(token).toBeTruthy()
        }}



       await user.createNewUser(req,res, ()=>{

        })
    })
})