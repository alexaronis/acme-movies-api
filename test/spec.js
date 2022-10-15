const { expect } = require("chai");
const app = require("supertest")(require('../app'));


describe('First test', ()=>{
    it('xyz equals 5', async()=>{
        const xyz = 5;
        expect(xyz).to.equal(5);
    });
    
})

describe('Test GET', ()=>{
    it('GET is working', async()=>{
        const response = await app.get('/');
        expect(response.status).to.equal(200);
        expect(response.text).to.contain('hello');
    });
    
})