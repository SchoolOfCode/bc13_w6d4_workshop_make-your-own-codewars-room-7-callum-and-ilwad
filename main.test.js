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

test("Check if input is not a string", () => {
    let testData = "HELLO"
    console.log(typeof testData)
    let actual = vowelsAndConsonants(testData)
    console.log(actual)
    let expected = null
    expect(actual).toBe(expected)
 
})
