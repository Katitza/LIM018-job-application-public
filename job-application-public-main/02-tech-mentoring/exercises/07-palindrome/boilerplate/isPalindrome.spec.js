const isPalindrome = require('./isPalindrome');

describe('isPalindrome', () => {
  it('should return true for ana', () => {
    expect(isPalindrome('ana')).toBe(true);
  });

  it('should return false for holo', () => {
    expect(isPalindrome('holo')).toBe(false);
  });

  it('should return true for neveroddoreven', () => {
    expect(isPalindrome('neveroddoreven')).toBe(true);
  });

  it('should return true for stresseddesserts', () => {
    expect(isPalindrome('stresseddesserts')).toBe(true);
  });
});
