const Employee = require("./Employee");

class Manager extends Employee {
	constructor(name, id, email, github) {
		super(name, id, email, github)
		this.github = 'gitHub'
	}
}

module.exports = Manager;
