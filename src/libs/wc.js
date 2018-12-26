const wc = function(filename, fs){
  const fileContent = fs.readFileSync(filename, 'utf-8');
  const lines = fileContent.split("\n");
  const lineCount = lines.length - 1;
  const wordCount = lines.map(line => line.split(" ").filter(word => word != "").length).reduce((a,b) => a+b, 0);
  const charCount = fileContent.split('').length;
  return ['', lineCount, wordCount, charCount].join("\t") + ` ${filename}`;
}

module.exports = { wc };