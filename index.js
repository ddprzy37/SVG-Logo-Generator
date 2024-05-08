const fs = require('fs');
const { runPrompts } = require('./lib/cli');
const { Triangle, Circle, Square } = require('./lib/shape');

async function main() {
    const answers = await runPrompts();
    let shape;

    switch (answers.shapeType) {
        case 'circle':
            shape = new Circle(answers.shapeColor);
            break;
        case 'triangle':
            shape = new Triangle(answers.shapeColor);
            break;
        case 'square':
            shape = new Square(answers.shapeColor);
            break;
    }

    const svgContent = `<svg width="300" height="200">${shape.render()}<text x="150" y="100" fill="${answers.textColor}">${answers.text}</text></svg>`;

    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
}

main();
