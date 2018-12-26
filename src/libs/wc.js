const { format } = require('../output/formatter');
const { NEWLINE, WORD_SEPARATOR, EMTPY_STRING } = require('../constants');
const { isNotEmpty } = require('../utils/string.js');

const getLines = text => text.split(NEWLINE);

const getLinesCount = lines => lines.length - 1;

const getWordsCount = text => getWords(text).filter(isNotEmpty).length;

const getWords = text => text.split(WORD_SEPARATOR);

const getChars = text => text.split(EMTPY_STRING);

const getCharsCount = text => getChars(text).length;

const getFileDetails = function(filename, fileContent) {
  const lines = getLines(fileContent);
  const lineCount = getLinesCount(lines);
  const wordCount = getWordsCount(fileContent);
  const charCount = getCharsCount(fileContent);
  return { filename, lineCount, wordCount, charCount };
};

const wc = function(filename, fs) {
  const fileContent = fs.readFileSync(filename, 'utf-8');
  const fileDetails = getFileDetails(filename, fileContent);
  return format(fileDetails);
};

module.exports = { wc };
