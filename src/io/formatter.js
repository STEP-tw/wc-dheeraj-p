const { TAB, SPACE } = require('../constants');

const format = function(fileDetails, options) {
  const counts = options.map(option => fileDetails[option]);
  const formattedCount = TAB + counts.join(TAB);
  return [formattedCount, fileDetails.filename].join(SPACE);
};

module.exports = { format };
