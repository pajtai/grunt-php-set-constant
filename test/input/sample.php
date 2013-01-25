<?php
/**
 * grunt-php-set-constant: Test Cases
 */
define('TEST','');                  // (String) Both single quotes, empty string
define("TEST","");                  // (String) Both double quotes, empty string
define('TEST','like "totally"');    // (String) Both single quotes, use of double quote on right
define('TEST',"like 'totally'");    // (String) Both single quotes, use of singnle quote on right
define('TEST','original value');    // (String) Both single quotes, no space after comma
define('TEST', 'original value');   // (String) Both single quotes, space after comma
define ('TEST','original value');   // (String) Space after define, both single quotes, no space after comma
define ('TEST', 'original value');  // (String) Space after define, both single quotes, space after comma
define("TEST","original value");    // (String) Both double quotes, no space after comma
define("TEST", "original value");   // (String) Both double quotes, space after comma
define ("TEST","original value");   // (String) Space after define, both double quotes, no space after comma
define ("TEST", "original value");  // (String) Space after define, both double quotes, space after comma
define("TEST",'original value');    // (String) Left double quotes, no space after comma
define("TEST", 'original value');   // (String) Left double quotes, space after comma
define ("TEST",'original value');   // (String) Space after define, left double quotes, no space after comma
define ("TEST", 'original value');  // (String) Space after define, left double quotes, space after comma
define('TEST',"original value");    // (String) Right double quotes, no space after comma
define('TEST', "original value");   // (String) Right double quotes, space after comma
define ('TEST',"original value");   // (String) Space after define, right double quotes, no space after comma
define ('TEST', "original value");  // (String) Space after define, right double quotes, space after comma
define('TEST2',12345);              // (Number) Left single quotes, no space after comma
define('TEST2', 12345);             // (Number) Left single quotes, space after comma
define ('TEST2',12345);             // (Number) Space after define, left single quotes, no space after comma
define ('TEST2', 12345);            // (Number) Space after define, left single quotes, space after comma
define("TEST2",12345);              // (Number) Left double quotes, no space after comma
define("TEST2", 12345);             // (Number) Left double quotes, space after comma
define ("TEST2",12345);             // (Number) Space after define, left double quotes, no space after comma
define ("TEST2", 12345);            // (Number) Space after define, left double quotes, space after comma
define('TEST3',constant_value);     // (Constant) Left single quotes, no space after comma
define('TEST3', constant_value);    // (Constant) Left single quotes, space after comma
define ('TEST3',constant_value);    // (Constant) Space after define, left single quotes, no space after comma
define ('TEST3', constant_value);   // (Constant) Space after define, left single quotes, space after comma
define("TEST3",constant_value);     // (Constant) Left double quotes, no space after comma
define("TEST3", constant_value);    // (Constant) Left double quotes, space after comma
define ("TEST3",constant_value);    // (Constant) Space afer define, left double quotes, no space after comma
define ("TEST3", constant_value);   // (Constant) Space after define, left double quotes, space after comma
define ("TEST4", constant_value);   // template test
define ("TEST4", 12345);            // template test
define ("TEST4", "test");           // template test
define ("TEST4", 'test');           // template test