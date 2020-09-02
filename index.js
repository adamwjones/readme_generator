var fs = require("fs");
var inquirer = require('inquirer');
inquirer

    .prompt([
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        },

        {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
        },

        {
        type: "input",
        message: "What is your project about?",
        name: "description"
        },

        {
        type: "input",
        message: "Are there any installation instructions?",
        name: "installationInstructions"
        },

        {
        type: "input",
        message: "What are the terms of usage?",
        name: "usage"
        },

        {
        type: "input",
        message: "Who all contributed to this project?",
        name: "contribution"
        },

        {
        type: "input",
        message: "Are there any testing instructions?",
        name: "test"
        },

        {
        type: "checkbox",
        message: "What s the license for this project?",
        name: "license",
        choices: [
            "MIT License", 
            "Artistic License 2.0", 
            "Mozilla Public License 2.0"
        ]
        }
    ])
    .then(answers => {
        
    var badge =  answers.license;

    let pageContent = 
        
`# ${answers.title} 

${returnBadgeMD(badge)}

## Description
This applicating was made by ${answers.contribution}
It is licensed under ${answers.license} 
This project ${answers.description}
Please refer to the table of contents for more information on this app. Enjoy. 

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test](#test)
- [License](#license)
- [Questions](#questions)


### Installation
Please follow these unique installation instructions (if necessary): ${answers.installationInstructions}

### Usage
This application’s code is free to use following the terms of the license identified. Additional usage instructions are: ${answers.usage}

### Contribution
The following amazing people contributed to this application: ${answers.contribution}

### Test
I would not trust my code (or any code) without testing it myself. Please consider performing the following testing on this application prior to use: ${answers.test}

### License               
This application is covered under the terms of the ${answers.license} 
Pease refer to their site for more details of the terms of use permittable.

### Questions

* If you have any questions or comments regarding this project, please contact me at ${answers.email} and I will try to reply as soon as possible. 

* If you liked this project, please checkout my GitHub page at ${answers.username} to see more of my work. 

`; 

        fs.writeFile("/Users/test/Desktop/README_Generator/README.md", pageContent, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        }); 
        
    })
    .catch(error => {
    if(error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
    } else {
        // Something else when wrong
    }
    });

function returnBadgeMD(badge) {
    console.log(badge);

    switch(badge[0]){
        case "MIT License":
           // console.log(badge);
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'

                        //Should I create a variable with text re what the badge is about?
        break;

        case "Artistic License 2.0":
            return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
            
            //Should I create a variable with text re what the badge is about?
        break;

        case "Mozilla Public License 2.0":
            return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
            
            //Should I create a variable with text re what the badge is about?
        break;
    }
};