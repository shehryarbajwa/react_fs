import React, { useState } from "react";
import Phone from "./Phone";

const persons = [
  {
    name: "Arto Hellas"
  }
];

const Phonebook = () => {
  const [persons, setPersons] = useState(
      [
      { 
          name: "Arto Hellas",
          id: 1
        }
    ]
    );
  const [newName, setNewName] = useState("enter a name");

  const handleSubmit = event => {
    event.preventDefault();

    const newPhone = {
      name: newName,
      id: persons.length + 1
    };
    

    setPersons(persons.concat(newPhone));
    console.log(persons)
    setNewName("");
  };

  const handleInput = event => {
    setNewName(event.target.value);
  };

  //const person_rows = () => persons.keys(name).map(person => person.name)
  const person_rows = () => persons.map(person => 
    <Phone key={person.id} name={person.name} />)

  
  

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          Name: <input value={newName} onChange={handleInput} />
        </div>
        <div>
          <button onClick={handleSubmit}>Add Name</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {person_rows()}
      </div>
    </div>
  );
};

export default Phonebook;
