class AndroidError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AndroidCompilerError';
  }
}

class AppleError extends Error {
  public name: string = 'AppleCompilerError';
  constructor(public message: string) {
    super();
  }
}

function compileAndroidCode() {
  throw new AndroidError('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);
  expect(() => compileAndroidCode()).toThrow(AndroidError);
  expect(() => compileAndroidCode()).not.toThrow(AppleError);

  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});
