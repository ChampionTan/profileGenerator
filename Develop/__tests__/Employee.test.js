const Employee = require("../lib/Employee");

describe("Employee", () => {
	const employee = new Employee('Tanner', 1234, 'tanner1111@email.com');

	expect(employee.name).toEqual(expect.any(string));
	expect(employee.id).toEqual(expect.any(Number));
	expect(employee.email).toContain('@');

});
