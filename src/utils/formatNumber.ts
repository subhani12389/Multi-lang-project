export const formatCurrency = (value: number, locale: string) =>
  new Intl.NumberFormat(locale, {
    style: "currency",
    currency: locale === "ja" ? "JPY" : "USD"
  }).format(value);
