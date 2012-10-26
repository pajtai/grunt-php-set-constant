/*global module:false */

module.exports = function (grunt) {
    'use strict';

    var gruntConfig = {
        setPHPConstant: {
            test1: {
                constant: 'TEST1',
                value: 'new result',
                file: 'example/sample.php'
            }
        }
    };

    grunt.initConfig(gruntConfig);

    grunt.loadTasks('./tasks');

    grunt.registerTask('default', 'setPHPConstant');
};