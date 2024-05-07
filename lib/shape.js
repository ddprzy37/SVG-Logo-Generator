class Triangle {
    constructor() {
      this.color = 'none'; // Default color
      this.points = "150, 18 244, 182 56, 182"; // Fixed points for the triangle
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return `<polygon points="${this.points}" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Triangle };
  