class Shape {
  constructor(color = 'none') {  // Ensure it accepts a color with a default value
      this.color = color;
  }

  setColor(color) {
      this.color = color;
  }
}


class Triangle extends Shape {
  constructor(color = 'none') {
      super(color);  // Calls the constructor of the parent class, Shape
      this.points = "150, 18 244, 182 56, 182";  // Fixed points for the triangle
  }

  render() {
      return `<polygon points="${this.points}" fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  constructor(color) {
      super(color); // Calls the constructor of the parent class, Shape
  }

  render() {
      return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  constructor(color) {
      super(color); // Calls the constructor of the parent class, Shape
  }

  render() {
      return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
  }
}

module.exports = { Triangle, Circle, Square };
