class Shape {
  constructor(color) {
      this.color = color;
  }

  render() {
      throw new Error("Render method must be implemented by subclasses");
  }
}

class Triangle extends Shape {
  constructor(color) {
      super(color);
  }

  render() {
      return `<polygon points="50,15 100,100 0,100" fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  constructor(color) {
      super(color);
  }

  render() {
      return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  constructor(color) {
      super(color);
  }

  render() {
      return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
  }
}

module.exports = { Triangle, Circle, Square };
