const Manager = require("../lib/Manager");

describe("Manager", () => {
	const manager = new Manager('Tanner', 'tanner1111@gmail.com', 1234, 5551234);

	expect(manager.name).toEqual(expect.any(string));
	expect(manager.email).toContain('@');
	expect(manager.id).toEqual(expect.any(Number));
	expect(manager.number).toEqual(expect.any(Number));

});

