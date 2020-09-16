// function to generate markdown for README
function generateMarkdown(data) {
  return `
  #Project Title
  # ${data.title}


  ## Table of Contents
  * [Installation](#How to Install)
  * [Usage](#Usage Info)
  * [Contributions](#How to Contribute)
  * [Testing](#Test)
  * [License](#License Used)
  * [Question](#Questions)


  #Project Description
  # ${data.description}

  #How to Install
  # ${data.installation}

  #Usage Info
  # ${data.usage}

  #How to Contribute
  # ${data.contribution}

  #Test
  # ${data.tests}

  #License Used
  # ${data.license}

  ##Questions 
  #Ask me questions on Github or via email! 
  # github.com/${data.username}
  # ${data.email}

  (https://img.shields.io/beerpay/kylegero/WK9_HW_Readme_Generator)
`;
}
module.exports = generateMarkdown;
