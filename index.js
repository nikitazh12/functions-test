// задача 1
const arrOne = ['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна'];
const func1 = (arr) => {
  arr.forEach((element) => console.log(`Привет, ${element}`));
};
func1(arrOne);

// задача 2
const arrTwo = [1, 2, 3, 4, 5];
const func2 = (arr) => {
	return arr.map((x) => x * 10);
};
console.log(func2(arrTwo));

// задача 3
const arrThree = [5, 12, 8, 130, 44];
const func3 = (arr) => {
 return arr.filter((num) => num > 10)
};
console.log(func3(arrThree));

//задача 4 
const arrFour = [
 {name: 'Иван', age: 23},
 {name: 'Мария', age: 18},
 {name: 'Алексей', age: 32}, 
 {name: 'Ольга', age: 24}, 
 {name: 'Сергей', age: 17}, 
 {name: 'Анна', age: 21}
];
const func4 = () => {
const result = arrFour
  .filter(person => person.age > 18)
  .map(person => `${person.name} (${person.age} лет)`);
	return result
};
console.log(func4(arrFour));

// задача 5
const arrFive = [
  {product: 'Телефон', price: 50000, quantity: 1},
  {product: 'Чехол', price: 1500, quantity: 2},
  {product: 'Зарядное устройство', price: 2500, quantity: 1}
];
const func5 = () => {
const totalSales = arrFive.reduce((total, item) => {
  return total + (item.price * item.quantity);
}, 0);
return `Общая стоимость продаж: ${totalSales}`;
};
console.log(func5(arrFive));
	
