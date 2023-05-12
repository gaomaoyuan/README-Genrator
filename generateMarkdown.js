function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/github/license/<USER>/<REPO>?style=flat-square)`;;
  }else{
  return ''};
}

function renderLicenseLink(license) {
  if (license !== 'None') {
    return `[${license}](https://opensource.org/licenses/${license})`;
  }else{return ''};
}

function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `## License

This project is licensed under the ${license} license. For more information, see the [LICENSE](${renderLicenseLink(license)}) file.`;
}

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#licnese)
- [Contributing](#contributing)
- [Tests](#tests)
- [Contact Info](#contact info)

## Installation

${data.installation}

## Usage

${data.usage}

## License](#licnese)

${renderLicenseBadge(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Contact Info

For any questions, please contact me at ${data.email} or visit my GitHub profile at [${data.github}](https://github.com/${data.github}).

`;
}

module.exports = generateMarkdown;
