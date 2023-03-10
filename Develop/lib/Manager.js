const Employee = require("./Employee");

class Manager extends Employee {
	constructor(name, email, id, number) {
		super(name, id, email)
		this.number = number
	}
	getNumber() {
		return this.number;
	}
	getPosition() {
		return 'Manager';
	}
};

module.exports = Manager;
