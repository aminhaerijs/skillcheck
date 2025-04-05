export const formatNumberWithCommas = (value: number): string => {
  if (typeof value !== 'number') return String(value)
  return value.toLocaleString()
}
