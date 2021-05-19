const reverseString = require('./reverseString');

test('should reverseString function exist', () => {
	expect(reverseString).toBeDefined();
});

test('should hello become olleh', () => {
	expect(reverseString('hello')).toEqual('olleh');
});

test('should Hello become olleH', () => {
	expect(reverseString('Hello')).toEqual('olleh');
});
