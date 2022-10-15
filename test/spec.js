const { expect } = require("chai");
const app = require("supertest")(require('../app'));
const { syncAndSeed, models: { Actor, Movie, Role } } = require('../db') 


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

describe('Test GET', ()=>{
    it('GET is working', async()=>{
        const response = await app.get('/');
        expect(response.status).to.equal(200);
        expect(response.text).to.contain('hello');
    });
    
});

describe('db data', ()=>{
    beforeEach(async()=>{
        await syncAndSeed();
    });
})