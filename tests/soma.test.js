function soma(a, b) {
  return a + b;
}

test('Soma 1 + 2 deve retornar 3', () => {
  expect(soma(1, 2)).toBe(3);
});
