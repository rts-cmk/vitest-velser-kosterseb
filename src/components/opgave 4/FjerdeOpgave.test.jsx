// Øvelse 4: Test af fejl og undtagelser
// Skriv tests for en funktion, der kaster en fejl ved ugyldigt input.
// Test at fejlen bliver kastet som forventet.
import { expect, test } from 'vitest';
import FjerdeOpgave from './FjerdeOpgave';

test('should throw an error for invalid input', () => {
    expect(() => FjerdeOpgave('function')).toThrowError('type is not defined');
});