type Modes = Record<string, boolean | string>

export const classNames = (
  className: string,
  modes: Modes = {},
  additionalClassNames: string[] = [],
): string => [
  className,
  ...additionalClassNames.filter(Boolean),
  ...Object.keys(modes).filter((key) => modes[key]),
].join(' ');
