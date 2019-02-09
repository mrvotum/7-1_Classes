import {
  Bowman, Swordsman, Magician, Undead, Zombie, Daemon,
} from '../src/js/type-classes';

test('Bowman', () => {
  const input = new Bowman('Rick');

  const expected = { // ожидает
    name: 'Rick',
    type: 'Bowman',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  };

  const received = input; // получает
  expect(received).toEqual(expected); // сравнивает
});

test('Swordsman', () => {
  const input = new Swordsman('Rick');

  const expected = { // ожидает
    name: 'Rick',
    type: 'Swordsman',
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  };

  const received = input; // получает
  expect(received).toEqual(expected); // сравнивает
});

test('Magician', () => {
  const input = new Magician('Rick');

  const expected = { // ожидает
    name: 'Rick',
    type: 'Magician',
    level: 1,
    health: 100,
    attack: 10,
    defence: 40,
  };

  const received = input; // получает
  expect(received).toEqual(expected); // сравнивает
});

test('Undead', () => {
  const input = new Undead('Rick');

  const expected = { // ожидает
    name: 'Rick',
    type: 'Undead',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  };

  const received = input; // получает
  expect(received).toEqual(expected); // сравнивает
});

test('Zombie', () => {
  const input = new Zombie('Rick');

  const expected = { // ожидает
    name: 'Rick',
    type: 'Zombie',
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  };

  const received = input; // получает
  expect(received).toEqual(expected); // сравнивает
});

test('Daemon', () => {
  const input = new Daemon('Rick');

  const expected = { // ожидает
    name: 'Rick',
    type: 'Daemon',
    level: 1,
    health: 100,
    attack: 10,
    defence: 40,
  };

  const received = input; // получает
  expect(received).toEqual(expected); // сравнивает
});
