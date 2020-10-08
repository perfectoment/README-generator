function generateMarkdown(data) {
  return `
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

# ${data.title}


# Description
${data.description}


# Table of Contents

## How to install: 
${data.install}

## How to use: 
${data.usage}

## This project is licensed by: 
${data.license}

## Contributors:
${data.contributors}

## Test
${data.test}

## Github Profile
${data.Githubpics}

${data.Githubemail}


`;
}

module.exports = generateMarkdown;
