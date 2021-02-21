test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Cristoph', () => {
  expect('Cristoph').toMatch(/stop/);
});
