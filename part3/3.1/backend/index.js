const http = require("http");
const fs = require("fs");
const express = require("express");
const path = require("path");

const app = express();

//MiddleWare
const bodyParser = require("body-parser");
var morgan = require("morgan");
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

//MiddleWare Used
app.use(bodyParser.json());
app.use(morgan('combined', { stream: accessLogStream }))

app.get("/", (request, response) => {
  response.send("<p>Shehryar Bajwa </p>");
});

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2
  },
  {
    name: "Dan Abramov",
    number: "12-42-234234",
    id: 3
  },
  {
    name: "Shehryar Bajwa",
    number: "6044464790",
    id: 4
  }
];

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/info", (request, response) => {
  const date = Date(request.params.date);
  const greeting = "<p>PhoneBook has info for 4 people </p>";

  const body = greeting + date;

  response.send(body);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find(n => n.id === id);

  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }

  reponse.json(person);
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.filter(p => p.id !== id);
  response.status(204).end();
});

app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (!body.name) {
    return response.status(404).json({ error: "Name is missing" });
  }

  if (!body.number) {
    return response.status(404).json({ error: "Number is missing" });
  }

  const name_exists = persons.find(p => p.name === body.name);

  if (name_exists) {
    return response.status(404).json({ error: "Name already exists" });
  }

  const person = {
    name: body.name,
    number: body.number,
    id: Math.floor(Math.random() * Math.floor(100))
  };

  persons = persons.concat(person);

  response.json(person);
});

const port = 3002;
app.listen(port);
console.log(`Server running on port, ${port}`);
