const {
  HYPHEN,
  EMPTY_STRING,
  OPTION_LINE_COUNT,
  OPTION_WORD_COUNT,
  OPTION_CHAR_COUNT
} = require('../constants');

const isOption = candidate =>
  candidate.startsWith(HYPHEN) && candidate.length > 1;

const getLongOption = function(shortOption) {
  const options = {
    l: OPTION_LINE_COUNT,
    c: OPTION_CHAR_COUNT,
    w: OPTION_WORD_COUNT
  };
  return options[shortOption];
};

const createParsedArgs = function(options, filename) {
  return { options, filename };
};

const removeHyphen = optionWithHyphen => optionWithHyphen.substr(1);

const getOptions = args => args.filter(isOption);

const parse = function(args) {
  let options = getOptions(args);
  let filename = args[options.length];
  options = options.map(removeHyphen);
  options = options.join(EMPTY_STRING).split(EMPTY_STRING);
  let longOptions = options.map(getLongOption);

  if (longOptions.length == 0) {
    filename = args[0];
    longOptions = [OPTION_LINE_COUNT, OPTION_WORD_COUNT, OPTION_CHAR_COUNT];
  }

  return createParsedArgs(longOptions, filename);
};

module.exports = { parse };
