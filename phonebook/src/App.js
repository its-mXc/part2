import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567'
    }
  ])
  const [ newName, setNewName ] = useState('')
  const [newNo,setNewNo] = useState('')

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

  const show = () => (
    persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePerson} />
        </div>
        <div>
          number: <input value={newNo} onChange={handleNumber}/>
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
