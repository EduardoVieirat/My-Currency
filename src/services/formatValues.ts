export function FormatValues(value: string) {
  const startValue = value.replace(/\D/g, "");
  const comma = startValue.replace(/(\d)(\d{2})$/, "$1,$2");
  const point = comma.replace(/(?=(\d{3})+(\D))\B/g, ".");

  return point;
}

export function unformatedValues(currencyInput: string, taxInput: string) {
  const unformatedDolar = currencyInput
    .slice(2)
    .replace(",", "")
    .replace(".", "")
    .replace(".", "");
  const unformatedTax = taxInput.slice(2).replace(",", "");

  return { unformatedDolar, unformatedTax };
}
