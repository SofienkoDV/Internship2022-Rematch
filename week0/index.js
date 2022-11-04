import express from 'express';
import axios from 'axios';
import fs from 'fs';

const app = express();

app.listen(4444, (error) => {
  if (error) {
    console.log(error);
  }
  console.log('Server is running on port 4444');
});

function getTodo() {
  return axios.get('https://jsonplaceholder.typicode.com/todos');
}

function getAlbums() {
  return axios.get('https://jsonplaceholder.typicode.com/albums');
}

function getUsers() {
  return axios.get('https://jsonplaceholder.typicode.com/users');
}

function writeToFile(data, fileName) {
  fs.writeFile(fileName, JSON.stringify(data), (err) => {
    if (err) {
      console.log(err);
    }
  });
}

function main() {
  const env = process.argv[2];
  if (env === 'PRODUCTION') {
    getTodo().then((response) => {
      writeToFile(response.data, 'assets/todo.json');
    });
  } else if (env === 'DEV') {
    getAlbums().then((response) => {
      writeToFile(response.data, 'assets/albums.json');
    });
  } else {
    getUsers().then((response) => {
      writeToFile(response.data, 'assets/users.json');
    });
  }
}

main();
