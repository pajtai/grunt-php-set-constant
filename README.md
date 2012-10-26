grunt-php-set-constant
======================

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

To use this package put it as a dependency in your `package.json`, and then run `npm install`.

Then load the grunt task in your `grunt.js`

```javascript
grunt.loadNpmTasks('grunt-php-set-constant');
```

* TODO:
    * support constants other than strings
    * implement tests

---

[NPM package](https://npmjs.org/package/grunt-php-set-constant)