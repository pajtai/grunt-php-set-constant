/*global module:false */

module.exports = function (grunt) {
    'use strict';

    var gruntConfig = {

        cp: {
            test: {
               src  : 'test/sampleInput.php',
               dest : 'test/sampleOutput.php'
            }
        },

        setPHPConstant: {
            test: {
                constant: 'TEST',
                value: 'new result',
                file: 'test/sampleOutput.php'
            }
        }
    };

    grunt.initConfig(gruntConfig);

    grunt.loadTasks('./tasks');

    grunt.registerTask('test', 'cp setPHPConstant');
};