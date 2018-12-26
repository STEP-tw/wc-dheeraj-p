const { HYPHEN, EMTPY_STRING } = require('../constants');

const isOption = candidate =>
  candidate.startsWith(HYPHEN) && candidate.length > 1;

const getLongOption = function(shortOption) {
  const options = { l: 'lineCount', c: 'charCount', w: 'wordCount' };
  return options[shortOption];
};

const createParsedArgs = function(options, filename) {
  return { options, filename };
};

const removeHyphen = optionWithHyphen => optionWithHyphen.substr(1);

const getShortOptions = combinedOption =>
  removeHyphen(combinedOption).split(EMTPY_STRING);

const parse = function(args) {
  const optionCandidate = args[0];
  let filename = args[1];
  const shortOptions = getShortOptions(optionCandidate);
  let longOptions = shortOptions.map(getLongOption);

  if (!isOption(optionCandidate)) {
    filename = args[0];
    longOptions = ['lineCount', 'wordCount', 'charCount'];
  }

  return createParsedArgs(longOptions, filename);
};

module.exports = { parse };
