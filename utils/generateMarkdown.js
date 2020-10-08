function generateMarkdown(data) {
  return `
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

# ${data.title}


# Description
${data.description}


# Table of Contents

## What to install: 
${data.install}

## How to use: 
${data.usage}

## This project is licensed by: 
${data.license}

## Contributors:
${data.contributors}

## Test
${data.test}

# Contact
if you have any questions about this project you can email me at ${data.githubEmail}
or you can see my other projects at github.com/${data.username}.


`;
}

module.exports = generateMarkdown;
