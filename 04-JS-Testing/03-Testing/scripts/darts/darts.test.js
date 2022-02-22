import { finalScore } from "./darts.js";

describe('Darts', () =>{
    test('missed the target', () => {
        expect(finalScore(-9,9)).toEqual(0)
    });
})

describe('Darts', () =>{
    test('outer circle', () => {
        expect(finalScore(0,10)).toEqual(1)
    });
})

describe('Darts', () =>{
    test('missed the target', () => {
        expect(finalScore(-9,9)).toEqual(0)
    });
})

describe('Darts', () =>{
    test('missed the target', () => {
        expect(finalScore(-9,9)).toEqual(0)
    });
})

describe('Darts', () =>{
    test('missed the target', () => {
        expect(finalScore(-9,9)).toEqual(0)
    });
})