export function isDefined(value: string | number) {
  const numericValue = typeof value === "string" ? parseInt(value, 10) : value;
  return !isNaN(numericValue);
}
