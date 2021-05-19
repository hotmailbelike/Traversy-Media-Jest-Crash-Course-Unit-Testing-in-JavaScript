const isAnagram = require('./anagram');

test('should isAnagram function exist', () => {
	expect(isAnagram).toBeDefined();
});

test('should isAnagram function exist', () => {
	expect(typeof isAnagram).toEqual('function');
});

test('should "cinema" be an anagram of "iceman"', () => {
	expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

test('should "Dormitory" be an anagram of "dirty room##"', () => {
	expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy();
});

test('should "Hello" NOT be an anagram of "Alo"', () => {
	expect(isAnagram('Hello', 'Alo')).toBeFalsy();
});
