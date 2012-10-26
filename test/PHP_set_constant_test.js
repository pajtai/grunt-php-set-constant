var grunt = require('grunt');

exports['revPackage'] = {

    setUp: function(done) {
        // setup here
        done();
    },

    'helper': function(test) {
        test.expect(0);
        // TODO: implement tests
        //test.equal(grunt.helper('revPackage'), 'revision', 'should test for file names');
        test.done();
    }
};