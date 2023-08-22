import Validator from '../validator';

test('error input username', () => {
  expect(() => new Validator('alex666').validateUsername())
    .toThrow('Недопустимый ввод');
});

test('valid username', () => {
  const testUser = new Validator('alex--__234user').validateUsername();
  const correct = 'alex--__234user';
  expect(testUser).toEqual(correct);
});
