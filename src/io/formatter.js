const {
  TAB,
  SPACE,
  OPTION_CHAR_COUNT,
  OPTION_LINE_COUNT,
  OPTION_WORD_COUNT
} = require('../constants');

const format = function(options, fileDetail) {
  const orderedOptions = setInOrder(options);
  const counts = orderedOptions.map(option => fileDetail[option]);
  const formattedCount = TAB + counts.join(TAB);
  return [formattedCount, fileDetail.filename].join(SPACE);
};

const setInOrder = function(options) {
  const orderedOptions = [
    OPTION_LINE_COUNT,
    OPTION_WORD_COUNT,
    OPTION_CHAR_COUNT
  ];
  return orderedOptions.filter(option => options.includes(option));
};

module.exports = { format };
