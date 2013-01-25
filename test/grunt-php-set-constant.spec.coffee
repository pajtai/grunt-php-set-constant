grunt = require('grunt')
fs    = require('fs')

# expected output from the test
output = [
  "define('TEST','new result');",              # (String) Both single quotes, empty string
  "define(\"TEST\",\"new result\");",          # (String) Both double quotes, empty string
  "define('TEST','new result');",              # (String) Both single quotes, use of double quote on right
  "define('TEST',\"new result\");",            # (String) Both single quotes, use of singnle quote on right
  "define('TEST','new result');",              # (String) Both single quotes, no space after comma
  "define('TEST', 'new result');",             # (String) Both single quotes, space after comma
  "define ('TEST','new result');",             # (String) Space after define, both single quotes, no space after comma
  "define ('TEST', 'new result');",            # (String) Space after define, both single quotes, space after comma
  "define(\"TEST\",\"new result\");",          # (String) Both double quotes, no space after comma
  "define(\"TEST\", \"new result\");",         # (String) Both double quotes, space after comma
  "define (\"TEST\",\"new result\");",         # (String) Space after define, both double quotes, no space after comma
  "define (\"TEST\", \"new result\");",        # (String) Space after define, both double quotes, space after comma
  "define(\"TEST\",'new result');",            # (String) Left double quotes, no space after comma
  "define(\"TEST\", 'new result');",           # (String) Left double quotes, space after comma
  "define (\"TEST\",'new result');",           # (String) Space after define, left double quotes, no space after comma
  "define (\"TEST\", 'new result');",          # (String) Space after define, left double quotes, space after comma
  "define('TEST',\"new result\");",            # (String) Right double quotes, no space after comma
  "define('TEST', \"new result\");",           # (String) Right double quotes, space after comma
  "define ('TEST',\"new result\");",           # (String) Space after define, right double quotes, no space after comma
  "define ('TEST', \"new result\");",          # (String) Space after define, right double quotes, space after comma
  "define('TEST2',67890);",                    # (Number) Left single quotes, no space after comma
  "define('TEST2', 67890);",                   # (Number) Left single quotes, space after comma
  "define ('TEST2',67890);",                   # (Number) Space after define, left single quotes, no space after comma
  "define ('TEST2', 67890);",                  # (Number) Space after define, left single quotes, space after comma
  "define(\"TEST2\",67890);",                  # (Number) Left double quotes, no space after comma
  "define(\"TEST2\", 67890);",                 # (Number) Left double quotes, space after comma
  "define (\"TEST2\",67890);",                 # (Number) Space after define, left double quotes, no space after comma
  "define (\"TEST2\", 67890);",                # (Number) Space after define, left double quotes, space after comma
  "define('TEST3',new_constant_value);",       # (Constant) Left single quotes, no space after comma
  "define('TEST3', new_constant_value);",      # (Constant) Left single quotes, space after comma
  "define ('TEST3',new_constant_value);",      # (Constant) Space after define, left single quotes, no space after comm
  "define ('TEST3', new_constant_value);",     # (Constant) Space after define, left single quotes, space after comma
  "define(\"TEST3\",new_constant_value);",     # (Constant) Left double quotes, no space after comma
  "define(\"TEST3\", new_constant_value);",    # (Constant) Left double quotes, space after comma
  "define (\"TEST3\",new_constant_value);",    # (Constant) Space afer define, left double quotes, no space after comma
  "define (\"TEST3\", new_constant_value);",   # (Constant) Space after define, left double quotes, space after comma
  "define (\"TEST4\", test/output);",          # template test
  "define (\"TEST4\", test/output);",          # template test
  "define (\"TEST4\", \"test/output\");",      # template test
  "define (\"TEST4\", 'test/output');"         # template test
]

describe "The setting of PHP constants", ->

  it "updates the constant to 'original value'", ->
    path      = 'test/output/sample.php'
    contents  = grunt.file.read(path)
    linesTested = 0

    lines = contents.replace(/\r\n/g, '\n').split(/\n/)
    lines.forEach (oneLine) ->

      # only tests lines that beging with "define
      if oneLine.match(/^\s*define/)
        expect(oneLine).toEqual(output[linesTested++])
