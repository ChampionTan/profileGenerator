const Employee = require("./Employee");

class Engineer extends Employee {
	constructor(name, email, id, github) {
		super(name, id, email)
		this.github = github
	}
	getGithub() {
		return this.github;
	}
	getPosition() {
		return 'Engineer';
	}
};

module.exports = Engineer;
