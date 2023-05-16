import test from 'ava';
import Main from '../lib/8583.js';

test('getPds() should return type of msg', t => {
  let data = {
    0: '1644',
    24: '697',
    48: '010502500122120300000024533011010122001P',
    71: '00000001'
  };
  const expected = {
    '0105': '0012212030000002453301101',
    '0122': 'P'
  };

  const message = new Main(data);
  t.deepEqual(message.getPds(), expected);
});