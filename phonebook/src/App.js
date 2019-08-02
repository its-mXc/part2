import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('')

  const addPerson = (event) => {
    const isDuplicate = persons.find(person => person.name === newName)
    if (typeof isDuplicate === "undefined"){
      event.preventDefault()
      const personObject = {name: newName}
      setPersons(persons.concat(personObject))
      setNewName('')
    }
    else {
     window.alert(`${newName} is already added to phonebook`)
    }
  }

  const handleNumber =(event) => {
    setNewName(event.target.value)
  }

  const show = () => (
    persons.map(person => <p key={person.name}>{person.name}</p>)
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {show()}
    </div>
  )
}

export default App
