# tape-readable-seq

## Installation

    npm install tape-readable-seq

## Usage

    var test = require('tape');
    var testSeq = require('tape-readable-seq');
    
    test("sequence test", function(assert) {

        var stream = createStreamToTest();
        var expect = ['foo', 'bar', 'baz'];

        testSeq(stream, expect)(assert);

    });

## API

#### `testSeq(stream, expectedValues, [compare])`

Create and return a test function that will test for equality each corresponding pair of `stream`'s emitted values and `expectedValues`'s elements. An optional comparison function may be supplied; if omitted, this defaults to a `===` equality test.

The returned function should be invoked with a `tape` instance as a parameter.