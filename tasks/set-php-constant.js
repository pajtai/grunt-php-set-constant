/*global module:false, require:false */
module.exports = function (grunt) {

    'use strict';

    // Node stuff needed for this function
    var path    = require('path'),
        fs      = require('fs'),

        updateLine = function(oneLine, theEnv, value) {
            grunt.log.writeln("\nUpdating line:\n" + oneLine);
            oneLine = theEnv[1] + value + theEnv[2];
            grunt.log.writeln("\nNew line is:\n" + oneLine);
            return oneLine;
        },

        replaceConstant = function (body, value, constant) {

            // we want to match "define('CONST', 'blah');" with any whitespace and any quote type
            // note that heredoc and now doc are NOT covered

            // Quote matching possiblities
            // JS doesn't support look backs, not sure if there is a more elegant solution (maybe with capture groups?)
            var envRegexSLSR = new RegExp("(define\\s*\\(\\s*[']" + constant + "[']\\s*,\\s*['])[^']*([']\\s*\\)\\s*;)"),
                envRegexSLDR = new RegExp("(define\\s*\\(\\s*[']" + constant + "[']\\s*,\\s*[\"])[^\"]*([\"]\\s*\\)\\s*;)"),
                envRegexDLDR = new RegExp("(define\\s*\\(\\s*[\"]" + constant + "[\"]\\s*,\\s*[\"])[^\"]*([\"]\\s*\\)\\s*;)"),
                envRegexDLSR = new RegExp("(define\\s*\\(\\s*[\"]" + constant + "[\"]\\s*,\\s*['])[^']*([']\\s*\\)\\s*;)"),
                envRegexSLNR = new RegExp("(define\\s*\\(\\s*[']" + constant + "[']\\s*,\\s*)[^\\s]+(\\s*\\)\\s*;)"),
                envRegexDLNR = new RegExp("(define\\s*\\(\\s*[\"]" + constant + "[\"]\\s*,\\s*)[^\\s]+(\\s*\\)\\s*;)"),
                lines = body.replace(/\r\n/g, '\n').split(/\n/),
                output = [];

            lines.forEach(function (oneLine) {
                // If a regex matches, that's it, we stop

                var theEnv =    envRegexSLSR.exec(oneLine) ||
                                envRegexSLDR.exec(oneLine) ||
                                envRegexDLDR.exec(oneLine) ||
                                envRegexDLSR.exec(oneLine) ||
                                envRegexSLNR.exec(oneLine) ||
                                envRegexDLNR.exec(oneLine);


                if (theEnv) {
                    oneLine = updateLine(oneLine, theEnv, value);
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
            contents    = grunt.file.read(path),
            value;

        grunt.log.writeln("Searching in file: " + path);

        // Run grunt templating on value if it is a string
        value = ('string' === typeof this.data.value) ? grunt.template.process(this.data.value) : this.data.value;

        grunt.file.write(path, replaceConstant(contents, value, this.data.constant));
    });

};
