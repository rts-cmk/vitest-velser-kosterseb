import { describe, expect } from "vitest";
import handleInput from "./ForsteOpgave";

describe("handleInput function", () => {
    it("should handle null input", () => {
        const result = handleInput(null);
        expect(result).toBe("Input is null");
    });
    
    it("should handle number input", () => {
        const result = handleInput(42);
        expect(result).toBe("Input is a number: 42");
    });
    
    it("should handle string input", () => {
        const result = handleInput("Hello");
        expect(result).toBe("Input is a string: Hello");
    });
    
    it("should handle invalid input type", () => {
        const result = handleInput({ key: "value" });
        expect(result).toBe("Invalid input type");
    });
    });