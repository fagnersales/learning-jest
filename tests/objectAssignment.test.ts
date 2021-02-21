test('object assignment', () => {
  interface Data extends Record<string, any> {
    one: number;
  }

  const data = { one: 1 };
  data['two'] = 2;

  expect<Data>(data).toEqual({
    one: 1,
    two: 2,
  });
});
