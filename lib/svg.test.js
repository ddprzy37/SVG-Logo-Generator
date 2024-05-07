const { generateSVG } = require('./svg');  // Adjust the path as necessary

describe('SVG generation', () => {
    test('should correctly generate SVG markup', () => {
      const result = generateSVG('A', '#FFF', 'circle', '#000'); 
      expect(result).toContain('<svg'); 
      expect(result).toContain('fill="#000"'); 
    });
  });
  