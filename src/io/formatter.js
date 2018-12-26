const { TAB, SPACE, EMTPY_STRING } = require('../constants');

const format = function({ filename, lineCount, wordCount, charCount }) {
  const formattedCount = [EMTPY_STRING, lineCount, wordCount, charCount].join(
    TAB
  );
  return [formattedCount, filename].join(SPACE);
};

const lineCountFormatter = function({ filename, lineCount }) {
  const formattedCount = [EMTPY_STRING, lineCount].join(TAB);
  return [formattedCount, filename].join(SPACE);
};

const getFormatter = function(option) {
  const formatters = { line: lineCountFormatter, '': format };
  return formatters[option];
};

module.exports = { format, getFormatter };