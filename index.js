module.exports = function(stream, expect, compare) {
    compare = compare || function(l,r) { return l === r; }
    return function(assert) {
        var ix = 0;
        assert.plan(expect.length);
        stream.on('data', function(thing) {
            assert.ok(compare(thing, expect[ix++]));
        });
    }
}