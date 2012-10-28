grunt-php-set-constant
======================

### Description

Set a constant in a php file to the value indicated.

This is a multi task.

This supports single or double quotes. Heredoc and nowdoc within the `define` are not supported. String constants are
supported.

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

### Installation and Use

To use this package put it as a dependency in your `package.json`, and then run `npm install`.

Then load the grunt task in your `grunt.js`

```javascript
grunt.loadNpmTasks('grunt-php-set-constant');
```

### Tests

Tests can be run by cloning this repo and running `npm install && npm test` or by installing the npm module in your
project and running the tests from there.

To run the tests from your project that uses this module

First install the module as described above with `package.json` and `nmp install`

Then

```bash
# go to the directory of this module in node_modules of your project
cd [your project]/node_module/grunt-set-php-constant

# now install the dev dependencies needed for running the test
npm install

# and finally run the tests
npm test

# you can inspect the sample output which will be in test/output
# the input is in test/input
```

* TODO:
    * support quote mark escaping and constants with quote marks in them
    * support consants other than strings

---

[NPM package](https://npmjs.org/package/grunt-php-set-constant)