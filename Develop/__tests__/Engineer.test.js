const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
	const engineer = new Engineer('Tanner', 'tanner1111@email.com', 1234, 'championtan');

	expect(engineer.name).toEqual(expect.any(string));
	expect(engineer.email).toContain('@');
	expect(engineer.id).toEqual(expect.any(Number));
	expect(engineer.github).toEqual(expect.any(string));
});
