import type { RuleType, Condition, Operator, ValueType } from '../constants';

interface BusinessRuleCommonProps {
  type: RuleType;
}

export interface BusinessRuleExpressionProps extends BusinessRuleCommonProps {
  type: RuleType.Expression;
  path: string;
  operator: Operator;
  value: string;
  sourceValueType: ValueType;
}

export interface BusinessRuleAllOrAnyProps extends BusinessRuleCommonProps {
  type: RuleType.AllOrAny;
  condition: Condition;
  rules: BusinessRuleAllOrAnyProps[] | BusinessRuleExpressionProps[];
}

export type BusinessRule = BusinessRuleAllOrAnyProps | BusinessRuleExpressionProps;
