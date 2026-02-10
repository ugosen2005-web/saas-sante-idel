export function estimateCharges(revenue: number, percentage: number) {
  return Math.round(revenue * (percentage / 100));
}
