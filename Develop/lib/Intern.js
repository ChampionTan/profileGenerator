const Employee = require("./Employee");

class Intern extends Employee {
	constructor(name, email, id, school) {
		super(name, id, email)
		this.school = school
	}
	getSchool() {
		return this.school;
	}
	getPosition() {
		return 'Intern';
	}
};

module.exports = Intern;
