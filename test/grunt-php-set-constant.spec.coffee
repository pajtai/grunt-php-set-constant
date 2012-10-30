grunt = require('grunt')
fs    = require('fs')

# expected output from the test
output = [
  "define('TEST', 'new result');",
  "define(\"TEST\", 'new result');",
  "define ('TEST',\"new result\");"
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
