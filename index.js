const readlineSync = require('readline-sync');
const { SVG, registerWindow } = require('@svgdotjs/svg.js');
const { createSVGWindow } = require('svgdom');
const fs = require('fs');

// Set up SVG.js for node.js environment
const window = createSVGWindow();
const document = window.document;
registerWindow(window, document);

// Prompt for user input
const text = readlineSync.question('Enter up to three characters: ', {
  limit: input => input.length <= 3,
  limitMessage: 'Sorry, only up to three characters are allowed.'
});
const textColor = readlineSync.question('Enter text color (keyword or hex): ');
const shapes = ['circle', 'triangle', 'square'];
const shapeChoice = readlineSync.keyInSelect(shapes, 'Choose a shape:');
const shapeColor = readlineSync.question('Enter shape color (keyword or hex): ');

// Create the SVG
const canvas = SVG(document.documentElement).size(300, 200);

// Define shape based on user selection
let shape;
switch (shapes[shapeChoice]) {
  case 'circle':
    shape = canvas.circle(100).move(100, 50);
    break;
  case 'triangle':
    shape = canvas.polygon('50,15 100,100 0,100').move(100, 50);
    break;
  case 'square':
    shape = canvas.rect(100, 100).move(100, 50);
    break;
}
shape.fill(shapeColor);

// Add text
const textElement = canvas.text(text).move(150, 100).fill(textColor);

// Save the SVG to a file
fs.writeFileSync('logo.svg', canvas.svg());
console.log('Generated logo.svg');
