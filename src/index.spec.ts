import colored, {
    black,
    blue,
    cyan,
    green,
    magenta,
    red,
    white,
    yellow,
    blackSoft,
    blueSoft,
    cyanSoft,
    greenSoft,
    magentaSoft,
    redSoft,
    whiteSoft,
    yellowSoft,
    colors,
    allColored,
} from './index.js';

describe('colored string utility', () => {
    describe('colored function', () => {
        it('should return a string with ANSI color codes', () => {
            const result = colored('test');
            expect(result).toMatch(/\x1b\[\d+(?:;\d+)*m.*\x1b\[0m/);
        });

        it('should contain the input string', () => {
            const testString = 'hello world';
            const result = colored(testString);
            expect(result).toContain(testString);
        });
    });

    describe('color functions', () => {
        const testString = 'test';
        const colorFunctions = {
            black, blue, cyan, green, magenta, red, white, yellow
        };

        Object.entries(colorFunctions).forEach(([name, func]) => {
            it(`${name} should wrap text in ANSI color codes`, () => {
                const result = func(testString);
                expect(result).toMatch(/\x1b\[\d+(?:;\d+)*m.*\x1b\[0m/);
                expect(result).toContain(testString);
            });
        });
    });

    describe('soft color functions', () => {
        const testString = 'test';
        const softColorFunctions = {
            blackSoft, blueSoft, cyanSoft, greenSoft, 
            magentaSoft, redSoft, whiteSoft, yellowSoft
        };

        Object.entries(softColorFunctions).forEach(([name, func]) => {
            it(`${name} should wrap text in soft ANSI color codes`, () => {
                const result = func(testString);
                expect(result).toMatch(/\x1b\[38;5;\d+m.*\x1b\[0m/);
                expect(result).toContain(testString);
            });
        });
    });

    describe('colors array', () => {
        it('should contain all color functions', () => {
            expect(colors.length).toBe(16); // 8 regular + 8 soft colors
            const testString = 'test';
            colors.forEach(colorFn => {
                const result = colorFn(testString);
                expect(result).toMatch(/\x1b\[\d+(?:;\d+)*m.*\x1b\[0m/);
                expect(result).toContain(testString);
            });
        });
    });

    describe('allColored function', () => {
        it('should return an array of colored strings', () => {
            const testString = 'test';
            const results = allColored(testString);
            
            expect(Array.isArray(results)).toBe(true);
            expect(results.length).toBe(colors.length);
            
            results.forEach(result => {
                expect(result).toMatch(/\x1b\[\d+(?:;\d+)*m.*\x1b\[0m/);
                expect(result).toContain(testString);
            });
        });

        it('should apply each color function exactly once', () => {
            const testString = 'test';
            const results = allColored(testString);
            const uniqueResults = new Set(results);
            
            expect(uniqueResults.size).toBe(colors.length);
        });
    });
}); 