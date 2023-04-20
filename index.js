//Includes packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//Creates an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What was your motivation?',
            name: 'motivation',

        },
        {
            type: 'input',
            message: 'Why did you build this project?',
            name: 'why',

        },
        {
            type: 'input',
            message: 'What problem does it solve?',
            name: 'problem',

        },
        {
            type: 'input',
            message: 'What did you learn?',
            name: 'learn',

        },
        {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'installation',

        },
        {
            type: 'input',
            message: 'Provide instructions and examples for use.',
            name: 'usage',

        },
        {
            type: 'input',
            message: 'List your collaborators, third-party assets, or tutorials',
            name: 'credits',

        },
        {
            type: 'list',
            message: 'Input license for poject',
            choices: ["MIT", "IBM", "Apache","Mozilla", "N/A"],
            name: 'license',

        },
        {
            type: 'input',
            message: 'If your project has a lot of features, list them here.',
            name: 'features',

        },
        {
            type: 'input',
            message: 'Write tests for your application. Then provide examples on how to run them here.',
            name: 'tests',

        },
        {
            type: 'input',
            message: 'What is your GitHub username',
            name: 'github',

        },
        {
            type: 'input',
            message: 'What is your email address',
            name: 'email',

        },
    ])
    .then((data) => {

    // Creates a function to write README file
    fs.writeFile("README.md", readme(data), (error) =>
    {error
        ? console.log(error)
        : console.log('success')})
    })

const renderBadge = (license) => {
    if (license === "MIT") { 
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
    else if (license === "IBM") {
        return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
    }
    else if (license === "Apache") {
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
    else if (license === "Mozilla") {
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }
    else {
        return ""
    }
}


//Creates foundation for README file
const readme = ({title, motivation, why, problem, learn, installation, usage, credits, license, tests, github, email}) => {
    return`# ${title}
${renderBadge(license)}

## Description

- ${motivation}
- ${why}
- ${problem}
- ${learn}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

-${installation}

## Usage

-${usage}

## Credits

-${credits}

## License

-${license}

## Tests

-${tests}

## Questions? Contact me @
-GitHub: ${github}
-Email: ${email}`

}




