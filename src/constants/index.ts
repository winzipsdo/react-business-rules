export enum Operator {
  Equal = 'eq',
  NotEqual = 'neq',
  LessThan = 'lt',
  GreaterThan = 'gt',
  LessThanOrEqual = 'lte',
  GreaterThanOrEqual = 'gte',
  In = 'in',
  NotIn = 'not_in',
  Like = 'like',
  NotLike = 'not_like',
  Include = 'include',
  Exclude = 'exclude',
}

export enum Condition {
  All = 'all',
  Any = 'any',
}

export enum RuleType {
  AllOrAny = 'all_or_any',
  Expression = 'expression',
}

export enum ValueType {
  String = 'string',
  Number = 'number',
  Boolean = 'boolean',
  Array = 'array',
}
