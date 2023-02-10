/* eslint-disable no-undef */
const welcomer = require('./welcomer');

beforeAll(async () => {
    console.log('This is first log of test');
});

afterAll(async () => {
    console.log('This is end of the test log ');
});

describe('Testing jest first time', () => {
    it('First test case', () => {
        const a = 2,
            b = '4',
            c = 7;
        console.log('First test case log');
        const result = a + b + c;
        expect(result).toBe('247');
    });
    it('Second test case', () => {
        result = welcomer('Flew4k');
        expect(result).toBe('Hello Flew4k');
    });
});
