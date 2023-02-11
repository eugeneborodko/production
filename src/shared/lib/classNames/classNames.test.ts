import { classNames } from './classNames';

describe('classNames', () => {
  it('returns empty string with empty parameters', () => {
    expect(classNames('', {}, [])).toBe('');
  });

  it('returns first class if other parameters are empty', () => {
    expect(classNames('class', {}, [])).toBe('class');
  });

  it('returns first and second class if additional classes are empty', () => {
    expect(classNames('class', { class2: true }, [])).toBe('class class2');
  });

  it('returns all classes if all parameters exist', () => {
    expect(classNames('class', { class2: true }, ['class3'])).toBe(
      'class class3 class2',
    );
  });

  it('should not return undefined mode', () => {
    expect(
      classNames('class', { class2: true, class4: undefined }, ['class3']),
    ).toBe('class class3 class2');
  });

  it('should not return falsy mode', () => {
    const classNamesFn = classNames(
      'class',
      { class2: true, class4: false, class5: true },
      ['class3'],
    );
    const expected = 'class class3 class2 class5';
    expect(classNamesFn).toBe(expected);
  });
});
