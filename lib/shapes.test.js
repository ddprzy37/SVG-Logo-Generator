const { Triangle, Circle, Square } = require('./shape');

// Triangle Test
describe('Triangle class', () => {
  test('renders an SVG triangle with specified color', () => {
    const triangle = new Triangle();
    triangle.setColor("blue");
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});

// Circle Test
describe('Circle class', () => {
  test('renders an SVG Circle with specified color', () => {
    const circle = new Circle();
    circle.setColor("red");  // Correctly set the color
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="50" fill="red" />');
  });
});

// Square Test
describe('Square class', () => {
  test('renders an SVG square with specified color', () => {
    const square = new Square();
    square.setColor("green");  // Correctly set the color
    expect(square.render()).toEqual('<rect x="100" y="50" width="100" height="100" fill="green" />');
  });
});
