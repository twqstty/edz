//найти сумму массива
const numbers = [3, 5, 7, 9, 11];
let sum = 0;
for(const num of numbers){
	sum += num;
}
console.log(sum);
//найти макс число
const numberss = [3, 5, 7, 9, 11];
let max = numberss[0];
for(let i = 1; i < numberss.length; i++){
	if(numberss[i] > max){
		max = numberss[i]
	}
}
console.log(max);
//мин число
const numbersss = [3, 5, 7, 9, 11];
let min = numbersss[0];
for(let i = 1; i > numbersss.length; i++){
	if(numbersss[i] < min){
		min = numbersss[i]
	}
}
console.log(min);


//квадраты
const numberr = [1, 2, 3, 4];
const squares = [];
for (let i = 0; i < numberr.length; i++) {
    squares.push(numberr[i] * numberr[i]);
}
console.log(squares);
//первый элемент
const numberrs = [10, 20, 30];
console.log(numberrs[0]);

//последний элемент
const array = [5, 15, 25];
console.log(array[array.length - 1]);
//узнать длинну
const animals = ['кот', 'собака', 'птица', 'котелок'];
console.log(animals.length);
//заменить 2 элемент
const numberd = [10, 20, 30];
numberd[1] = 5000;
console.log(numberd);
//вывести каждый элемент
const words = ['говно', 'груша', 'вертолет'];
for (let i = 0; i < words.length; i++) {
    console.log(words[i]);
}
//в пустой массив добавить элемент
const wordd = [];
wordd.push('ssdsdsadsdsdsdsdsdsd');
console.log(wordd);
