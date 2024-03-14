export function FormatValues(value) {
  const startValue = value.replace(/\D/g, "");
  const comma = startValue.replace(/(\d)(\d{2})$/, "$1,$2");
  const point = comma.replace(/(?=(\d{3})+(\D))\B/g, ".");

  return point;
}
