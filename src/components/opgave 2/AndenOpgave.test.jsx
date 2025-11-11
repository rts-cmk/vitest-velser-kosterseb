// Øvelse 2: Strukturér dine tests med `describe`, `beforeEach` og `afterEach`
// Organisér dine tests i grupper med `describe`. 
// Brug `beforeEach` til at opsætte testdata og `afterEach` til at rydde op.
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { add, subtract } from './AndenOpgave';

describe('Math Functions', () => {
    let a;
    let b;

    beforeEach(() => {
        // Opsæt testdata før hver test
        a = 10;
        b = 5;
    });

    afterEach(() => {
        // Ryd op efter hver test
        a = 0;
        b = 0;
    });

    describe('add function', () => {
        it('should add two positive numbers correctly', () => {
            expect(add(a, b)).toBe(15);
        });

        it('should add a positive and a negative number correctly', () => {
            expect(add(a, -b)).toBe(5);
        });

        it('should add a negative and a positive number correctly', () => {
            expect(add(-a, b)).toBe(-5);
        });

        it('should add two negative numbers correctly', () => {
            expect(add(-a, -b)).toBe(-15);
        });
    });

    describe('subtract function', () => {
        it('should subtract two positive numbers correctly', () => {
            expect(subtract(a, b)).toBe(5);
        });

        it('should subtract a larger number from a smaller number correctly', () => {
            expect(subtract(b, a)).toBe(-5);
        });
    });

}
    )