import test from 'ava'

import { Scanner } from './scanner'

test('peek', t => {
  const s = new Scanner('abc');
  t.is(s.peek(), 'a');
  t.is(s.cursor, 0);

  // repeated peeking should not change anything
  t.is(s.peek(), 'a')
})

test('pop', t => {
  const s = new Scanner('abc');
  t.is(s.cursor, 0);
  t.is(s.pop(), 'a');
  t.is(s.cursor, 1);
  t.is(s.pop(), 'b');
  t.is(s.cursor, 2);
  t.is(s.pop(), 'c');
  t.is(s.cursor, 3);
  t.is(s.pop(), '');
})

test('regex aka scan', t => {
  const s = new Scanner('abc');
  t.is(s.scan(/a.c/g), 'abc');
  t.is(s.cursor, 3)
})