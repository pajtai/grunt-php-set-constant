grunt-php-set-constant
======================

## Description

Set a constant in a php file to the value indicated.

This is a multi task.

This supports single or double quotes. Heredoc and nowdoc within the `define` are not supported. String constants are
supported as are numbers, constants, and booleans. The quote marks will be maintained. So you can add quotes to
transform from and initial number to a string. But, currently, you cannot transform a string to a number, etc. Grunt
templates are supported in the config `value` field.

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
define('ENV', 'staging');
```

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

* 0.0.11 - 2012 11 29 - Adding grunt templating to value

---

[NPM package](https://npmjs.org/package/grunt-php-set-constant)