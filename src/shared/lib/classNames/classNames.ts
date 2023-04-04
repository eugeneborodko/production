export type Modes = Record<string, boolean | string | undefined>

export const classNames = (
  className: string,
  modes: Modes = {},
  additionalClassNames: Array<string | undefined> = [],
): string => [
  className,
  ...additionalClassNames.filter(Boolean),
  ...Object.keys(modes).filter((key) => modes[key]),
].join(' ');
