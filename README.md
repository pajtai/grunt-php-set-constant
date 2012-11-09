grunt-php-set-constant
======================

## Description

Set a constant in a php file to the value indicated.

This is a multi task.

This supports single or double quotes. Heredoc and nowdoc within the `define` are not supported. String constants are
supported.

## Usage

Example usage within grunt init:

```javascript
    setPHPConstant: {
        stage: {
            constant    : 'ENV',
            value       : 'staging',
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

* TODO:
    * support quote mark escaping and constants with quote marks in them

---

[NPM package](https://npmjs.org/package/grunt-php-set-constant)
