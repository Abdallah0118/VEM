const fs = require('fs');

const content = 'This is some additional content.';

fs.appendFile('file.txt', content, err => {
  if (err) throw err;
  console.log('Content appended.');
});

