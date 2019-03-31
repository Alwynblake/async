# Async 

## Author: Alistair Blake

### Purpose

This application uses `fs` to read a .txt file, and either overwrite the contents or write to a new file. It will write to the specified output file with a randomly generated number using `faker`.

### Getting Started:

1. `git clone https://github.com/Alwynblake/async.git`
2. `npm install`

### Using the CLI

The CLI accepts 4 arguments:
1. `node`
2. `edit-file.js`
3. `<input-file-name>`
4. `<output-file-name>`

* Please note that the 3rd argument (input file name) must already exist in your file system.

To read and write to .txt files using this application, you may use the following examples:

#### To overwrite the contents of a file:

* Ex: `node edit-file.js test.txt test.txt`

#### To write contents to a new file:

* Ex: `node edit-file.js test.txt output.txt`


