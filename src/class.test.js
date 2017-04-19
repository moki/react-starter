import Class from './class';

test('action method of class instance', () => {
  const instance = new Class('class-instance');
  expect(instance.action())
    .toBe("I'm class with name: class-instance and i am able to perform an action!");
});
