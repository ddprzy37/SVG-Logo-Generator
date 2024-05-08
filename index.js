const fs = require('fs');
const { runPrompts } = require('./lib/cli');
const { Triangle, Circle, Square } = require('./lib/shape');

async function main() {
    const answers = await runPrompts();  // Collect input from the user

    let shape;
    // Instantiate the shape based on user selection
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

    // Generate SVG content with centered text
    const svgContent = `<svg width="300" height="200">
      ${shape.render()}
      <text x="150" y="100" fill="${answers.textColor}" text-anchor="middle" dominant-baseline="middle">${answers.text}</text>
    </svg>`;

    fs.writeFileSync('logo.svg', svgContent);  // Write the SVG to a file
    console.log('Generated logo.svg');
}

main();


