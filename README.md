grunt-set-constant
==================

Set a constant in a php file to the value indicated.

Example usage within grunt init:

```javascript
    setConstant: {
        stage: {
            constant    : 'ENV',
            value       : 'staging',
            file        : 'temp/myfile.php'
        }
    }
```