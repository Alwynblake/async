'use strict';

const fs = require('fs');
const faker = require('faker');
const input = process.argv[2];
const output = process.argv[3];

function editFile() {

  fs.readFile(input, (err, data) => {
    if (err) throw err;
    let fileContents = data.toString();
    let randomNumber = faker.random.number();
    console.log('fileContents Before Modification:', fileContents);
    fileContents = randomNumber;
    console.log('fileContents After Modification:', fileContents);

    fs.writeFile(output, fileContents, (err, data) => {
      if(err) throw err;
      console.log('Congratulations, your file has been written');
    });
  });
}

editFile();
