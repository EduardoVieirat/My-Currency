export function unformatedValues(currencyInput: string, taxInput: string) {
  const unformatedDolar = currencyInput.replace(/[^\d]/g, "");
  const unformatedTax = taxInput.replace(/[^\d]/g, "");

  return { unformatedDolar, unformatedTax };
}

export function formatCurrencyInput(inputValue: any) {
  const cleanValue = inputValue.toString().replace(/[^\d]/g, "");

  if (cleanValue === "") return "";

  const valueInCents = Number(cleanValue);
  if (isNaN(valueInCents)) return "";

  const formattedValue = (valueInCents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formattedValue;
}
