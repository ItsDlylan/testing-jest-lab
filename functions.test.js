const {
	returnTwo,
	greeting,
	add,
	subtract,
	multiply,
	divide,
	menuOpened,
	modalActive,
} = require('./functions');

test('this should expect 2', () => {
	expect(returnTwo()).toEqual(2);
});

test('This should expect a greeting ', () => {
	expect(greeting('John')).toEqual(`Hello, John`);
	expect(greeting('Jenny')).toEqual(`Hello, Jenny`);
});

describe('DOM events', () => {
	test('this should show the falsy for when the menu is opened', () => {
		expect(menuOpened).toBeFalsy();
	});

	test('this should expect the modal active to not be falsy because the modal is active', () => {
		expect(modalActive).not.toBeFalsy();
		expect(modalActive).toBeTruthy();
	});
});

describe('math functions', () => {
	test('This should show the sum of 2 numbers ', () => {
		expect(add(2, 2)).toEqual(4);
		expect(add(4, 5)).toEqual(9);
		expect(add(1, 1)).toEqual(2);
	});
	test('This should show the sub of 2 numbers ', () => {
		expect(subtract(2, 2)).toEqual(0);
		expect(subtract(4, 5)).toEqual(-1);
		expect(subtract(1, 1)).toEqual(0);
	});
	test('This should show the multiply of 2 numbers ', () => {
		expect(multiply(2, 2)).toEqual(4);
		expect(multiply(4, 5)).toEqual(20);
		expect(multiply(-1, 1)).toEqual(-1);
	});
	test('This should show the divide of 2 numbers ', () => {
		expect(divide(2, 2)).toEqual(1);
		expect(divide(100, 1)).toEqual(100);
		expect(divide(20, 5)).toEqual(4);
	});
});
