// import  app  from '../server'
import * as app from '../server'
import supertest from 'supertest'

describe('GET /',()=>{
    it('should send back some data',async ()=>{
        const res =await supertest(app)
        .get('/')
 
        expect(res.body.status).toBe('200')
    })
})