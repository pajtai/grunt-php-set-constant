grunt = require('grunt')
path  = require('path')
fs    = require('fs')

output = [
  "define('TEST', 'original value');",
  "define(\"TEST\", 'original value');",
  "define ('TEST',\"original value\");",
]

beforeEach ->
  grunt.task.run('test')

describe "The setting of PHP constants", ->
  it "updates the constant to 'original value'", ->

    path      = grunt.getConfig('setPHPConstant.test.file')
    contents  = grunt.file.read(path)
    linesTested = 0

    lines = contents.replace(/\r\n/g, '\n').split(/\n/)
    lines.forEach (oneLine) ->

      # only tests lines that beging with "define
      if oneLine.match(/^\s*define/)
        expect(oneLine).toEqual(output[linesTested++])
