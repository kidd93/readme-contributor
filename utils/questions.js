const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Whats the title of the project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of the project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What installations are required?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is the application used?'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributes?'
    },
    {
        type:'input',
        name:'tests',
        message:'What tests are required?'
    },
    {
        type:'input',
        name:'email',
        message:'What is your email?'
    },
    {
        type:'input',
        name:'github',
        message:'What is your github username?'
    },
    {
        type:'list',
        name:'license',
        message:'Any licenses?',
        choices:['MIT', 'ISC', 'Javascript', 'None']
    }
];

module.exports = questions;