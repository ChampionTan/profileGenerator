const Intern = require("../lib/Intern");

describe("Intern", () => {
	const intern = new Intern('Tanner', 'tanner1111@email.com', 1234, 'uncc');

	expect(intern.name).toEqual(expect.any(string));
	expect(intern.email).toContain('@');
	expect(intern.id).toEqual(expect.any(Number));
	expect(intern.school).toEqual(expect.any(string));

});
