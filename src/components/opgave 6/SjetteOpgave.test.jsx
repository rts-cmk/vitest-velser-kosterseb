// Øvelse 6: Testdækning og refaktorering
// Brug Vitests dækningsoverblik til at finde manglende tests.
// Tilføj tests, så alle grene i funktionerne bliver dækket.
// Refaktorér koden og kontroller, at alle tests stadig består.
import { describe, it, expect } from 'vitest';
import { calculateCoverage } from './SjetteOpgave';

// Tests for calculateCoverage function
describe('calculateCoverage', () => {
    it('should return 0 when totalTests is 0', () => {
        expect(calculateCoverage(5, 0)).toBe(0);
    });
    
    // Tests for various coverage scenarios
    it('should return correct coverage percentage', () => {
        expect(calculateCoverage(5, 10)).toBe(50);
        expect(calculateCoverage(7, 14)).toBe(50);
        expect(calculateCoverage(3, 4)).toBe(75);
        expect(calculateCoverage(0, 10)).toBe(0);
        expect(calculateCoverage(10, 10)).toBe(100);
    });

    // Additional tests for edge cases
    it('should handle edge cases correctly', () => {
        expect(calculateCoverage(0, 0)).toBe(0);
        expect(calculateCoverage(1, 1)).toBe(100);
    });

    // Test for large numbers
    it('should handle large numbers correctly', () => {
        expect(calculateCoverage(5000, 10000)).toBe(50);
        expect(calculateCoverage(7500, 15000)).toBe(50);
    });

    });