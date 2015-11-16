define(function(require){
    //just test if we can requrie a module from scripts/
    var router = require("scripts/navigation/router");
    
    // Describe allows you to create a group of tests.
    describe('Fake test', function () {
        // it() is the test.
        it('Should be 2.', function () {
            // Chai provides a nice interface for assertions.
            chai.assert.equal(2, 2);
        });
        it('Router var Should not be null(we can require scripts from "scripts/".)', function () {
            // Chai provides a nice interface for assertions.
            chai.assert.isDefined(router,"router is defined");
        });
    });
});