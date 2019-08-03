import React from 'react'

const PersonForm = ({addPerson,newName,handlePerson,newNo,handleNumber}) => (
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
)

export default PersonForm
