const { EMPTY_STRING } = require('../constants');

const isNotEmpty = text => text !== EMPTY_STRING;

module.exports = { isNotEmpty };
