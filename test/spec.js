const { expect } = require("chai");



describe('First test', ()=>{
    it('xyz equals 5', async()=>{
        const xyz = 5
        expect(xyz).to.equal(5);
    })
    
})