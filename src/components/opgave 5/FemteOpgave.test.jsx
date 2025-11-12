// Øvelse 5: Mocking af afhængigheder
// Skriv tests for en funktion, der bruger en ekstern afhængighed.
// Brug mocking til at erstatte afhængigheden i testen.
import { describe, it, expect, vi } from 'vitest';
import { FemteOpgave } from './FemteOpgave';

vi.mock('./eksternAfhaengighed', () => ({
  eksternAfhaengighed: vi.fn(() => 'Mocket værdi'),
}));

describe('FemteOpgave', () => {
  it('skal bruge den mockede afhængighed', () => {
    const resultat = FemteOpgave();
    expect(resultat).toBe('Mocket værdi');
  });
});
