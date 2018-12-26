const { format } = require('../io/formatter');
const {
  NEWLINE,
  WORD_SEPARATOR,
  EMPTY_STRING,
  ENCODING_UTF8
} = require('../constants');

const { isNotEmpty } = require('../utils/string.js');
const { parse } = require('../io/parser');

const getLines = text => text.split(NEWLINE);

const getLinesCount = lines => lines.length - 1;

const getWordsCount = text => getWords(text).filter(isNotEmpty).length;

const getWords = text => text.split(WORD_SEPARATOR);

const getChars = text => text.split(EMPTY_STRING);

const getCharsCount = text => getChars(text).length;

const getFileDetails = function(filename, fileContent) {
  const lines = getLines(fileContent);
  const lineCount = getLinesCount(lines);
  const wordCount = getWordsCount(fileContent);
  const charCount = getCharsCount(fileContent);
  return { filename, lineCount, wordCount, charCount };
};

const wc = function(args, fs) {
  const { filename, options } = parse(args);
  const fileContent = fs.readFileSync(filename, ENCODING_UTF8);
  const fileDetails = getFileDetails(filename, fileContent);
  return format(fileDetails, options);
};

module.exports = { wc };
