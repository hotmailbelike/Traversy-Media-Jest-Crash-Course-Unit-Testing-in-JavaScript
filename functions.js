const fetch = require('node-fetch');

const add = (num1, num2) => num1 + num2;

const isNull = () => null;

const checkValue = (val) => val;

const creatUser = () => {
	const user = { firstName: 'Vision' };
	user['lastName'] = 'AC';
	return user;
};

const getUser = async () => {
	try {
		let res = await fetch('https://jsonplaceholder.typicode.com/users/1', {
			method: 'get',
		});
		res = await res.json();
		return res;
	} catch (error) {
		console.log('getUser -> error', error);
	}
};

const initDB = () => console.log('Connected to DB');
const closeDB = () => console.log('Disconnected from DB');

module.exports = {
	add,
	isNull,
	checkValue,
	creatUser,
	getUser,
	initDB,
	closeDB,
};
