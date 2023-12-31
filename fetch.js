const fs = require('fs');

// File paths
const inputFile = 'input.txt';
const outputFile = 'output.txt';

// Read data from the input file
fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading ${inputFile}: ${err}`);
    return;
  }

  // Write the fetched data to the output file
  fs.writeFile(outputFile, data, 'utf8', (err) => {
    if (err) {
      console.error(`Error writing to ${outputFile}: ${err}`);
      return;
    }
    
    console.log(`Data from ${inputFile} has been fetched and written to ${outputFile}`);
  });
});
