const { writeFile } = require('fs');

const badge = license => `![License](https://img.shields.io/badge/License-${license}-blueviolet)`;

const bold = ['Description','Installation', 'Usage', 'Contributors', 'Tests', 'Questions', 'License',
'Table of Contents']

const mdGen = (data) => {

let output = 
`# ${data.title}
## ${bold[7]}
[description](#description)
[installation](#installation)
[usage](#usage)
[contributors](#contributors)
[questions](#questions)
[license](#license)
## ${bold[0]}
${data.description}
## ${bold[1]}
${data.installation}
## ${bold[2]}
${data.usage}
## ${bold[3]}
${data.contributors}
## ${bold[4]}
${data.tests}
## ${bold[5]}
${data.email}
${`https://github.com/${data.github}`}
## ${bold[6]}
${badge(data.license)}
`;

writeFile('./generated.md', output, () => console.log('created README File...'))
}

module.exports = mdGen;
