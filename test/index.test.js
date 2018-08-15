const math = require('../src')

describe('add should sum first and second number', () => {
  test('a + b = a + b', () => {
    expect(math.add(1, 2)).toBe(3)
    expect(math.add(1, 3)).toBe(4)
  })
  test('a + -b = a - b', () => {
    expect(math.add(1, -2)).toBe(-1)
    expect(math.add(1, -3)).toBe(-2)
  })
})
