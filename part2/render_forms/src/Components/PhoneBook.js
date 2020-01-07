import React, { useState, useEffect } from "react";
import Phone from "./Phone";
import phoneService from "../services/phone.js";

const Phonebook = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("enter a name");
  const [newNumber, setNewNumber] = useState("XXX-XXX-XXXX");
  const [nameExists, setNameExists] = useState(false);

  useEffect(() => {
    phoneService.getAll().then(person => {
      setPersons(person);
    });
  }, []);

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

    const personExists = persons.map(person =>
      person.name === newPhone.name
        ? handleAlert()
        : setPersons(persons.concat(newPhone))
    );

    phoneService.create(newPhone).then(returnedPerson => {
      setPersons(persons.concat(returnedPerson));
    });

    setNewName("");
    setNewNumber("");
  };

  const handleDelete = id => {
    if (window.confirm("Are you sure you want to delete this person?")) {
      const url = `http://localhost:3001/persons/${id}`;
      const contact = persons.find(person => person.id === id);
      const contactToDelete = { ...contact };

      phoneService
        .noteDelete(id, contactToDelete)
        .then(returnedPerson => {
          setPersons(persons.filter(person => person.id !== contactToDelete.id));
          alert(`${contactToDelete.name} has been deleted from the phonebook`)
      })
        .catch(error => {
          alert(`This contact with ${id} was already deleted`);
        })
      }
  }

  const person_rows = () =>
    persons.map(person => {
      return (
        <Phone
          key={person.id}
          name={person.name}
          number={person.number}
          handleDelete={() => handleDelete(person.id)}
        />
      );
    });

  const handleInput = event => {
    setNewName(event.target.value);
  };

  const handleNumberInput = event => {
    setNewNumber(event.target.value);
  };

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
      <h2>People</h2>
      <div>{person_rows()}</div>
    </div>
  );
};

export default Phonebook;
