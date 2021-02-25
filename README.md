# Checkbox
A to-do list application built with PostgreSQL, Express, React, and Node.js
## Features
- Adding, removing, editing, and "checking off" tasks from the list and database
## Prerequisites/Dependencies
PostgreSQL must be installed, and a database and table for this application created. 
```zsh
$ CREATE DATABASE perntodo;

$ CREATE TABLE todo(todo_id SERIAL PRIMARY KEY, description VARCHAR(255));
```
Configure server/database.js with your details:
```zsh
const pool = new Pool({
  user: "[Your User]",
  password: "[Your Password]",
  host: "localhost",
  port: 5432,
  database: "perntodo"
});
```
Node dependencies must be installed from the client and server directories:
```zsh
$ npm install
```
## Usage
Server
```zsh
$ node index
```
Client
```zsh
$ npm start
```
## Contact Info

```
name  := "Annabel Winters-McCabe"
email := "anwintersmccabe@davidson.edu"
```
