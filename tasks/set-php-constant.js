/*global module:false, require:false */
module.exports = function (grunt) {

    'use strict';

    // Node stuff needed for this function
    var path    = require('path'),
        fs      = require('fs'),

        replaceConstant = function (body, value, constant) {

            // we want to match "define('CONST', 'blah');" with any whitespace and any quote type
            // note that heredoc and now doc are NOT covered
            var envRegex = new RegExp("(define\\s*\\(\\s*['\"]" + constant + "['\"]\\s*,\\s*['\"]?)[^'\"]+(['\"]?\\s*\\)\\s*;)"),
                lines = body.replace(/\r\n/g, '\n').split(/\n/),
                output = [];

            lines.forEach(function (oneLine) {
                var theEnv = envRegex.exec(oneLine);

                if (theEnv) {
                    grunt.log.writeln("\nUpdating line:\n" + oneLine);
                    oneLine = theEnv[1] + value + theEnv[2];
                    grunt.log.writeln("\nNew line is:\n" + oneLine);
                }

                output.push(oneLine);

            });

            return output.join('\n');
        };

    /**
     * In your multi task define:
     *      constant: the name of the constant you want to change
     *      value: the value you want to change the constant to
     *      file: the file the constant is defined in - this will modify the file given, so pass in one from the temp dir
     */
    grunt.registerMultiTask('setPHPConstant', "Set a PHP constant in a file", function () {
        var path        = this.data.file,
            contents    = grunt.file.read(path);

        grunt.log.writeln("Searching in file: " + path);

        grunt.file.write(path, replaceConstant(contents, this.data.value, this.data.constant));
    });

};
