// Skriv en funktion til test af Coverage i Vitest
export function calculateCoverage(testsPassed, totalTests) {
  if (totalTests === 0) return 0;
  return (testsPassed / totalTests) * 100;
}

