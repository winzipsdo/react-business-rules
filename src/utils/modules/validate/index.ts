import { Condition, Operator, RuleType } from '../../../constants';
import type { BusinessRule } from '../../../types';
import { get } from 'lodash-es';
import { OperatorSupportedValueTypeMap } from './constants';
import { isEqual, isIn, isInclude, isLike } from './functions';

/**
 * @returns stay pure, only return boolean
 */
export function validate(target: unknown, rule: BusinessRule): boolean {
  if (!target || !rule) {
    // target or rule is meaningless
    return false;
  }

  if (rule.type === RuleType.AllOrAny) {
    const { condition, rules } = rule;

    if (condition === Condition.All) {
      return rules.every((item) => validate(target, item));
    }

    if (condition === Condition.Any) {
      return rules.some((item) => validate(target, item));
    }
  } else if (rule.type === RuleType.Expression) {
    const { path, operator, value: expectedValue, sourceValueType } = rule;

    // ensure type match
    if (!OperatorSupportedValueTypeMap[operator].includes(sourceValueType)) {
      return false;
    }

    const sourceValue = get(target, path);

    switch (operator) {
      case Operator.Equal:
        return isEqual(sourceValue, expectedValue, sourceValueType);

      case Operator.NotEqual:
        return !isEqual(sourceValue, expectedValue, sourceValueType);

      case Operator.LessThan:
        return Number(sourceValue) < Number(expectedValue);

      case Operator.GreaterThan:
        return Number(sourceValue) > Number(expectedValue);

      case Operator.LessThanOrEqual:
        return Number(sourceValue) <= Number(expectedValue);

      case Operator.GreaterThanOrEqual:
        return Number(sourceValue) >= Number(expectedValue);

      case Operator.In:
        return isIn(sourceValue, expectedValue, sourceValueType);

      case Operator.NotIn:
        return !isIn(sourceValue, expectedValue, sourceValueType);

      case Operator.Like:
        return isLike(sourceValue, expectedValue);

      case Operator.NotLike:
        return !isLike(sourceValue, expectedValue);

      case Operator.Include:
        return isInclude(sourceValue, expectedValue);

      case Operator.Exclude:
        return !isInclude(sourceValue, expectedValue);
    }
  }

  return false;
}
