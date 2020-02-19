import { Sum } from './MyMath.js'
import { DivideBy } from './MyMath.js'
import { AddList } from './MyMath.js'
import { ContainsString } from './MyMath.js'
import { ReSortedNumbers } from './MyMath.js'
import { Adder } from './MyMath.js'

describe("Sum", () => {

test('Whether undefinied is returned on invalid type', () => {
  expect(Sum(1, "Test")).toBeUndefined()
})
test('adds 1 + 2 to equal 3', () => {
  expect(Sum(1, 2)).toBe(3)
})
it("produces the sum of 10 and 20 which should be 30", () => {
  expect(Sum(10,20)).toBe(30)
})
})
describe("DivideBy", () => {

  test('divides 10 by 2 which should be 5', () => {
    expect(DivideBy(10, 2)).toBe(5)
  })
})
describe("ContainsString", () => {

  test('returns true if both inputs are string', () => {
    expect(ContainsString("Hello", "Test")).toBeTruthy()
  })
})
describe("AddList", () => {

  test('adds 1, 2 and 3 to return 6', () => {
    expect(AddList([3,2,3])).toBe(8)
  })
  test('adds 12, 4 and 10 to get 26', () => {
    expect(AddList([12,4,10])).toBe(26)
  })
})
describe("ReSortedNumbers", () => {

  test('re-sorts [4,9,3] to [3,4,9]', () => {
    let solution = [3,4,9]
    expect(ReSortedNumbers([ 4,9,3 ])).toBe(solution)
  })
})
describe("Adder", () => {

  test('Adds 2 and 3 to get 5 through class construction', () => {
    expect(new Adder(2,3)).toBe(5)
  })
})
// ICE 

// Examples for Null
test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

// Examples for zero
test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})
