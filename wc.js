const fs = require('fs');
const { wc } = require('./src/libs/wc');

const main = function() {
  const args = process.argv.slice(2);
  const output = wc(args, fs);
  console.log(output);
};

main();
