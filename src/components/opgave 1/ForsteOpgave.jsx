// Øvelse 1: Test med forskellige inputtyper
// Skriv tests for en funktion, der håndterer både tal, strenge og null-værdier.
// Sørg for at dække både gyldige og ugyldige input.

// Funktion der håndterer forskellige inputtyper
function handleInput(input) {

  // Håndterer null input
  if (input === null) {
    return 'Input is null';

    // Håndterer tal input
  } else if (typeof input === 'number') {
    return `Input is a number: ${input}`;

    // Håndterer streng input
  } else if (typeof input === 'string') {
    return `Input is a string: ${input}`;

    // Håndterer ugyldigt input
  } else {
    return 'Invalid input type';
  }
}

export default handleInput;