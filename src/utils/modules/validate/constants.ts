import { Operator, ValueType } from '../../../constants';

/**
 * the right side types are the types of 'source value'
 */
export const OperatorSupportedValueTypeMap: Record<Operator, ValueType[]> = {
  [Operator.Equal]: [ValueType.String, ValueType.Number, ValueType.Boolean],
  [Operator.NotEqual]: [ValueType.String, ValueType.Number, ValueType.Boolean],
  [Operator.LessThan]: [ValueType.Number],
  [Operator.GreaterThan]: [ValueType.Number],
  [Operator.LessThanOrEqual]: [ValueType.Number],
  [Operator.GreaterThanOrEqual]: [ValueType.Number],
  [Operator.In]: [ValueType.String, ValueType.Number],
  [Operator.NotIn]: [ValueType.String, ValueType.Number],
  [Operator.Like]: [ValueType.String, ValueType.Number],
  [Operator.NotLike]: [ValueType.String, ValueType.Number],
  [Operator.Include]: [ValueType.Array],
  [Operator.Exclude]: [ValueType.Array],
};
