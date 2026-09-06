const fs = require('fs');

describe('TSP Report', () => {
  it('should contain Algorithm A description', () => {
    const content = fs.readFileSync('report.md', 'utf8');
    expect(content).toContain('Algorithm A');
  });

  it('should contain Algorithm B description', () => {
    const content = fs.readFileSync('report.md', 'utf8');
    expect(content).toContain('Algorithm B');
  });
});