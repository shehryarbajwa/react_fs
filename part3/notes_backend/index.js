const http = require("http");
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());


let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true
  }
];

app.get('/', (request, response) => {
    response.send('<p>Shehryar Bajwa built this</p>');
})

app.get('/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    console.log(id)
    
    const note = notes.find(note => {
        return note.id === id
    })

    if (note){
        response.json(note)
    } else {
        response.status(404).end()
    }
})

app.get('/notes', (request, response) => {
    response.json(notes);
})

console.log(...notes)

const generateId = (note) => {
  //.map will return an array of numbers
  //We wont be able to Math.max on it 
  //Thus we use the spread operator to get the individual values
  //The array can be transformed into individual numbers by using the "three dot" spread syntax ...
  //...notes takes the value of each of the array elements and transforms it into a spread object
  //Then on each object we run the mapper funciton to transform
  
  const maxId = notes.length > 0 ? Math.max(...notes.map(n => n.id)) : 0;

  return maxId + 1
}

app.post('/notes', (request, response) => {
  //Find the largest id in the notes list and take its maximum
  //Then note.id becomes +1 this

  const body = request.body

  if (!body.content){
    return response.status(400).json({
      error: 'content is missing'
    })
  }

  //If the value of important exists it will be set to body.important otherwise false

  const note = {
    content: body.content,
    important: body.important || false,
    date: new Date,
    id: generateId()
  }
  notes = notes.concat(note);

  //Send the created note as the JSON response
  response.json(note);
})

app.delete('/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)
    response.status(204).end()
})

app.post('/notes')

const port = 3001;
app.listen(port);
console.log(`Server running on port, ${port}`);
