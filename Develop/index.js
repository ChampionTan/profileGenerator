const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./src/page-template.js');
const fs = require('fs');

const managerInfo = () => {
	return inquirer
	.prompt([
		{
			type: 'input',
			name: 'name',
			message: 'What is the Managers name?',
			validate: input => {
				if (input) {
					return true;
				}else {
					console.log('Please input a managers name');
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'email',
			message: 'What is the Managers email?',
			validate: input => {
				if (input) {
					return true;
				}else {
					console.log('Please input managers email');
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'id',
			message: 'What is the Managers ID?',
			validate: input => {
				if (input) {
					return true;
				}else {
					console.log('Please input a managers ID');
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'github',
			message: 'What is the Managers GitHub?',
			validate: input => {
				if (input) {
					return true;
				}else {
					console.log('Please input a managers GitHub');
					return false;
				}
			}
		},
	])
}

const writeFile = data => {
	fs.writeFile('newHTML.html', data, err => {
		if (err) {
			console.log(err);
		}else {
			console.log('you did it')
		}
	})
};

managerInfo()
.then(managerInput => {
	return generateHtml(managerInput);
})
.then(data => {
	return writeFile(data);
});

