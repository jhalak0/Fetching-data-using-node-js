# File System Data Fetching

## Aim

The goal of this project is to fetch stored data from one file and transfer it to another using Node.js and the File System (fs) module.

## Introduction to File System

The File System module in Node.js provides a set of functionalities that allow you to work with the file system on your operating system. Some of the commonly used features of the fs module include:

- Reading data from a file using `fs.readFile`.
- Writing data to a file and replacing the file if it already exists using `fs.writeFile`.
- Creating new files.
- Updating existing files.
- Removing files.
- Renaming files.

## Code

### Node.js Code

```javascript
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
```

### Files

- `Fetch.js`: The Node.js script responsible for fetching data from one file to another.
- `input.txt`: The source file containing the data to be fetched.
- `output.txt`: The destination file where the fetched data will be written.

## Result / Output

Upon running the Node.js script (`Fetch.js`), the data from the `input.txt` file will be read and written to the `output.txt` file. Any errors encountered during this process will be logged to the console.

## Learning Outcomes

By working on this project, you will gain knowledge and experience in using the Node.js File System module for the following purposes:

a) File Reading
b) File Creation
c) File Updating
d) File Removal
e) File Renaming

Feel free to explore and modify the code to suit your specific needs and further enhance your understanding of file operations in Node.js.
