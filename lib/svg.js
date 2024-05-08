const fs = require('fs');

function generateSVG(text, textColor, shapeType, shapeColor) {
    let svgContent = `<svg width="300" height="200">`;

    switch (shapeType) {
        case 'circle':
            svgContent += `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`;
            break;
        case 'triangle':
            
            svgContent += `<polygon points="150,50 200,150 100,150" fill="${shapeColor}" />`;
            break;
        case 'square':
            svgContent += `<rect x="100" y="100" width="100" height="100" fill="${shapeColor}" />`;
            break;
        default:
            throw new Error(`Unsupported shape type: ${shapeType}`);
    }

    svgContent += `<text x="150" y="100" fill="${textColor}">${text}</text>`;
    svgContent += `</svg>`;

    fs.writeFileSync('logo.svg', svgContent);
    return svgContent;
}


module.exports = { generateSVG };
