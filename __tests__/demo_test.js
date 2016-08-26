describe('sum', function() {
  it('adds 1 + 2 to equal 3', function() {
    const sum = function(x, y) {
      return x + y;
    };
    expect(sum(1, 2)).toBe(3);
  });
});