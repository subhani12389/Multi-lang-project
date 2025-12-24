export const formatRelativeTime = (hours: number, locale: string) => {
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  return rtf.format(-hours, "hour");
};
