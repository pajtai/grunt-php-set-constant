<?php
/**
 * grunt-php-set-constant: Test Cases
 */
define('TEST','original value');  // (String) Both single quotes, no space after comma
define('TEST', 'original value'); // (String) Both single quotes, space after comma
define ('TEST','original value'); // (String) Space after define, both single quotes, no space after comma
define ('TEST', 'original value');// (String) Space after define, both single quotes, space after comma
define("TEST","original value");  // (String) Both double quotes, no space after comma
define("TEST", "original value"); // (String) Both double quotes, space after comma
define ("TEST","original value"); // (String) Space after define, both double quotes, no space after comma
define ("TEST", "original value");// (String) Space after define, both double quotes, space after comma
define("TEST",'original value');  // (String) Left double quotes, no space after comma
define("TEST", 'original value'); // (String) Left double quotes, space after comma
define ("TEST",'original value'); // (String) Space after define, left double quotes, no space after comma
define ("TEST", 'original value');// (String) Space after define, left double quotes, space after comma
define('TEST',"original value");  // (String) Right double quotes, no space after comma
define('TEST', "original value"); // (String) Right double quotes, space after comma
define ('TEST',"original value"); // (String) Space after define, right double quotes, no space after comma
define ('TEST', "original value");// (String) Space after define, right double quotes, space after comma
define('TEST',12345);             // (Number) Left single quotes, no space after comma
define('TEST', 12345);            // (Number) Left single quotes, space after comma
define ('TEST',12345);            // (Number) Space after define, left single quotes, no space after comma
define ('TEST', 12345);           // (Number) Space after define, left single quotes, space after comma
define("TEST",12345);             // (Number) Left double quotes, no space after comma
define("TEST", 12345);            // (Number) Left double quotes, space after comma
define ("TEST",12345);            // (Number) Space after define, left double quotes, no space after comma
define ("TEST", 12345);           // (Number) Space after define, left double quotes, space after comma
define('TEST',constant_value);    // (Constant) Left single quotes, no space after comma
define('TEST', constant_value);   // (Constant) Left single quotes, space after comma
define ('TEST',constant_value);   // (Constant) Space after define, left single quotes, no space after comma
define ('TEST', constant_value);  // (Constant) Space after define, left single quotes, space after comma
define("TEST",constant_value);    // (Constant) Left double quotes, no space after comma
define("TEST", constant_value);   // (Constant) Left double quotes, space after comma
define ("TEST",constant_value);   // (Constant) Space afer define, left double quotes, no space after comma
define ("TEST", constant_value);  // (Constant) Space after define, left double quotes, space after comma
