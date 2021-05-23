import luhnAlgoritm from './js/algoritm';
import PaySystemCheck from './js/PaysystemCheck';

const input = document.getElementById('card_number');
const check = document.getElementById('submitform');
const a = new PaySystemCheck('cdisabled', '.card', input, check);

test('positive card validate', () => {
  expect(luhnAlgoritm('5555555555554444')).toBe(true);
});

test('negative card validate', () => {
  expect(luhnAlgoritm('555')).toBe(false);
});

test('card type', () => {
  expect(a.type('51')).toBe('.master');
});

test('card type', () => {
  expect(a.type('55')).toBe('.master');
});

test('card type', () => {
  expect(a.type('48')).toBe('.visaelectron');
});

test('card type', () => {
  expect(a.type('49')).toBe('.visaelectron');
});

test('card type', () => {
  expect(a.type('220')).toBe('.mir');
});

test('card type', () => {
  expect(a.type('4')).toEqual(['.visa', '.visaelectron']);
});

test('card type', () => {
  expect(a.type('40')).toBe('.visa');
});

test('card type', () => {
  expect(a.type('')).toBe(false);
});
