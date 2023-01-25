import Demon from '../Demon.js';

test('get attack test', () => {
  const person = new Demon(2);
  person.attack = 80;
  expect(person.attack).toBe(72);
});
