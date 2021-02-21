class AndroidError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AndroidCompilerError';
  }
}

function compileAndroidCode() {
  throw new AndroidError('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);
  expect(() => compileAndroidCode()).toThrow(AndroidError);

  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});
