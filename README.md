# tape-describe

Describe blocks for your [tape](https://github.com/substack/tape) tests.

tape-describe is a decorator for tape that prefixes each test name with a given description.

Please note: tape-describe _does not_ attempt to produce nested TAP output.

## Install

```
npm install tape-describe --save-dev
```

Requires `tape` to be installed.

## Usage

tape-describe can be used with or without a callback depending on your preference.

Both of the following examples will yield the following TAP output:

```
# foo: bar
ok 1 should be truthy
```

### With callback

This approach should be familiar to those coming from spec-based testing tools.

```js
const describe = require('tape-describe');

describe('foo', test => {
    test('bar', t => {
        t.assert(true);
        t.end();
    });
});
```

### Without callback

This approach avoids nesting, making it trivial to remove tape-describe if you change your mind.

```js
const describe = require('tape-describe');
const test = describe('foo');

test('bar', t => {
    t.assert(true);
    t.end();
});
```
