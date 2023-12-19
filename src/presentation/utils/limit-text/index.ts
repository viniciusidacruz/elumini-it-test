export function limitText(text: string, limit: number = 10) {
  const hasText = !!text.length;

  if (!hasText) return;

  return text.substring(0, limit);
}
