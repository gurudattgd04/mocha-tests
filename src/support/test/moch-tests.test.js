import {expect} from "chai";

describe("Mathematical Operations - Test Suite",function() {


    before("before block", function() {
        console.log("Before block executed")
    })

    beforeEach("before block", function () {
        console.log("Before each block executed")
    })

    it("Addition of two numbers", function () {
        this.retries(1)
        let a = 10;
        let b = 20;
        let expected = 0;
        expect(expected).to.be.eq(a+b);
       // setTimeout( 3000)
    })

    it.skip("Multiplication of two numbers", function (){
        let a = 10;
        let b = 20;
        let expected = 200;
        expect(expected).to.be.eq(a*b);
    })

    it('Pending test')

})