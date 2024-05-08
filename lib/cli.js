const inquirer = require('inquirer');

async function runPrompts() {
    const questions = [
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters:',
            validate: input => input.length <= 3 || 'Only up to three characters are allowed!',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color (keyword or hex):',
            default: '#000000'
        },
        {
            type: 'list',
            name: 'shapeType',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color (keyword or hex):',
            default: '#FFFFFF'
        }
    ];

    return inquirer.prompt(questions);
}

module.exports = { runPrompts };

