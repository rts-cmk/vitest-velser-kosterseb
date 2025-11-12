// Skriv en funktion til test af Coverage i Vitest
export function calculateCoverage(testsPassed, totalTests) {
    // Return procentage of remaining tests
  if (totalTests === 0) return 0;
  return (testsPassed / totalTests) * 100;
}

// Refakturér koden og kontroller, at alle tests stadig består.
export function refactoredCalculateCoverage(testsPassed, totalTests) {
    // Return procentage of remaining tests
    return totalTests === 0 ? 0 : (testsPassed / totalTests) * 100;
}