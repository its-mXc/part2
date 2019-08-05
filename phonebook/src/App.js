import React, {useState,useEffect} from 'react'
import phonebookService from './services/Note.js'


const Person = ({person,toggleDelete}) => (
  <>
    <p>{person.name} {person.number} <button onClick={toggleDelete}>
                                        Delete
                                      </button>
    </p>
  </>
)

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [newNo,setNewNo] = useState('')
  const [filter,setFilter] = useState('')
  const [showAll,setShowAll] = useState(true)

  const toggleDeleteOf = id => {
    phonebookService
      .deletion(id)
        .then(afterDeletion => {
          setPersons(persons.filter(p => p.id !== id))
        })
  }

  useEffect(() => {
   phonebookService
     .getAll()
       .then(initialPersons => {
          setPersons(initialPersons)
      })
    }, [])


  const addPerson = (event) => {
    const isDuplicate = persons.find(person => person.number === newNo && person.name === newName)
    if (typeof isDuplicate === "undefined"){
      event.preventDefault()
      const personObject = {
        name: newName,
        number: newNo
      }
      phonebookService
        .create(personObject)
          .then(newPerson => {
            setPersons(persons.concat(newPerson))
            setNewName('')
            setNewNo('')
          })
    }
    else {
     window.alert(`${newName} is already added to phonebook`)
    }
  }

  const handleName =(event) => {
    setNewName(event.target.value)
  }

  const handleNumber = (event) => {
    setNewNo(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
    setShowAll(false)
  }
  const filtered = showAll ? persons : persons.filter(p => p.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);

  const rows = () => (
    filtered.map(p =>
                  <Person
                  key={p.id}
                  person={p}
                  toggleDelete={() => toggleDeleteOf(p.id)}
                  />
  )
)



  return (
    <div>
      <h1>Phonebook</h1>
      <p>Filter shown with <input value={filter} onChange={handleFilter} /></p>
      <h2>Add a person</h2>
      <form onSubmit={addPerson}>
        <p>name:<input value={newName} onChange={handleName} /></p>
        <p>number:<input value={newNo} onChange={handleNumber}/></p>
        <p><button type="submit">add</button></p>
      </form>
      <h2>Numbers</h2>
      {rows()}
    </div>
  )
}

export default App
