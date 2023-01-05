const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template.js');
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
			validate: nameInput => {
				if (nameInput) {
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
			validate: emailInput => {
				if (emailInput) {
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
			validate: idInput => {
				if (idInput) {
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
			when: (numberInput) => numberInput.position === 'Manager',
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
			when: (githubInput) => githubInput.position === 'Engineer',
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
			when: (schoolInput) => schoolInput.position === 'Intern',
			validate: schoolInput => {
				if (schoolInput) {
					return true;
				}else {
					console.log('Please input the team members school');
					return false;
				}
			}
		},
		{
			type: 'confirm',
			name: 'addTeamMember',
			message: 'Would you like to add another member to the team?',
			default: false,
		}
	];

	const promptTeam = () => {
		console.log(`
		============
		Team Builder
		============
		`)

		return inquirer.prompt(teamInfo)
		.then(teamData => {
			let {position, name, email, id, number, github, school} = teamData;
			let teamMember;
			if (position === 'Manager'){
				teamMember = new Manager(name, email, id, number);
			}
			if (position === 'Engineer'){
				teamMember = new Engineer(name, email, id, github);
			}
			if (position === 'Intern'){
				teamMember = new Intern(name, email, id, school);
			}
			memberArray.push(teamMember);

			if (teamData.addTeamMember) {
				return promptTeam(memberArray);
			}else {
				return memberArray;
			}
		})
	};


const writeFile = data => {
	fs.writeFile('./dist/team.html', data, err => {
		if (err) {
			console.log(err);
		}else {
			console.log('you did it')
		}
	})
};



promptTeam()
.then(data => {
	return generatePage(data)
})
.then(html => {
	return writeFile(html)
});

