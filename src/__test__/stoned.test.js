import Demon from '../Demon.js';

test('get attack test', () => {
  const person = new Demon(2);
  person.stoned = 80;
  expect(person.stoned).toBeCloseTo(48.39);
});
