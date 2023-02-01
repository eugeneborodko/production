type Modes = Record<string, boolean | string>

export const classNames = (
  className: string,
  modes: Modes,
  additionalClassNames: string[]
): string => {
  return [
    className,
    ...additionalClassNames,
    ...Object.keys(modes).filter((key) => modes[key]),
  ].join(' ')
}
