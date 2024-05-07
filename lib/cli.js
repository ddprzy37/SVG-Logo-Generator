const readlineSync = require('readline-sync');
const { generateSVG } = require('./svg');

function main() {
  const text = readlineSync.question('Enter up to three characters: ', {
    limit: input => input.length <= 3,
    limitMessage: 'Sorry, only up to three characters are allowed.'
  });
  const textColor = readlineSync.question('Enter text color (keyword or hex): ');
  const shapeChoice = readlineSync.question('Choose a shape (circle, triangle, square): ');
  const shapeColor = readlineSync.question('Enter shape color (keyword or hex): ');

  const svgContent = generateSVG(text, textColor, shapeChoice, shapeColor);
  console.log('Generated logo.svg');
}

main();
