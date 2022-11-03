//👉 Write your tests below here:
/*
- Function should return an array

- Input of any data type other than string should result in null.

- Input Jonathan should result in [3, 5]

- Input Gregory should result in [2, 5]
*/

import {jest} from '@jest/globals';
import { vowelsAndConsonants } from "./main"
import { expect, test } from '@jest/globals'

test("Check if input is a string 1", () => {
    let testData = true
    let actual = vowelsAndConsonants(testData)
    let expected = null

    expect(actual).toBe(expected)
})

test("Check if input is a string 2", () => {
    let testData = 34
    let actual = vowelsAndConsonants(testData)
    let expected = null

    expect(actual).toBe(expected)
})

test("Check if input is a string 3", () => {
    let testData = 32.12
    let actual = vowelsAndConsonants(testData)
    let expected = null

    expect(actual).toBe(expected)
})

test("Check output is as expected 1", () => {
    let testData = "Jonathan";
    let actual = vowelsAndConsonants(testData);
    let expected = [ 3, 5 ]

    expect(actual).toStrictEqual(expected)
})

test("Check output is as expected 2", () => {
    let testData = "Gregory";
    let actual = vowelsAndConsonants(testData);
    let expected = [ 2, 5 ]

    expect(actual).toStrictEqual(expected)
})
