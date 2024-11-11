const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('objekt test', () => {
    const a = {name:"bob"}

    expect(a.name).toBe("bob");
  });

test('array test', () => {
    const a = [1, 2, 3];

    expect(a[0]).toBe(1);
  });

  test('Null test', () => {
    const a = null;

    expect(a[null]).toBe(true);
  });

  test('vergleichsoperator test', () => {
    const a = null;

    expect(a[null]).toBe(true);
  });

  test('spread test', () => {
    const a = null;

    expect(a[null]).toBe(true);
  });

  test('destructing operator test', () => {
    const a = null;

    expect(a[null]).toBe(true);
  });