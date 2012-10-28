grunt = require('grunt')
path  = require('path')
fs    = require('fs')

# todo: require this from grunt.js
gruntConfig =
  cp:
    test:
      src  : 'test/input'
      dest : 'test/output'

  setPHPConstant:
    test:
      constant: 'TEST'
      value: 'new result'
      file: 'test/output/sample.php'

# In Nodejs 0.8.0, existsSync moved from path -> fs.
existsSync = fs.existsSync || path.existsSync;

# Badass internal grunt lib.
findup = require('../node_modules/grunt/lib/util/findup');

# Where might a locally-installed grunt live?
dir = path.resolve(findup(process.cwd(), 'grunt.js'), '../node_modules/grunt');

# If grunt is installed locally, use it. Otherwise use this grunt.
dir = '../node_modules/lib/grunt' if (!existsSync(dir))

output = [
  "define('TEST', 'new result');",
  "define(\"TEST\", 'new result');",
  "define ('TEST',\"new result\");"
]


describe "The setting of PHP constants", ->

  it "updates the constant to 'original value'", ->
    path      = gruntConfig.setPHPConstant.test.file
    contents  = grunt.file.read(path)
    linesTested = 0

    lines = contents.replace(/\r\n/g, '\n').split(/\n/)
    lines.forEach (oneLine) ->

      # only tests lines that beging with "define
      if oneLine.match(/^\s*define/)
        expect(oneLine).toEqual(output[linesTested++])
