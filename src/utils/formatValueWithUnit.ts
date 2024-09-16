export function formatValueWithUnit(value: string): string {
  const match = value.match(/^(\d+)([a-zA-Z]+)$/);

  if (!match) {
    return value;
  }

  return `${match[1]} ${match[2]}`;
}
