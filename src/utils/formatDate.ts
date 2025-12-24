export const formatDate = (date: Date, locale: string) =>
  new Intl.DateTimeFormat(locale).format(date);
