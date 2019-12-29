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
          id: 1,
          number: '6044464790'
        }
    ]
    );
  
  const [newName, setNewName] = useState("enter a name");
  const [newNumber, setNewNumber] = useState('XXX-XXX-XXXX')
  const [nameExists, setNameExists] = useState(false)
  
  const handleSubmit = event => {
    event.preventDefault();
    const newPhone = {
      name: newName,
      id: persons.length + 1,
      number: newNumber
    };

    const handleAlert = () => {
        alert(`${newName} is already added to phonebook`);
   };

    const condition = persons.map((person) => person.name === newPhone.name ? handleAlert() : setPersons(persons.concat(newPhone)))
    
    setNewName("");
  };

  const handleInput = event => {
    setNewName(event.target.value);
  };
  const person_rows = () => persons.map(person => 
    <Phone key={person.id} name={person.name} number={person.number} />)

  const handleNumberInput = (event) => {
      setNewNumber(event.target.value)
  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          Name: <input value={newName} onChange={handleInput} />
        </div>
        <div>
            Number: <input value={newNumber} onChange={handleNumberInput} />
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
