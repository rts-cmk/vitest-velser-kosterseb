// Øvelse 3: Test af asynkrone funktioner
// Skriv tests for en funktion, der returnerer en Promise. 
// Test både succes og fejltilfælde.
import { describe, it, expect } from 'vitest';
import { fetchData } from './TredjeOpgave';

describe('fetchData', () => {
    it('should resolve with data when type is "success"', async () => {
        const data = await fetchData('success');
        expect(data).toEqual({ message: 'Data fetched successfully' });
    });

    it('should reject with an error when type is not "success"', async () => {
        try {
            await fetchData('error');
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe('Failed to fetch data');
        }
    });
});