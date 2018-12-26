const { TAB, SPACE, EMTPY_STRING } = require('../constants');

const defaultFormatter = function({filename, lineCount, wordCount,charCount}) {
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

const twoOptionsFormatter = function([firstOption, secondOption], fileDetails) {
  const firstCount = fileDetails[firstOption];
  const secondCount = fileDetails[secondOption];
  const { filename } = fileDetails;
  
  const formattedCount = [EMTPY_STRING, firstCount, secondCount].join(TAB);
  return [formattedCount, filename].join(SPACE);
};

const isDefaultOption = options => options.length == 3;

const areTwoOptions = options => options.length == 2;

const getFormatter = function(options) {
  let formatter = singleOptionFormatter.bind(null, options[0]);

  if (isDefaultOption(options)) {
    formatter = defaultFormatter;
  }

  if (areTwoOptions(options)) {
    formatter = twoOptionsFormatter.bind(null, options);
  }

  return formatter;
};

module.exports = { getFormatter };
