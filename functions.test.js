const {
	add,
	isNull,
	checkValue,
	creatUser,
	getUser,
	initDB,
	closeDB,
} = require('./functions');

// beforeEach(() => initDB()); // !runs before EACH test case
// afterEach(() => closeDB()); // ! runs after EACH test case

// beforeAll(() => initDB()); // !runs before ALL test case
// afterAll(() => closeDB()); // ! runs after ALL test case

describe('Testing add func', () => {
	beforeEach(() =>
		console.log('I am running only before the test cases in this describe block')
	);

	test('Adds 2 + 2 to equal 4', () => {
		expect(add(2, 2)).toBe(4);
	});

	test('Adds 2 + 2 to NOT equal 5', () => {
		expect(add(2, 2)).not.toBe(5);
	});
});

test('Should be null', () => {
	expect(isNull()).toBeNull();
});

test('Should be falsy', () => {
	expect(checkValue(null)).toBeFalsy();
});

test('Should be falsy', () => {
	expect(checkValue(0)).toBeFalsy();
});

test('Should be falsy', () => {
	expect(checkValue(undefined)).toBeFalsy();
});

test('Should be truthy', () => {
	expect(checkValue(1)).toBeTruthy();
});

// toEqual is for objs and arrays
test('should be User Object', () => {
	expect(creatUser()).toEqual({
		firstName: 'Vision',
		lastName: 'AC',
	});
});

test('should be under 1600', () => {
	expect(800 + 700).toBeLessThan(1600);
});

test('should be within 1600', () => {
	expect(800 + 800).toBeLessThanOrEqual(1600);
});

// regx
test('should no I in Team', () => {
	expect('team').not.toMatch(/I/i);
});

// Arrays
test('should user names have Admin', () => {
	expect(['John', 'Karen', 'Admin']).toContain('Admin');
});

// Promise
test('should name be Leanne Graham', () => {
	// expect.assertions(1);
	return getUser().then((data) => expect(data.name).toEqual('Leanne Graham'));
});

// Async Await
test('should name be Leanne Graham', async () => {
	expect.assertions(1);
	const data = await getUser();
	expect(data.name).toEqual('Leanne Graham');
});
