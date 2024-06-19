import { expect, test } from 'vitest';
import { validate } from '../utils';
import { Operator, RuleType, ValueType } from '../constants';

const data = {
  foo: 'bar',
  bar: 1,
};

test('string equal', () => {
  expect(
    validate(data, {
      type: RuleType.Expression,
      path: 'foo',
      operator: Operator.Equal,
      value: 'bar',
      sourceValueType: ValueType.String,
    })
  ).toBe(true);

  expect(
    validate(data, {
      type: RuleType.Expression,
      path: 'foo',
      operator: Operator.Equal,
      value: 'bar.',
      sourceValueType: ValueType.String,
    })
  ).toBe(false);
});

test('number equal', () => {
  expect(
    validate(data, {
      type: RuleType.Expression,
      path: 'bar',
      operator: Operator.Equal,
      value: '1',
      sourceValueType: ValueType.Number,
    })
  ).toBe(true);

  expect(
    validate(data, {
      type: RuleType.Expression,
      path: 'bar',
      operator: Operator.Equal,
      value: '2',
      sourceValueType: ValueType.Number,
    })
  ).toBe(false);
});
