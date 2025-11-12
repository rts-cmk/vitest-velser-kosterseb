import { describe, it, expect } from "vitest";
import handleInput from "./ForsteOpgave";

// 
describe("handleInput function", () => {

    // Test for forskellige inputtyper
    it("should handle null input", () => {
        const result = handleInput(null);
        expect(result).toBe("Input is null");
    });
    
    // Test for tal input
    it("should handle number input", () => {
        const result = handleInput(42);
        expect(result).toBe("Input is a number: 42");
    });
    
    // Test for streng input
    it("should handle string input", () => {
        const result = handleInput("Hello");
        expect(result).toBe("Input is a string: Hello");
    });
    
    // Test for ugyldigt input
    it("should handle invalid input type", () => {
        const result = handleInput({ key: "value" });
        expect(result).toBe("Invalid input type");
    });
    });