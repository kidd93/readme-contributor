const { writeFile } = require('fs');

const badge = license => `![License](https://img.shields.io/badge/License-${license}-blueviolet)`;

const mdGen = (data) => {

let output = 
`# ${data.title}
${badge(data.license)}

`;

writeFile('./README.md', output, () => console.log('created README File...'))
}

module.exports = mdGen;
