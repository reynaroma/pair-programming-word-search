const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    
    // Check horizontally
    for (const l of horizontalJoin) {
      if (l.includes(word)) {
        return true;
      }
    }
    
    // Transpose the letters array to switch rows and columns
    const transposedLetters = letters[0].map((_, colIndex) => letters.map(row => row[colIndex]));
    const verticalJoin = transposedLetters.map(ls => ls.join(''));
    
    // Check vertically
    for (const l of verticalJoin) {
      if (l.includes(word)) {
        return true;
      }
    }
    
    return false;
  };

module.exports = wordSearch