const { TAB, SPACE, EMTPY_STRING } = require('../constants');

const format = function({ filename, lineCount, wordCount, charCount }) {
  const formattedCount = [EMTPY_STRING, lineCount, wordCount, charCount].join(
    TAB
  );
  return [formattedCount, filename].join(SPACE);
};

const singleOptionFormatter = function(option, fileDetails) {
  const count = fileDetails[option];
  const { filename } = fileDetails;
  const formattedCount = [EMTPY_STRING, count].join(TAB);
  return [formattedCount, filename].join(SPACE);
};

const isDefaultOption = option => option == EMTPY_STRING;

const getFormatter = function(option) {
  if (isDefaultOption(option)) {
    return format;
  }

  const formatter = singleOptionFormatter.bind(null, option);
  return formatter;
};

module.exports = { format, getFormatter };
