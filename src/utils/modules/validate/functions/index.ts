import { ValueType } from '../../../../constants';

export function isEqual(sourceValue: unknown, expectedValue: string, sourceValueType: ValueType): boolean {
  switch (sourceValueType) {
    case ValueType.String:
      return String(sourceValue) === String(expectedValue);
    case ValueType.Number:
      return Number(sourceValue) === Number(expectedValue);
    case ValueType.Boolean: {
      if (String(expectedValue).toLowerCase() === 'true') {
        return sourceValue === true;
      } else if (String(expectedValue).toLowerCase() === 'false') {
        return sourceValue === false;
      } else {
        return false;
      }
    }
    default:
      return false;
  }
}

/**
 * expect the sourceValue to be in the expectedValue
 * @param sourceValue e.g. 'hello'
 * @param expectedValue e.g. 'hello,world'
 * @param sourceValueType e.g. string
 * @returns
 */
export function isIn(sourceValue: unknown, expectedValue: string, sourceValueType: ValueType): boolean {
  const splittedValue: unknown[] = expectedValue.split(',');

  switch (sourceValueType) {
    case ValueType.String:
      return splittedValue.includes(String(sourceValue));
    case ValueType.Number:
      return splittedValue.map((item) => Number(item)).includes(Number(sourceValue));
    default:
      return false;
  }
}

export function isLike(sourceValue: unknown, expectedValue: string): boolean {
  if (!expectedValue) {
    return false;
  }
  const pattern = new RegExp(expectedValue, 'ig');
  return pattern.test(String(sourceValue));
}

export function isInclude(sourceValue: unknown, expectedValue: string): boolean {
  if (!sourceValue) {
    return false;
  }

  return (sourceValue as unknown[]).map((item) => String(item)).includes(String(expectedValue));
}
