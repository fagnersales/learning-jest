test('the data is peanut butter', (done) => {
  function fetchData(callback) {
    callback('peanut butter');
  }

  function callback(data) {
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});
