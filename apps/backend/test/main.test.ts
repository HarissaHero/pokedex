import { describe, expect, it } from "vitest";

describe('testing test module', () => {
    it('should succeed', () => {
        const testString = 'Hello World!'
        expect(testString).toBe('Hello World!')
    })
})