const { SVG, registerWindow } = require('@svgdotjs/svg.js');
const { createSVGWindow } = require('svgdom');
const fs = require('fs');

const window = createSVGWindow();
const document = window.document;
registerWindow(window, document);

function generateSVG(text, textColor, shapeType, shapeColor) {
    const canvas = SVG(document.documentElement).size(300, 200);
    
    // Define shape based on user selection and add it to canvas
    let shape;
    if (shapeType === 'circle') {
        shape = canvas.circle(100).move(100, 50);
    } else if (shapeType === 'triangle') {
        shape = canvas.polygon('150, 18 244, 182 56, 182').move(100, 50);
    } else if (shapeType === 'square') {
        shape = canvas.rect(100, 100).move(100, 50);
    }
    shape.fill(shapeColor);
    
    // Add text
    canvas.text(text).move(150, 100).fill(textColor);
    
    // Save the SVG to a file
    fs.writeFileSync('logo.svg', canvas.svg());
    return canvas.svg();
}

module.exports = { generateSVG };
