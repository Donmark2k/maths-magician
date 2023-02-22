import operate from '../logic/operate';

describe('Testing operations functions', () => {
  test('Adding 5 to 5', () => {
    expect(operate(5, 5, '+')).toEqual('10');
  });
  test('Multiply 5 by 5', () => {
    expect(operate(5, 5, 'x')).toBe('25');
  });
  test('Subtract 2 from 20', () => {
    expect(operate(20, 2, '-')).toBe('18');
  });
  test(' 18 divide by 2', () => {
    expect(operate(18, 2, '÷')).toEqual('9');
  });
});
