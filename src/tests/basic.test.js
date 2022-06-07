import compare from '../js/basic';

const dataList = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
];

const dataList2 = [
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
];

test('should sum', () => {
  expect(dataList.sort(compare('health'))).toEqual(dataList2);
});