'use strict';

const fs = require('fs');
let contents = [];

module.exports = exports = (files, callback) => {
  readAll([...files], callback);
  contents = [];
};

const readOne = (file, callback) => {
  fs.readFile( file, (err, data) => {
    if(err) { callback(err); }
    else { callback(undefined, data); }
  });
};

const readAll = (paths, callback) => {

  let contents = [];
  readOne(paths[0], (err, data) => {
    if (err) {
      callback(err);
    }
    else {
      console.log('Read File 1');
      contents.push(data.toString().trim());
    }
  });

  readOne(paths[1], (err, data) => {
    if (err) {
      callback(err);
    }
    else {
      console.log('Read File 2');
      contents.push(data.toString().trim());
    }
  });

  readOne(paths[2], (err, data) => {
    if (err) {
      callback(err);
    }
    else {
      console.log('Read File 3');
      contents.push(data.toString().trim());
    }
  });

  callback(undefined, contents);
};