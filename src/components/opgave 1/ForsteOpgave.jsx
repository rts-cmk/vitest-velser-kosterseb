// Øvelse 1: Test med forskellige inputtyper
// Skriv tests for en funktion, der håndterer både tal, strenge og null-værdier.
// Sørg for at dække både gyldige og ugyldige input.

// Funktion der håndterer forskellige inputtyper
function handleInput(input) {
  if (input === null) {
    return 'Input is null';
  } else if (typeof input === 'number') {
    return `Input is a number: ${input}`;
  } else if (typeof input === 'string') {
    return `Input is a string: ${input}`;
  } else {
    return 'Invalid input type';
  }
}

export default handleInput;