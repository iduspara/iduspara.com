const WORDS_PER_MINUTE = 220;

/** Estimates reading time in whole minutes (minimum 1), ignoring code fences. */
export function readingTime(markdown: string): number {
  const prose = markdown.replace(/```[\s\S]*?```/g, " ");
  const words = prose.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}
