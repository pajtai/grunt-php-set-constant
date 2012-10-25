grunt-set-constant
==================

Set a constant in a php file to the value indicated.

The file that will be altered will be in `grunt.config.project.dirs.temp`.

Example usage within grunt init:

```javascript
    project: {
        dirs: {
            temp: 'temporaryDirectory/'
        }
    },

    setConstant: {
        stage: {
            constant    : 'ENV',
            value       : 'staging',
            file        : 'sample/myfile.php'
        }
    }
```