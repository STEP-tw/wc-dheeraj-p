const { HYPHEN } = require('../constants');

const isOption = candidate => candidate.startsWith(HYPHEN) && candidate.length > 1;

const getLongOption = function(shortOption) {
  const options = { '-l': 'line', '-c': 'char', '-w': 'word' };
  return options[shortOption];
};

const parse = function(args) {
  const optionCandidate = args[0];
  let filename = args[1];
  let option = '';

  if (!isOption(optionCandidate)) {
    filename = args[0];
    return { filename, option };
  }

  option = getLongOption(optionCandidate);
  return { filename, option };
};

module.exports = { parse };
