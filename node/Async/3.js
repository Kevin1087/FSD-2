const fs = require('fs');

fs.readFile('Async/data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const elements = data.trim().split(' ').slice(0, 5).map(Number);
  const sortedElements = elements.sort((a, b) => a - b);

  console.log(sortedElements);
});
