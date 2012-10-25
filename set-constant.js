/*global module:false, require:false */
module.exports = function (grunt) {

    'use strict';

    // Node stuff needed for this function
    var path    = require('path'),
        fs      = require('fs'),

        replaceEnv = function (body, value, constant) {

            // we want to match "define('EVN', 'blah');"
            var envRegex = new RegExp("(define\\(['\"]" + constant + "['\"],\\s*['\"])[^'\"]+(['\"]\\);)"),
                lines = body.replace(/\r\n/g, '\n').split(/\n/),
                output = [];

            lines.forEach(function (oneLine) {
                var theEnv = envRegex.exec(oneLine);

                if (theEnv) {
                    grunt.log.writeln("Updating line:\n" + oneLine);
                    oneLine = theEnv[1] + value + theEnv[2];
                    grunt.log.writeln("New line is:\n" + oneLine);
                }

                output.push(oneLine);

            });

            return output.join('\n');
        };

    /**
     * In your multi task define:
     *      constant: the name of the constant you want to change
     *      value: the value you want to change the constant to
     *      file: the file the constant is defined in
     */
    grunt.registerMultiTask('setConstant', "Set a PHP constant in a file", function () {
        var contents,
            path;

        // You must define your temp directory
        grunt.config.requires('project.dirs.temp');

        path = grunt.config('project.dirs.temp') + this.data.file;
        contents = grunt.file.read(path);

        grunt.log.writeln("Environment is: " + this.data.env);

        grunt.file.write(path, replaceEnv(contents, this.data.value, this.data.constant));
    });

};