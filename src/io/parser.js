const { HYPHEN } = require('../constants');

const isOption = candidate => candidate.startsWith(HYPHEN) && candidate.length > 1;

const getLongOption = function(shortOption) {
  const options = { '-l': 'lineCount', '-c': 'charCount', '-w': 'wordCount' };
  return options[shortOption];
};

const createParsedArgs = function(option, filename) {
  return { option, filename };
};

const parse = function(args) {
  const optionCandidate = args[0];
  let filename = args[1];
  let option = getLongOption(optionCandidate);

  if (!isOption(optionCandidate)) {
    filename = args[0];
    option = '';
  }

  return createParsedArgs(option, filename);
};

module.exports = { parse };
