const managerCard = manager => {
    return`
    <div class="dist card bg-primary mb-3" style="width: 18rem;" >
    <div class="card-header">
      Manager <i class="fab fa-black-tie"></i>
      </span>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Name: ${manager.name}</li>
      <li class="list-group-item">Employee ID: ${manager.id}</li>
      <li class="list-group-item">Office Number: ${manager.number}</li>
      <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
    </ul>
  </div>
    
    `  
  
  }
  const engineerCard = engineer => {
    return`
    <div class="dist card bg-success mb-3" style="width: 18rem;" >
    <div class="card-header">
      Engineer <i class="fas fa-chalkboard-teacher"></i>
      </span>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Name: ${engineer.name}</li>
      <li class="list-group-item">Employee ID: ${engineer.id}</li>
      <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
      <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
    </ul>
  </div>
    `  
  }
  const internCard = intern => {
    return`
    <div class="dist card bg-info mb-3" style="width: 18rem;" >
    <div class="card-header">
      Intern <i class="fas fa-baby"></i>
      </span>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Name: ${intern.name}</li>
      <li class="list-group-item">Employee ID: ${intern.id}</li>
      <li class="list-group-item">School Name: ${intern.school}</li>
      <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
    </ul>
  </div>
    `  
  }
  const generatePage = memberArray => {
    employeeList = [];
    for (let i = 0; memberArray.length>i; i++){ 
        const position = memberArray[i].getPosition();
  
        if (position === 'Manager'){ 
            employeeList.push(managerCard(memberArray[i]));
        }
        if (position === 'Engineer'){ 
            employeeList.push(engineerCard(memberArray[i]));
        }
        if (position === 'Intern'){ 
            employeeList.push(internCard(memberArray[i]));
        }
    }
    const  createdTeam = employeeList.join(''); 
    return HTMLPage(createdTeam);
} 



const HTMLPage = createdTeam => {
    return`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ENTER PAGE TITLE HERE</title>
  
  <style>
    @import "https://cdn.simplecss.org/simple.min.css";

    main {
      display: grid;
      grid-column: 1/-1;
      justify-items: center;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
      max-width: 1140px;
      margin: auto;
    }

    @media screen and (max-width: 1140px) {
      main {
        grid-template-columns: 1fr 1fr;
      }
    }
    @media screen and (max-width: 720px) {
      main {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <header>
    <h1>My Team</h1>
  </header>
  <main>
    ${createdTeam}
  </main>
  <footer>
    &copy; 2022-2023
  </footer>
</body>
</html>
`
}
module.exports = generatePage;
