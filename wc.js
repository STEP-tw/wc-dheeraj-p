const fs = require('fs');
const { wc } = require('./src/libs/wc');

const main = function(){
  const filename = process.argv[2];
  const output = wc(filename, fs);
  console.log(output);
}

main();