export function delay(ms: number = 1000) {
  return new Promise((r) => setTimeout(() => r(0), 0));
}
