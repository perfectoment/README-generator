function generateMarkdown(data, response) {
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

![Screenshot](${response.data.avatar_url}.png)

Github email: ${response.data.email}


`;
}

module.exports = generateMarkdown;
