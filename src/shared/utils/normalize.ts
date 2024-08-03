export function normalize(num: number, min: number = 1, max: number=10): number {

  return Math.min(Math.max(num, min), max)
}
