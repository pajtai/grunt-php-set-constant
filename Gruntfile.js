/*global module:false */

module.exports = function (grunt) {
    'use strict';

    var gruntConfig = {

        copy: {
            test: {
                files: [
                    {src  : ['test/input'], dest : 'test/output'}
                ]
            }
        },

        setPHPConstant: {
            test: {
                constant: 'TEST',
                value: 'new result',
                file: 'test/output/sample.php'
            },
            test2: {
                constant: 'TEST2',
                value: 67890,
                file: 'test/output/sample.php'
            },
            test3: {
                constant: 'TEST3',
                value: 'new_constant_value',
                file: 'test/output/sample.php'
            },
            test4: {
                constant: 'TEST4',
                value: '<%= copy.test.files[0].dest %>',
                file: 'test/output/sample.php'
            }
        }
    };

    grunt.initConfig(gruntConfig);

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-bump');

    grunt.loadTasks('./tasks');

    grunt.registerTask('test', ['copy', 'setPHPConstant']);
};
