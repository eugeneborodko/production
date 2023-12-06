export const getDate = (date: string = ''): string => {
  if (!date) return '';

  return date.replace(/\./g, '-');
};
