const chunkArray = require('./chunk');

test('should chunkArray function exist', () => {
	expect(chunkArray).toBeDefined();
});

// this will fail
test('should chunk an array of 10 values with length of 2', () => {
	const numbers = [1, 2, 3, 45, 5, 66, 78, 9, 1000, 100];
	const len = 2;
	const chunkedArr = chunkArray(numbers, len);

	expect(chunkedArr).toEqual([
		[1, 2],
		[3, 4],
		[5, 6],
		[7, 8],
		[9, 10],
	]);
});

test('should chunk an array of 10 values with length of 2', () => {
	const numbers = [1, 2, 3, 45, 5, 66, 78, 9, 200, 100];
	const len = 2;
	const chunkedArr = chunkArray(numbers, len);

	expect(chunkedArr).toEqual([
		[1, 2],
		[3, 45],
		[5, 66],
		[78, 9],
		[200, 100],
	]);
});

test('should chunk an array of 4 values with length of 1', () => {
	const numbers = [1, 2, 3, 48];
	const len = 1;
	const chunkedArr = chunkArray(numbers, len);

	expect(chunkedArr).toEqual([[1], [2], [3], [48]]);
});
