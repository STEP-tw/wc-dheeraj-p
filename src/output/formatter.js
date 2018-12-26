const { TAB, SPACE, EMTPY_STRING } = require('../constants');

const format = function({ filename, lineCount, wordCount, charCount }) {
  const formattedCount = [EMTPY_STRING, lineCount, wordCount, charCount].join(TAB);
  return [formattedCount, filename].join(SPACE);
};

module.exports = { format };
