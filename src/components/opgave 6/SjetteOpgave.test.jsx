// Øvelse 6: Testdækning og refaktorering
// Brug Vitests dækningsoverblik til at finde manglende tests.
// Tilføj tests, så alle grene i funktionerne bliver dækket.
// Refaktorér koden og kontroller, at alle tests stadig består.
import { describe, it, expect } from 'vitest';
import { calculateCoverage } from './SjetteOpgave';

describe('calculateCoverage', () => {
    it('should return 0 when totalTests is 0', () => {
        expect(calculateCoverage(5, 0)).toBe(0);
    });
    
    it('should return correct coverage percentage', () => {
        expect(calculateCoverage(5, 10)).toBe(50);
        expect(calculateCoverage(7, 14)).toBe(50);
        expect(calculateCoverage(3, 4)).toBe(75);
        expect(calculateCoverage(0, 10)).toBe(0);
        expect(calculateCoverage(10, 10)).toBe(100);
    });
    });