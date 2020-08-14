import imagine from '../src';

describe('imagine()', () => {
    describe('<string>', () => {
        test.each([
            ['using jQuery', 'Imagine using jQuery in 2020.'],
            ['inputting a string', 'Imagine inputting a string in 2020.'],
            ['having clever tests', 'Imagine having clever tests in 2020.'],
        ])("imagine('%s') => '%s'", (inp, expected) => {
            expect(imagine(inp)).toBe(expected);
        });
    });
    describe('<non-string>', () => {
        test.each([
            [3.14, 'Imagine 3.14 in 2020.'],
            [false, 'Imagine false in 2020.'],
            [{ myKey: 'myValue' }, 'Imagine [object Object] in 2020.'],
        ])("imagine(%p) => '%s'", (inp, expected) => {
            expect(imagine(inp)).toBe(expected);
        });
    });
});
