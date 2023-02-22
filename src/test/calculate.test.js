import calculate from '../logic/calculate'

describe('Testing calculate.js', () => {
  test('should return 0', () => {
    const obj = {
      total: 3,
      next: 6,
      operation: '+',
    };
    const buttonName = 'AC';
    expect(calculate(obj, buttonName)).toEqual({
      total: 0,
      next: null,
      operation: null,
    });
  });

  test('should return the multiplication of numbers', () => {
    const obj = {
      total: 3,
      next: 6,
      operation: 'x',
    };
    const buttonName = '=';
    expect(calculate(obj, buttonName)).toEqual({
      total: '18',
      next: null,
      operation: null,
    });
  });

  test('should return the subtraction of numbers', () => {
    const obj = {
      total: 5,
      next: 8,
      operation: '-',
    };
    const buttonName = '=';
    expect(calculate(obj, buttonName)).toEqual({
      total: '-3',
      next: null,
      operation: null,
    });
  });

  test('should return the division of numbers', () => {
    const obj = {
      total: 5,
      next: 2,
      operation: '÷',
    };
    const buttonName = '=';
    expect(calculate(obj, buttonName)).toEqual({
      total: '2.5',
      next: null,
      operation: null,
    });
  });

  test('should return the modulas of numbers', () => {
    const obj = {
      total: 20,
      next: 3,
      operation: '%',
    };
    const buttonName = '=';
    expect(calculate(obj, buttonName)).toEqual({
      total: '2',
      next: null,
      operation: null,
    });
  });
});
