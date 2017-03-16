import tinytemplate from '../index';
import test from 'tape-rollup';

test('interpolation', assert => {
  const result = tinytemplate('This is a ${kind} ${type.name}', {
    kind: 'basic',
    type: {
      name: 'template'
    }
  });
  const fallback = tinytemplate('This is a ${kind} ${type.name} with some ${nonexistent}', {
    kind: 'basic',
    type: {
      name: 'template'
    }
  }, 'fallback');

  assert.equal(result, 'This is a basic template');
  assert.equal(fallback, 'This is a basic template with some fallback');
  assert.end();
});
