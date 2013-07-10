grunt-php-set-constant
======================

```
+---------------------------------------------+
|                                             |
| Current version is Grunt 0.4.0 compatible.  |
| Version 0.0.14+ is Grunt 0.4.0 compatible.  |
|                                             |
| Version 0.0.12 is Grunt 0.3.17 compatible.  |
|                                             |
+---------------------------------------------+

(version 0.0.13 seems to be missing from npm)
```

## Description

Set a constant in a php file to the value indicated.

This is a multi task.

This supports single or double quotes. Heredoc and nowdoc within the `define` are not supported. String constants are
supported as are numbers, constants, and booleans. The quote marks will be maintained. So you can add quotes to
transform from and initial number to a string. But, currently, you cannot transform a string to a number, etc. Grunt
templates are supported in the config `value` field.

You can use one type of quote inside another, but escaping quotes is not supported.

So the following will work:

```php
define('ENV','other "env"');
```

## Usage

Example usage within grunt init:

```javascript
    setPHPConstant: {
        stage: {
            constant    : 'ENV',
            value       : 'stage-<%= grunt.template.today("yyyy-mm-dd") %>',
            file        : 'temp/myfile.php'
        }
    }
```

The above would change the source of `temp/myfile.php`. It would change something like

```php
define('ENV', 'blah');
```

to

```php
define('ENV', 'staging-2012-11-30');
```
(Depending on actual date)

## Installation and Use

To use this package put it as a dependency in your `package.json`, and then run `npm install`.

Then load the grunt task in your `grunt.js`

```javascript
grunt.loadNpmTasks('grunt-php-set-constant');
```

## Tests

Tests can be run from the `grunt-php-set-constant` directory using:

```bash
npm install
npm test
```

You can inspect the sample output created. The tests can be run by either cloning the git repo or from this module's
directory inside the `node_modules` folder of your project.

## Contributors

* [Peter Ajtai](https://github.com/pajtai)
* [Eric Beringer](https://github.com/serialworm)
* [Róbert Oroszi](https://github.com/oroce)

### TODO:

* use regex back references for quotes

### Changelog

* 0.0.13 - 2013 02 22 - Adding Grunt 0.4.0 compatibility
* 0.0.12 - 2013 01 25 - Ability to have an empty string for value. Ability to put one type of quote in another. Issues #1, and #5
* 0.0.11 - 2012 11 29 - Adding grunt templating to value

---

[NPM package](https://npmjs.org/package/grunt-php-set-constant)