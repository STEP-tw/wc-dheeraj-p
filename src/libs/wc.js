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

const getFileDetail = function({ filename, fileContent }) {
  const lines = getLines(fileContent);
  const lineCount = getLinesCount(lines);
  const wordCount = getWordsCount(fileContent);
  const charCount = getCharsCount(fileContent);
  return { filename, lineCount, wordCount, charCount };
};

const readFile = function(reader, encoding, filename) {
  const fileContent = reader(filename, encoding);
  return { fileContent, filename };
};

const sum = function(firstFileDetail, secondFileDetail) {
  let lineCount = firstFileDetail.lineCount + secondFileDetail.lineCount;
  let charCount = firstFileDetail.charCount + secondFileDetail.charCount;
  let wordCount = firstFileDetail.wordCount + secondFileDetail.wordCount;
  const filename = 'total';

  return { filename, lineCount, wordCount, charCount };
};

const getTotal = function(fileDetails) {
  return fileDetails.reduce(sum);
};

const readFiles = function(reader, filenames) {
  const utf8Reader = readFile.bind(null, reader, ENCODING_UTF8);
  return filenames.map(utf8Reader);
};

const wc = function(args, fs) {
  const { filenames, options } = parse(args);
  const files = readFiles(fs.readFileSync, filenames);
  const fileDetails = files.map(getFileDetail);
  const formatForOptions = format.bind(null, options);

  if (files.length > 1) {
    fileDetails.push(getTotal(fileDetails));
  }
  const finalOutput = fileDetails.map(formatForOptions);
  return finalOutput.join(NEWLINE);
};

module.exports = { wc };
