/** Whole years elapsed since `startYear`, relative to `now`. */
export function yearsSince(startYear: number, now: Date): number {
  return now.getUTCFullYear() - startYear;
}
