import React, { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [newNo,setNewNo] = useState('')
  const [filter,setFilter] = useState('')


  const addPerson = (event) => {
    const isDuplicate = persons.find(person => person.name === newName)
    if (typeof isDuplicate === "undefined"){
      event.preventDefault()
      const personObject = {
        name: newName,
        number: newNo
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNo('')
    }
    else {
     window.alert(`${newName} is already added to phonebook`)
    }
  }

  const handlePerson =(event) => {
    setNewName(event.target.value)
  }

  const handleNumber = (event) => {
    setNewNo(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const filterBook = persons.filter(person => person.name === filter)

  const show = () => {
    if (filter === '') {
      return (
        persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)
      )
    }
    else {
      return (
        filterBook.map(person => <p key={person.name}>{person.name} {person.number}</p>)
      )
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter}/>
      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handlePerson={handlePerson}
        newNo={newNo}
        handleNumber={handleNumber}
      />
      <h2>Numbers</h2>
      <Persons show={show()}/>
    </div>
  )
}

export default App
