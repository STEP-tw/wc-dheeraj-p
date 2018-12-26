const { EMTPY_STRING } = require('../constants');

const isNotEmpty = text => text !== EMTPY_STRING;

module.exports = { isNotEmpty };
