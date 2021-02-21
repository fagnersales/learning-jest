test('the data is peanut butter', () => {
  async function fetchData() {
    return 'peanut butter';
  }

  return fetchData().then((data) => {
    expect(data).toBe('peanut butter');
  });
});

test('the data is peanut butter', () => {
  function fetchData() {
    return new Promise((resolve) => resolve('peanut butter'));
  }
  expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', () => {
  function fetchData() {
    return new Promise((_, reject) => reject('error'));
  }

  return expect(fetchData()).rejects.toMatch('error');
});

test('the data is peanut butter', async () => {
  function fetchData() {
    return new Promise((resolve) => resolve('peanut butter'));
  }
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  function fetchData() {
    return new Promise((_, reject) => reject('error'));
  }
  try {
    await fetchData();
  } catch (e) {
    expect(e).toMatch('error');
  }
});
