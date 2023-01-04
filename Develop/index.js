const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./src/page-template.js');
const fs = require('fs');

const memberArray = [];

const teamInfo = [
	
	{
		type: 'list',
		name: 'position',
		message: 'What position is this team member?',
		choices: ['Manager', 'Engineer', 'Intern']
	},	
	
	
	
	
	{
			type: 'input',
			name: 'name',
			message: 'What is the team members name?',
			validate: input => {
				if (input) {
					return true;
				}else {
					console.log('Please input a team member name');
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'email',
			message: 'What is the team members email?',
			validate: input => {
				if (input) {
					return true;
				}else {
					console.log('Please input team members email');
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'id',
			message: 'What is the team members ID?',
			validate: input => {
				if (input) {
					return true;
				}else {
					console.log('Please input the team members ID');
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'number',
			message: 'What is the team members office number?',
			when: (officeInput) => officeInput.role === 'Manager',
			validate: officeInput => {
				if (officeInput) {
					return true;
				}else {
					console.log('Please input the team members office number');
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'github',
			message: 'What is the team members GitHub?',
			when: (githubInput) => githubInput.role === 'Engineer',
			validate: githubInput => {
				if (githubInput) {
					return true;
				}else {
					console.log('Please input the team members GitHub');
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'school',
			message: 'What is the team members school?',
			when: (schoolInput) => schoolInput.role === 'Intern',
			validate: schoolInput => {
				if (schoolInput) {
					return true;
				}else {
					console.log('Please input the team members school');
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

