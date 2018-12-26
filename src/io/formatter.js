const {
  TAB,
  SPACE,
  OPTION_CHAR_COUNT,
  OPTION_LINE_COUNT,
  OPTION_WORD_COUNT
} = require('../constants');

const format = function(fileDetails, options) {
  const orderedOptions = setOrder(options);
  const counts = orderedOptions.map(option => fileDetails[option]);
  const formattedCount = TAB + counts.join(TAB);
  return [formattedCount, fileDetails.filename].join(SPACE);
};

const setOrder = function(options) {
  const sortedOptions = [
    OPTION_LINE_COUNT,
    OPTION_WORD_COUNT,
    OPTION_CHAR_COUNT
  ];
  return sortedOptions.filter(option => options.includes(option));
};

module.exports = { format };
